"use strict";

const  md5 = require('md5');
const _ = require('underscore');


//GET /services/subtasks.getList HTTP/1.1
//Host	qianka.com
//Access-Control-Allow-Origin	*
//Accept	*/*
// X-QK-TIME	1463271127
// X-QK-SCHEME	com.heijiaoyinyue.app
// X-QK-SIGN	4638C5208BBC9CC40085EA9C0451990A
// Access-Control-Allow-Headers	X-Qk-Auth, *
// X-QK-APPV	iPhone8,1|1280.250000|com.heijiaoyinyue.app|3.0.2016040701
// Accept-Language	zh-cn
// Accept-Encoding	gzip, deflate
// Origin	http://qianka.com
// X-QK-API-KEY	c26007f41f472932454ea80deabd612c
// Connection	keep-alive
// User-Agent
// Referer	http://qianka.com/qk/task/timedList
// X-QK-AUTH	4013E176-3F4D-4864-9B1A-2B9BEBABF0AD|b9b1ad8f-feb4-495f-bf48-0b1b1d8ff57c|7394422535187494

let arr = [
    '/services/pages.dashboard',
    'qianka.com',
    '1463294252',
    'http://qianka.com/qk/dashboard?from=webclip',
    'com.heijiaoyinyue.app',
    '4638C5208BBC9CC40085EA9C0451990A',
    'iPhone8,1|1280.250000|com.heijiaoyinyue.app|3.0.2016040701',
    'c26007f41f472932454ea80deabd612c',
    'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1',
    'http://qianka.com/qk/task/timedList',
    '013E176-3F4D-4864-9B1A-2B9BEBABF0AD|b9b1ad8f-feb4-495f-bf48-0b1b1d8ff57c|7394422535187494',
    '013E176-3F4D-4864-9B1A-2B9BEBABF0AD',
    'b9b1ad8f-feb4-495f-bf48-0b1b1d8ff57c',
    '7394422535187494'
];

let combie = ['','_', '@', '#'];

function getStr(str, ar, cbs){
    let re = [];
    re.push(str);
    cbs.forEach(function(c){
        let s = str;
        ar.forEach(function (a) {
            s += c + a;
            re.push(s);
        });
    });
    return re;
}

let m = 'BF4464D7F1676E0C386E6673F0E89267';
arr.forEach(function (a, i) {
    let t = _.clone(arr);
    t.splice(i, 1);
    let cc = getStr(a, t, combie);
    //console.log(cc);
    cc.forEach(function (f) {
        if(md5(f).toUpperCase() == m.toUpperCase()){
            console.error('find it !!!!');
        }
    })
});