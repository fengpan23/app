/**
 * Created by fengpan on 16/5/11.
 */

"use strict";
const http = require('http');
const querystring = require('querystring');
const moment = require('moment');
const _ = require('underscore');
const req = require('../libs/req');
const common = require('../libs/common');

let TIME = 1463290361;
let SIGN = 'FC6EFC1760E937CFF15A64E257C7977B';

let tasks = new Map();

function keepAppOnline(){
    let opt = {
        url: "http://qianka.com/key/1?uuid=b9b1ad8f-feb4-495f-bf48-0b1b1d8ff57c",
        headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E238 appLabel/heijiaoyinyue appScheme/com.heijiaoyinyue.app appVersion/3.0.2016040701"
        }
    }

}

function appList(inter){
    let opt = {
        url: "http://qianka.com/services/subtasks.getList",
        headers: {
            "X-QK-TIME": TIME,
            "X-QK-SIGN": SIGN,
            "X-QK-SCHEME": "com.heijiaoyinyue.app",
            "X-QK-API-KEY": "c26007f41f472932454ea80deabd612c",
            "X-QK-APPV": "iPhone8,1|1280.250000|com.heijiaoyinyue.app|3.0.2016040701",
            "X-QK-AUTH": "4013E176-3F4D-4864-9B1A-2B9BEBABF0AD|b9b1ad8f-feb4-495f-bf48-0b1b1d8ff57c|7394422535187494",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1"
        }
    };

    req.reget(opt, inter, 'qkList').on('qkList', function (result) {
        if(result.payload && result.payload.subtasks){
            console.log("tasks size : ", tasks.size);

            result.payload.subtasks.forEach(function (task) {

                if(task.qty > 0){          //  有量
                    if(1 == task.type && (1 == task.status && task.qty > 0 || 2 == task.status)){      //可抢  status（1: 未开始， 3: 已做过）
                        console.log('可抢： ', task);
                        //TODO： click
                        clickTask(task.id);
                    }

                    if(4 == task.type){     //未开始
                        //console.log(task.qty, ' task: ', task.start_date);
                        let m = moment({hour: +task.start_date.substr(-5, 2), minute: +task.start_date.substr(-2, 2)});;
                        if(task.start_date.indexOf('明日') > -1){     //明日
                            m.add(1, 'd');
                        }

                        if(!_.find(tasks.keys(), function(num){return num === m.valueOf();})){
                            let interval = m - new Date() - 200;
                            //console.log('还有分钟: ', parseInt(interval / (60 * 1000)));
                            if(interval > 5 * 1000){
                                let near = common.near(tasks.keys(), m.valueOf(), 1000);
                                near && clearTimeout(tasks.get(near));

                                tasks.set(m.valueOf(), setTimeout(function () {
                                    appList(1000);
                                }, interval));
                            }
                        }
                    }

                    if(1 == task.type && (0 == task.status || 3 == task.status)){      //已经做过的任务
                        //console.log('已做过： ', task.title);
                        //TODO: user others id do it
                    }
                }
            });
        }else{
            console.log(result);
        }
    });
}


/**
 *
 * @param tid  task id
 */
function clickTask(tid){
    let opt = {
        hostname: 'qianka.com',
        path: '/services/subtasks.start',
        method: "POST",
        headers: {
            "X-QK-TIME": TIME,
            "X-QK-SIGN": SIGN,
            "X-QK-SCHEME": "com.heijiaoyinyue.app",
            "X-QK-API-KEY": "c26007f41f472932454ea80deabd612c",
            "X-QK-APPV": "iPhone8,1|1280.250000|com.heijiaoyinyue.app|3.0.2016040701",
            "X-QK-AUTH": "4013E176-3F4D-4864-9B1A-2B9BEBABF0AD|b9b1ad8f-feb4-495f-bf48-0b1b1d8ff57c|7394422535187494",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1"
        }
    };
    let data = {
        task_id: tid
    };
    console.log('click id: ', tid);
    let re = http.request(opt, function(res){
        let result = '';
        res.on('data', function(chunk){
            result += chunk;
        });
        res.on('end', function() {
            console.error('result: ', result);
        });
    });
    re.write(querystring.stringify(data));
    re.end();
}
//clickTask(135755);

appList(5000);
