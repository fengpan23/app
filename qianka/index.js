/**
 * Created by fengpan on 16/5/11.
 */

"use strict";
const req = require('../libs/req');

function appList(){
    let opt = {
        url: "http://qianka.com/services/subtasks.getList",
        headers: {
            "X-QK-API-KEY": "c26007f41f472932454ea80deabd612c",
            "X-QK-AUTH": "4013E176-3F4D-4864-9B1A-2B9BEBABF0AD|b9b1ad8f-feb4-495f-bf48-0b1b1d8ff57c|7394422535187494",
            "X-QK-SIGN": "96C48A0ABDAC99F941835A5303D957F8",
            "X-QK-SCHEME": "com.heijiaoyinyue.app",
            "X-QK-APPV": "iPhone8,1|1280.250000|com.heijiaoyinyue.app|3.0.2016040701",
            "X-QK-TIME": 1462980945
        }
    };

    req.reget(opt, null, 'qkList').on('qkList', function (result) {
        console.log(result.payload.subtasks);
    });
}

appList();
