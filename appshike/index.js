"use strict";
const http = require('http');
const querystring = require('querystring');
const req = require('../libs/req');
const async = require('async');

const user_id = 21793284;
const key = 'FCDA63C88010782F5867CB8E79CD29FE';

//加载试玩网页
//var options = {
//    url: 'http://i.appshike.com/shike/appList?t=1462890071352',
//    Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
//    Connection: "keep-alive",
//    headers: {
//        "Cookie": 'IORI="aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgzkG40ZbPZkpGtgUTsS8Pimm0WWwyKGL0D1tnjPh8jX/oa9z/vdhPDN64uc9CbOZ5k="; JSESSIONID=8DBD0FF13CF203DEBE7817FEF90BEE8C; OD=aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgxS36fT4wtomhJfcU/fpId7; OIL=bT7bRcUJoewMEn8bBtYri99pw7S63INRBE4r%2BzbHY9%2BLmp4r%2B7Pp%2Bu0uwtGmijrkV29tTFk8chNx3pfrbN7n5w%3D%3D; aliyungf_tc=AQAAAKg7EHnw4AkAFPOUPc1TRfK39MCO',
//        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1",
//        "Accept-Language": "zh-cn",
//        "Cache-Control": "max-age=0"
//    }
//};
//req.reget(options, 3000, 'applist').on('applist', function (data) {
//    console.log('list data: ', data);
//});


/**
 * click record
 * @param appid     app id
 * @param oid       order id
 * @param type      app type
 * {appid:appid,user_id:user_id,order_Id:order_id,type:"app"},
 */
function clickRecord(appid, oid){
    let opt = {
        hostname: 'i.appshike.com',
        path: '/shike/user_click_record',
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1',
            'Cookie': 'IORI="aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgzkG40ZbPZkpGtgUTsS8Pimm0WWwyKGL0D1tnjPh8jX/oa9z/vdhPDN64uc9CbOZ5k="; JSESSIONID=8DBD0FF13CF203DEBE7817FEF90BEE8C; OD=aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgxS36fT4wtomhJfcU/fpId7; OIL=bT7bRcUJoewMEn8bBtYri99pw7S63INRBE4r%2BzbHY9%2BLmp4r%2B7Pp%2Bu0uwtGmijrkV29tTFk8chNx3pfrbN7n5w%3D%3D; aliyungf_tc=AQAAAKg7EHnw4AkAFPOUPc1TRfK39MCO',
        }
    };
    let data = {
        appid: appid,
        order_Id: oid,
        type: 'app',
        user_id: user_id
    };

    console.log('record data: ', data);

    let re = http.request(opt, function(res){
        let result = '';
        res.on('data', function(chunk){
            result += chunk;
        });
        res.on('end', function() {
            //result === -1  被抢光
            console.error('result: ', result, typeof result);
            if(~result){
                copyKeyword({appid: appid, oid: oid, uid: user_id});
            }
        });
    });
    re.write(querystring.stringify(data));
    re.end();
}

/**
 * 复制关键字
 * @param opt
 */
function copyKeyword(opt){
    let options = {
        url: "http://i.appshike.com/shike/copy_keyword?appid="+ opt.appid +"&user_id="+ opt.uid +"&order_Id="+ opt.oid +"&t=" + +new Date() + 10000,
        headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1",
            "Referer": "http://i.appshike.com/shike/appDetails/372353614/74807/FCDA63C88010782F5867CB8E79CD29FE?ds=r0",
            "Cookie": 'IORI="aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgzkG40ZbPZkpGtgUTsS8Pimm0WWwyKGL0D1tnjPh8jX/oa9z/vdhPDN64uc9CbOZ5k="; JSESSIONID=2AC1FB9BD2FF803099FDFAA7972B08DE; OD=aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgxS36fT4wtomhJfcU/fpId7; OIL=tV5rpN%2B_Wr1rcJXMQpaiiZ5uiAhO85JaB3FinHpVxheO6DGVKS5doLy8NYn%2B6Jy22siDSCOI2HCLscFmK0T_Eg%3D%3D; aliyungf_tc=AQAAAE0fa2EmCA8AyPOUPYwLBb0fpNzN'
        }
    };
    req.reget(options, null, 'copyKeyword').on('copyKeyword', function (res) {
        console.log('copy keyword result: ', res);
    });
}

/**
 * get app list
 * @param timeout  repeat timeout
 * @param complete  请求结束后重复
 */
function applist(timeout, complete){
    let opt = {
        url: "http://i.appshike.com/shike/getApplist/"+ user_id +"/" + key,
        form: {'r': +new Date()},
        headers: {
            "Cookie": 'IORI="aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgzkG40ZbPZkpGtgUTsS8Pimm0WWwyKGL0D1tnjPh8jX/oa9z/vdhPDN64uc9CbOZ5k="; JSESSIONID=8DBD0FF13CF203DEBE7817FEF90BEE8C; OD=aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgxS36fT4wtomhJfcU/fpId7; OIL=bT7bRcUJoewMEn8bBtYri99pw7S63INRBE4r%2BzbHY9%2BLmp4r%2B7Pp%2Bu0uwtGmijrkV29tTFk8chNx3pfrbN7n5w%3D%3D; aliyungf_tc=AQAAAKg7EHnw4AkAFPOUPc1TRfK39MCO',
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1",
            "Accept-Language": "zh-cn",
            "Cache-Control": "max-age=0",
            "Referer": "http://i.appshike.com/shike/appList",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        }
    };
    req.reget(opt, timeout, 'applist').on('applist', function(lists){
        //console.log('applist.length : ', lists.length);
        lists.forEach(function (item) {
            //console.log('name: ', item.search_word);
            if(item.order_status_disp > 0){
                //TODO: record time
                console.log('share app time: ', new Date());
                clickRecord(item.appid, item.order_id);
            }
        });
    });
}
/**
 * user id had play list
 */
function playedList(){
    let opt = {
        url: 'http://i.appshike.com/shike/playAppList/' + user_id,
        headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1"
        }
    };
    req.reget(opt, null, 'canPlayList').on('canPlayList', function(lists){
        console.log('applist.length : ', lists);

    });
}

/**
 * 启动小兵
 */
function keepOnline(cb){
    let opt = {
        url: 'http://xb.appshike.com/json_time',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form:{
            'p': 'LHn0y+BOAjuATSgiQphUaKXi459IIqOk/VXFSKR8R08Qm8gvUFlarfL/aZDoYNg8SrH/h7KMYVB+bXaCfOM8pon1hqcNox7eUWsuuwGI1BJRfFYmKDNzJy0iTN2SJV/EsgjDDZo8y7llnXufWhAneEHxdW2QlT4aus2ZqJCDCvd+ks1EJ635hWqk+MNS5q+EuVKLn4TYNxuatI4lpDgzYHR3MWurTN3T/sYH1pS7fFF90oSuLuEcqTbgeHc+MXdCHRG5nKodXjizW6u+hyAbmDkidHDRs0mTRGoJ6aOO8yfxummu3UIV7lYkfnOaW3e3hohzkRUWKtvpcmNIx5FElpcAQbGrvevE'
        }
    };
    req.reget(opt, null, 'online').once('online', function (data) {
        console.log('小兵启动 status: ', data);
        cb && cb();
        cb = null;
    });
}

/**
 * 校验小兵是否后台运行
 */
function checkOnline(timeout, cb){
    let opt = {
        url: 'http://i.appshike.com/itry/xbStatus?token=C723BD5CD22203560E1A011CFEE968C1&t=' + Math.random()
    };
    req.reget(opt, timeout, 'check').on('check', function (data) {
        console.log(new Date().toLocaleTimeString(), ' check online : ', data);
        if(!data){
            keepOnline()
        }
        cb && cb();
        cb = null
    });
}

async.series([
    keepOnline,
    function (cb) {
        checkOnline(10 * 1000, cb);
    },
    function (cb) {
        applist(1 * 1000);
        cb();
    }
], function (err, result) {
})


// TODO
// 1. 获取 app 列表 （可行）
// 2. 模拟验证， 模拟点击 （可行）－> 可实现自动抢任务。
// 3. 抢到任务后 模拟复制文字 （可行）－>
// 4. 模拟下载  试客app校验 -> 抓取app提交的包 模拟提交。
// 5. 模拟打开

