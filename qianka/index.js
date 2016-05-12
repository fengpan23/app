/**
 * Created by fengpan on 16/5/11.
 */

"use strict";
const http = require('http');
const querystring = require('querystring');
const req = require('../libs/req');

function keepAppOnline(){
    let opt = {
        url: "http://qianka.com/key/1?uuid=b9b1ad8f-feb4-495f-bf48-0b1b1d8ff57c",
        headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13E238 appLabel/heijiaoyinyue appScheme/com.heijiaoyinyue.app appVersion/3.0.2016040701"
        }
    }

}
/**
 * 	GET /services/subtasks.getList
 * change           1,   X-QK-TIME	1463068647
 *                  2,   X-QK-SIGN	BB9E65B431826B30628445AF28D476FE
 */

function appList(){
    let opt = {
        url: "http://qianka.com/services/subtasks.getList",
        headers: {
            "X-QK-TIME": 1463069649,
            "X-QK-SIGN": "7D24B3B6E430F9A6C14CEA6811F817AD",
            "X-QK-SCHEME": "com.heijiaoyinyue.app",
            "X-QK-API-KEY": "c26007f41f472932454ea80deabd612c",
            "X-QK-APPV": "iPhone8,1|1280.250000|com.heijiaoyinyue.app|3.0.2016040701",
            "X-QK-AUTH": "4013E176-3F4D-4864-9B1A-2B9BEBABF0AD|b9b1ad8f-feb4-495f-bf48-0b1b1d8ff57c|7394422535187494",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1"
        }
    };

    req.reget(opt, null, 'qkList').on('qkList', function (result) {
        if(result.payload && result.payload.subtasks){
            result.payload.subtasks.forEach(function (task) {
                if(task.qty > 0){          //  有量
                    console.log('task: ', task);
                    if(task.status === 3){      //可抢
                        //TODO： click
                    }

                    if(task.status === 5){      //已经做过的任务
                        //TODO: user others id do it
                    }
                }
            });
        }else{
            console.log(result);
        }
    });
}

//var n = {
//    task_id: t
//};
//e && (n.card_type = e);
//var i = {
//    uri: window.QK_ENDPOINT + "services/subtasks.start",
//    data: n
//};
//return this.post(i)

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
            "X-QK-TIME": 1463069649,
            "X-QK-SIGN": "7D24B3B6E430F9A6C14CEA6811F817AD",
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
clickTask(135755)

//appList();
