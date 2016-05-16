<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="content-type" content="text/html;charset=utf8">
    <meta name="referrer" content="never">
    <meta id="viewport" name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" />
    <title>正在跳转</title>
    <style>
        html,body{
            height:100%;
            padding:0px;
            margin:0px;
        }
        body{
            background-color: #F4F4F4;
        }
        .panel {
            padding: 18px 22px 10px;
        }
        .mesg-block{
            margin-bottom:20px;
        }
        .mesg-block p{
            font-size: 16px;
            line-height: 1.3em;
            color: #000;
            text-shadow: 0px 1px 0px #FFF;
            text-align:center;
        }
    </style>
</head>
<body>
<div class="panel">
    <div class="mesg-block">
        <p>正在跳转...</p>
    </div>
</div>
<script>
    var htmlDecode = function(str){
        return str
                .replace(/&#39;/g, '\'')
                .replace(/<br\s*(\/)?\s*>/g, '\n')
                .replace(/&nbsp;/g, ' ')
                .replace(/&lt;/g, '<')
                .replace(/&gt;/g, '>')
                .replace(/&quot;/g, '"')
                .replace(/&amp;/g, '&');
    };
    function getURLParameter(url, name) {
        if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
            return decodeURIComponent(name[1]);
    }
    if (!getURLParameter(location.href, "r")) {
        setTimeout(function(){
            var r_url = getURLParameter(location.href, "return_url");
            if (r_url)
                window.location.href=decodeURIComponent(r_url);
            if (document.referrer)
                window.location.href=document.referrer;
        },10000);
    }
    location.href = decodeURIComponent(htmlDecode(getURLParameter(location.href, "gs_url")));
</script>
</body>
</html>


	GET /?t=1463208823&gs_url=https%3A//itunes.apple.com/WebObjects/MZStore.woa/wa/search%3Fmedia%3Dsoftware%26country%3DCN%26mt%3D8%26term%3D HTTP/1.1
Host	42.96.250.196
Connection	keep-alive
Accept	text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
User-Agent	Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13E238 Safari/601.1
Accept-Language	zh-cn
Referer	http://qianka.com/qk/task/timedDetail/136119
Accept-Encoding	gzip, deflate


http://42.96.250.196/?t=1463208823&gs_url=https%3A//itunes.apple.com/WebObjects/MZStore.woa/wa/search%3Fmedia%3Dsoftware%26country%3DCN%26mt%3D8%26term%3D



	POST /services/keys.updateState HTTP/1.1
Host	qianka.com
Content-Type	application/octet-stream
X-QK-APPV	iPhone8,1|1280.250000|com.heijiaoyinyue.app|3.0.2016040701
X-QK-SIGN	FF737732DE5D5AE2919FFE3D701F0046
X-QK-SCHEME	com.heijiaoyinyue.app
X-QK-TIME	1463209126
Accept	*/*
Access-Control-Allow-Headers	X-Qk-Auth, *
Access-Control-Allow-Origin	*
Accept-Language	zh-Hans-CN;q=1
Accept-Encoding	gzip, deflate
X-QK-API-KEY	c26007f41f472932454ea80deabd612c
User-Agent	Heijiaoyinyue/3.0 (iPhone; iOS 9.3.1; Scale/2.00)
Content-Length	2674
Connection	keep-alive
X-QK-AUTH	4013E176-3F4D-4864-9B1A-2B9BEBABF0AD|b9b1ad8f-feb4-495f-bf48-0b1b1d8ff57c|7394422535187494


{
	"payload": {
		"set_interval": 937
	},
	"status": "ok"
}