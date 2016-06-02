$("#voteBtn").click(function() {
    var params = {
        picid: AppData.userid,
        abbr: GlobalData.abbr,
        openid: PageConfig.activityInfo.openid,
        activityid: PageConfig.activityInfo.activityId
    };
    $.get("updateVote.shtml?" + $.param(params), function(res) {
        if (res.code == 0) {
            if (res.data == 1) {
                sweetAlert("感谢您为" + AppData.username + "投了宝贵的一票。");
            } else if (res.data == -2) {
                sweetAlert('您的投票失败，不能重复投票。');
            } else if (res.data == -1) {
                sweetAlert('您今天的' + AppData.daytimes + '次投票已经用完，请明天再来哦。');
            }
        } else {
            sweetAlert(res.msg);
        }
    });

    return false;
});


GET /drugstore/mactivity/vote/updateVote.shtml?picid=699&abbr=hhhrdyfls&openid=oePyxtxzOAIbc6Kvkk5_PwJ-rFos&activityid=1 HTTP/1.1
Host	wx.hrjkgw.com
Accept-Encoding	gzip, deflate
Cookie	JSESSIONID=02407D4772D37604B197993BF701C3A4
Connection	keep-alive
Accept	*/*
 User-Agent	Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 MicroMessenger/6.3.16 NetType/WIFI Language/zh_CN
 Referer	http://wx.hrjkgw.com/drugstore/mactivity/vote/vote_1_699.shtml?code=0310of7x0ZD8tm1r868x0rAe7x00of7R&state=123
 Accept-Language	zh-cn
 X-Requested-With	XMLHttpRequest

 {
 "code": 0,
 "msg": null,
 "data": 1
 }

 投票失败
 {
 "code": 0,
 "msg": null,
 "data": -2
 }