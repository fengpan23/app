// $("#voteBtn").click(function() {
//     var params = {
//         picid: AppData.userid,
//         abbr: GlobalData.abbr,
//         openid: PageConfig.activityInfo.openid,
//         activityid: PageConfig.activityInfo.activityId
//     };
//     $.get("updateVote.shtml?" + $.param(params), function(res) {
//         if (res.code == 0) {
//             if (res.data == 1) {
//                 sweetAlert("感谢您为" + AppData.username + "投了宝贵的一票。");
//             } else if (res.data == -2) {
//                 sweetAlert('您的投票失败，不能重复投票。');
//             } else if (res.data == -1) {
//                 sweetAlert('您今天的' + AppData.daytimes + '次投票已经用完，请明天再来哦。');
//             }
//         } else {
//             sweetAlert(res.msg);
//         }
//     });
//
//     return false;
// });
//
//
// GET /drugstore/mactivity/vote/updateVote.shtml?picid=699&abbr=hhhrdyfls&openid=oePyxtxzOAIbc6Kvkk5_PwJ-rFos&activityid=1 HTTP/1.1
// Host	wx.hrjkgw.com
// Accept-Encoding	gzip, deflate
// Cookie	JSESSIONID=02407D4772D37604B197993BF701C3A4
// Connection	keep-alive
// Accept	*/*
//  User-Agent	Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 MicroMessenger/6.3.16 NetType/WIFI Language/zh_CN
//  Referer	http://wx.hrjkgw.com/drugstore/mactivity/vote/vote_1_699.shtml?code=0310of7x0ZD8tm1r868x0rAe7x00of7R&state=123
//  Accept-Language	zh-cn
//  X-Requested-With	XMLHttpRequest
//
//  {
//  "code": 0,
//  "msg": null,
//  "data": 1
//  }
//
//  投票失败
//  {
//  "code": 0,
//  "msg": null,
//  "data": -2
//  }
"use strict";
const request = require('request');
const _ = require('underscore');

let result = [];
function abc() {
    let abbr = 'hhhrdyfls';  //cawrdyfls
    let openid = 'oePyxtx';    //oePyxtxzOAIbc6Kvkk5_PwJ-rFos //oePyxtzTHa4mfuG13u5r_9Q7xwuw
    for (let i = 0; i < 21; i++) {
        switch (_.random(1, 3)){
            case 1:
                openid += String.fromCharCode(_.random(65, 90));
                break;
            case 2:
                openid += String.fromCharCode(_.random(97, 122));
                break;
            case 3:
                openid += String.fromCharCode(_.random(48, 57));
                break;
        }
    }
    request({
        url: "http://wx.hrjkgw.com/drugstore/mactivity/vote/updateVote.shtml?picid=699&abbr=" + abbr + "&openid="+ openid +"&activityid=1",
        headers: {
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1",
            "Referer": "http://i.appshike.com/shike/appDetails/372353614/74807/FCDA63C88010782F5867CB8E79CD29FE?ds=r0",
            "Cookie": 'IORI="aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgzkG40ZbPZkpGtgUTsS8Pimm0WWwyKGL0D1tnjPh8jX/oa9z/vdhPDN64uc9CbOZ5k="; JSESSIONID=2AC1FB9BD2FF803099FDFAA7972B08DE; OD=aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgxS36fT4wtomhJfcU/fpId7; OIL=tV5rpN%2B_Wr1rcJXMQpaiiZ5uiAhO85JaB3FinHpVxheO6DGVKS5doLy8NYn%2B6Jy22siDSCOI2HCLscFmK0T_Eg%3D%3D; aliyungf_tc=AQAAAE0fa2EmCA8AyPOUPYwLBb0fpNzN'
        }
    }, (a, b, c)=> {
        try{
            c = JSON.parse(c);
        }catch(e){console.error(e)}
        if (c && c.data == 1) {
            result.push(openid);
            console.log(openid);
        }
        recall(_.random(1, 10) * 1000);

    }).on('data', (data)=> {

    }).on('end', (a, b, c)=> {

    }).on('error', (e)=> {
        console.error(e)
    });
}

let tt = 0;
function recall(t) {
    if(tt > 10 * 60 * 1000){tt =0}
    tt += t;
    result.length < 500 && setTimeout(abc, tt);
}
abc();
