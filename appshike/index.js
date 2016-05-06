"use strict";
//const http = require('http');
//
////var postData = querystring.stringify({
////    'msg' : 'Hello World!'
////});
//
//var options = {
//    hostname: 'i.appshike.com',
//    port: 80,
//    path: '/shike/appList?t=1462514230260',
//    method: 'GET',
//    referer: "http://i.appshike.com/shike/appList?t=1462455019697",
//    headers: {
//        'Content-Type': 'application/x-www-form-urlencoded',
//        'Cookie': 'IORI="aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgzkG40ZbPZkpGtgUTsS8Pimm0WWwyKGL0D1tnjPh8jX/oa9z/vdhPDN64uc9CbOZ5k="; JSESSIONID=DD6610D797F886F3A8FD5B0A91E94757; OD=aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgxS36fT4wtomhJfcU/fpId7; OIL=Zp0IgrzuhjpSrThTIiK%2BgncBgTI20kzlC2SVYC7TRkHYJ6nFT%2Bxawo%2B2I94MmksPOpB5Dn8s84gu1vjjXJ3H7A%3D%3D; aliyungf_tc=AQAAALyd6Ud3sAsAA3EGdLHcoyzg/NeU'
//    },
//    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1"
//};
//
//var req = http.request(options, (res) => {
//    console.log(`STATUS: ${res.statusCode}`);
//    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//    res.setEncoding('utf8');
//    res.on('data', (chunk) => {
//        console.log(`BODY: ${chunk}`);
//    });
//    res.on('end', () => {
//        console.log('No more data in response.')
//    })
//});
//
//req.on('error', (e) => {
//    console.log(`problem with request: ${e.message}`);
//});
//
//// write data to request body
//req.write('/n/n');
//req.end();

var request = require('request');
var options = {
    url: 'http://i.appshike.com/shike/appList?t=1462514230260',
    Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    Connection: "keep-alive",
    headers: {
        "Cookie": 'IORI="aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgzkG40ZbPZkpGtgUTsS8Pimm0WWwyKGL0D1tnjPh8jX/oa9z/vdhPDN64uc9CbOZ5k="; JSESSIONID=70605611EBAC8F704DBCB011DC01D8BC; OD=aZIInp/V1n511KTgIkh63mmFNWXmofqW9gqnfSgIPgxS36fT4wtomhJfcU/fpId7; OIL=Zp0IgrzuhjpSrThTIiK%2BgncBgTI20kzlC2SVYC7TRkHYJ6nFT%2Bxawo%2B2I94MmksPOpB5Dn8s84gu1vjjXJ3H7A%3D%3D; aliyungf_tc=AQAAAJT5xjAhTgcAA3EGdCNZ9PlyQXsk',
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1",
        "Accept-Language": "zh-cn",
        "Cache-Control": "max-age=0"
    }
};

request(options, function (error, response, body) {
    // decompressed data as it is received
    console.log(response.headers);
    if (!error && response.statusCode == 200) {
    }
}).on('data', function(data) {
    // decompressed data as it is received
    //console.log('decoded chunk: ' + data)
}).on('response', function(response) {
    //console.log(';response: ', response);
    //    response.setEncoding('utf8');
    //// unmodified http.IncomingMessage object
        let st = '';
        response.on('data', function(data) {
            // compressed data as it is received
            st += data;
            //console.log('received ' + data + ' bytes of compressed data')
        }).on('end', function () {
            console.log(st);
        })
    });

