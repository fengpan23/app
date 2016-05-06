"C:\Program Files (x86)\JetBrains\WebStorm 10.0.4\bin\runnerw.exe" "C:\Program Files (x86)\nodejs\node.exe" index.js





<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta http-equiv="Pragma" content="no-cache" />
<meta content="telephone=no" name="format-detection" />
<meta content="email=no" name="format-detection" />
<link href="http://static.appshike.com/css/basecss.css?v=20160202" rel="stylesheet" type="text/css">
<script type="text/javascript" charset="utf-8" src="http://static.appshike.com/js/jquery.min.1.11.1.js"></script>
<script type="text/javascript" charset="utf-8" src="http://static.appshike.com/js/shike.js?v=1"></script>

<script type="text/javascript">
    $(function(){
        if(!/micromessenger/i.test(navigator.userAgent)){
            setMenu();
        }
    })
</script>

<!doctype html>
<html>
<head>
<title>试玩列表</title>
<link href="http://static.appshike.com/css/listcss.css" media="all" rel="stylesheet" type="text/css">
<script type="text/javascript">
function itryMarquee(target){
	var initNum = Math.ceil($('#'+target).width()/$('#'+target+' span:eq(0)').width());
	$('#'+target).html(new Array(initNum+2).join($('#'+target).html()));
	var pos = parseInt($('#'+target+' span:eq(1)').offset().left-$('#'+target+' span:eq(0)').offset().left,10);
	var obj = $('#'+target)[0];
	return function(){
		if(pos == obj.scrollLeft){
			obj.scrollLeft = 1;
		}else{
			obj.scrollLeft++;
		}
	};
}
	 var payFlag = 0;  //控制跳到缺货页面 0-有付费应用 1-没有付费应用
     var doingAppid='';
     var doingOrderid='';
     var doingDetails_url='';
     var doingBundleId='';
     var doingProcessName='';
     var doingStatus='r0';
     var noPlay = '0';
	 token = 'C723BD5CD22203560E1A011CFEE968C1';
	 var timer=null;
	 $(function(){
		 $(window).bind("pageshow",function(event){
			 if(event.originalEvent.persisted){
				 $('.msg_xb_notopen').hide();
			 }
			 if(timer!=null){
				 clearInterval(timer);
			 }
			 init();
	     });
	 });
	 function init(){
		 bridgeCallHideMenu();
         try{getXBStatus()}catch(e){};
         if(""==1){
             removeStore(shokey_param_key);
             setStore(shokey_param_key, 'FCDA63C88010782F5867CB8E79CD29FE');
         }else{
             checkLegal();
         }
         if(!'true'=='true'){
        	 $('.wrap').css("padding","0px");
         }else if(!/micromessenger/i.test(navigator.userAgent) && 'offline_xiaobing'=='online_xiaobing'){
        	 $('#appList').click(function(){
        		 $('.offline_xiaobing').length>0 && $('.msg_xb_notopen').show();
	        	 $('.j_openxb').click(function(){
	        		 try{getXBStatus()}catch(e){};
	        	 });
        	 });
         }
         getApp('21793284','FCDA63C88010782F5867CB8E79CD29FE');//试玩列表
         getPlay('21793284');
         getCantPlay('21793284');
	 }

     //检查关监狱
     function checkLegal(){
         var data = {
             oid_md5:'FCDA63C88010782F5867CB8E79CD29FE',
             cur_oid_md5: $.trim(getStore(shokey_param_key)),
             r:+new Date()
         };
         $.post("/shike/checkLegal",data,function(s){
             if(s.status=='0'||s.status=='1'||s.status=='4'){
                 removeStore(shokey_param_key);
                 setStore(shokey_param_key, s.cur_oid_md5);
             }else if(s.status=='2'){
                 location.href = s.url;
             }else if(s.status=='3'){
                 location.href = s.url;
             }
         },"json");
     }
     function getwxurl(url){
    	 if(/micromessenger/i.test(navigator.userAgent)){
    		 return url+(url.indexOf('?')>0?'&':'?')+'&micromessage=true';
    	 }else{
    		 return url;
    	 }
     }

	 //app
     function getApp(user_id,oid_md5){
    	 $('#appList').html('');
         doingAppid='';
         doingOrderid='';
         doingDetails_url='';
         doingBundleId='';
         doingProcessName='';
         doingStatus='r0';
         var allApp = [];
         var repeatApp = [];
         $.ajax({
    		 type:"post",
    		 url:"/shike/getApplist/"+user_id+"/"+oid_md5,
    		 data:{r:+new Date()},
    		 async:false,
    		 success:function (back,status,xhr) {

             if(back != null && back.length >0){
                $('#appList').show();
                var appendStr = "";
                var appendZeroStr = "";
                $.each(back,function(i,n){
                	if($.inArray(n.appid, allApp)>-1){
                		if($.inArray(n.appid, repeatApp)==-1){
                			repeatApp.push(n.appid);
                		}
                	}
                	allApp.push(n.appid);
                    if(n.status==0 || n.status==-9){
                    	var ss = '等待下载 ';
                    	if(n.status==-9){
                    		ss = '等待复制关键词 ';
                    	}else{
                    		doingStatus='r1';
                    	}
                    	appendStr +=
                    	"<div class='trial cf Click_bj' name='play_"+n.appid+"' onclick=\"btnStatus('21793284','"+n.order_id+"','"+n.appid+"','"+n.details_url+"','"+n.order_status_disp+"')\">"+
                             "<span class='appicon'><img src='"+n.icon+"' alt=''></span>"+
                             "<div class='appinfo'>"+
                                 "<h3 class='name'><font style='color:#ed1c24;font-size: 36px;' id='show_status'>"+ss+"</font><font id='deling_time' style='color:#ed1c24;font-size: 36px;'></font></h3>"+
                                 "<p class='mode'><span>"+n.type_name+"</span><span>剩余"+n.order_status_disp+"份</span></p>"+
                                 "<span class='price' name='canplay"+n.appid+"'>"+changeTwoDecimal_f(n.down_price)+"<font>元</font></span>"+
                             "</div>"+
                     	"</div>"
                    	doingAppid = n.appid;
                    	doingOrderid = n.order_id;
                    	doingDetails_url = n.details_url;
                    	doingBundleId = n.bundle_id;
                    	doingProcessName = n.process_name;
                      	var now = new Date(xhr.getResponseHeader("Date")).getTime() || new Date().getTime();
                    	var ct=n.s_time.substring(0,19).replace("-","/").replace("-","/");
                 		var clickTime = new Date(ct).getTime();
                     	if( n.status==-9&&n.s_time!=''){
                     		//2分钟
                     		if((clickTime+120000-now)>0){
                    			countDown(clickTime+120000-now);
                     		}
                    	}else{
                    		//10等待下载
                    		getStatus(clickTime+600000-now);
                    	}
                     }else{
                    	 var appstr =
                    		 "<div class='trial cf Click_bj' name='play_"+n.appid+"' onclick=\"btnStatus('21793284','"+n.order_id+"','"+n.appid+"','"+n.details_url+"','"+n.order_status_disp+"')\">"+
		                             "<span class='appicon'><img src='"+n.icon+"' alt=''></span>"+
		                             "<div class='appinfo'>"+
		                                 "<h3 class='name'>"+n.search_word+"</h3>"+
		                                 "<p class='mode'><span>"+n.type_name+"</span><span>剩余"+n.order_status_disp+"份</span></p>"+
		                                 "<span class='price' name='canplay"+n.appid+"'>"+changeTwoDecimal_f(n.down_price)+"<font>元</font></span>"+
		                             "</div>"+
		                     "</div>"
                    	 if(n.order_status_disp>0){
	                    	 appendStr += appstr;
                    	 }else{
                    		 appendZeroStr += appstr;
                    	 }
                     }
                });
                $('#appList').append(appendStr+appendZeroStr);

             }else{
                $('#appList').hide();
                appFlag = 1;
             }
         }});
     }

	function changeTwoDecimal_f(x) {
		return isNaN(x)?0:Number(x).toFixed(2);
	}

	 //play
     function getPlay(user_id){
    	 $('#playList').html('');
         $.post("/shike/playAppList/"+user_id, {r:+new Date()}, function (back) {
             if(back != null && back.length >0){
                $('#playList').show();
                var url = getwxurl("/shike/playAppDetails/APPID/ORDERID/USER_ID?play_url=PLAY_URL");
                $.each(back,function(i,n){
                	var order_status_disp_play;
                	if(n.order_number == '-1'){
                    	var leaveNum = Number(200000)-Number(n.click_number);
                		order_status_disp_play = leaveNum>0?leaveNum:9;
                	}else{
                		var leaveNum = Number(n.under_number)-Number(n.click_number);
                		order_status_disp_play = leaveNum>0?leaveNum:9;
                	}
                    $('#playList').append(
                    	     "<div class='trial cf'><a href='"+url.replace('APPID', n.appid).replace('ORDERID',n.order_id).replace('USER_ID',user_id).replace('PLAY_URL',n.play_url)+"' class='Click_bj'>"+
                    		 	"<span class='appicon'><img src='"+ n.icon+"' alt=''></span>"+
                    		     "<div class='appinfo'>"+
                    		     	"<h3 class='name'>"+ n.search_word+"</h3>"+
                    		         "<p class='mode'><span>"+ n.type_name +"</span><span>剩余"+ order_status_disp_play+"份</span></p>"+
                    		         "<span class='play'>Play</span>"+
                    		     "</div>"+
                    		 "</a></div>"
                    		);
                });
             }else{
                $('#playList').hide();
                payFlag = 1;
                noPlay = '1';
             }
         }, "json");
     }


     //cantPlayList
     function getCantPlay(user_id){
    	 $('#cantPlayList').html('');
         $.post("/shike/cantPlayLists/"+user_id, {flg:3,r:+new Date()}, function (back) {
        	 var dataObj=eval(back[0].notPlayList);
        	 var arr = [0];
        	 if(!(back[0].playList.indexOf('no')>-1)){
        		 arr = eval(back[0].playList);
        	 }else{
        		 var num = back[0].playList.split(':')[1];
        		 if(num>dataObj.length){
        			 $('#show_all').show();
        			 $('#show_all').html('查看全部'+num+'款');
        		 }
        	 }
              if(dataObj != null && dataObj.length>0){
                 $('#cantPlayList').show();
                 $.each(dataObj,function(i,n){
                	 if(document.getElementsByName("canplay"+n.appid).length == 0){
                		 if($.inArray(n.appid, arr)==-1){
		                  	 $('#cantPlayList').append(
		                  			 "<div class='trial cf'><a href='javascript:ishadPlay(1);' class='warm_prompt Click_bj'>"+
		                  		 		"<span class='appicon'><img src='"+ n.icon+"' alt='''></span>"+
		                  		     	"<div class='appinfo'>"+
		                  		     	"<h3 class='name'>"+ n.name+"</h3>"+
		                  		        "<p class='mode'><span>"+n.type_name+"</span><span>剩余0份</span></p>"+
		                  		        "<span class='price'>"+n.moneyDisp+"<font>元</font></span>"+
		                  		    	"</div>"+
		                  		 	"</a></div>"
		                          );
                		 }
                	 }
                 });
             }else{
                 $('#cantPlayList').hide();
             }
         }, "json");
     }
     //cantPlayList
     function getAllCantPlay(user_id){
    	 $('#show_all').hide();
         $.post("/shike/cantPlayLists/"+user_id, {flg:0,r:+new Date()}, function (back) {
        	 var dataObj=eval(back[0].notPlayList);
        	 var arr = [0];
        	 if(!(back[0].playList.indexOf('no')>-1)){
        		 arr = eval(back[0].playList);
        	 }
              if(dataObj != null && dataObj.length>0){
                 $('#cantPlayList').show();
                 $('#cantPlayList').html('');
                 $.each(dataObj,function(i,n){
                	 if(document.getElementsByName("canplay"+n.appid).length == 0){
                		 if($.inArray(n.appid, arr)==-1){
		                  	 $('#cantPlayList').append(
		                  			 "<div class='trial cf'><a href='javascript:ishadPlay(1);' class='warm_prompt Click_bj'>"+
		                  		 		"<span class='appicon'><img src='"+ n.icon+"' alt='''></span>"+
		                  		     	"<div class='appinfo'>"+
		                  		     	"<h3 class='name'>"+ n.name+"</h3>"+
		                  		        "<p class='mode'><span>"+n.type_name+"</span><span>剩余0份</span></p>"+
		                  		        "<span class='price'>"+n.moneyDisp+"<font>元</font></span>"+
		                  		    	"</div>"+
		                  		 	"</a></div>"
		                          );
                		 }
                	 }
                 });
             }
         }, "json");
     }

//跳转到邀请好友
function inviteFriends(){
	if(/micromessenger/i.test(navigator.userAgent)){
		location.href=openWxUrl+"&redirect_uri=http%3A%2F%2Fitry.com%2Fitry%2Finvite%2FtoInviteFriendsNew2&response_type=code&scope=snsapi_base&state="+'21793284'+"_2#wechat_redirect";
	}else{
		location.href='http://i.appshike.com/itry/invite/toInviteFriendsOfXB?type=2';
	}
}
//时间差
function compareMinutes(dateClick){
	var dateClick2=new Date();
	var date3=dateClick2.getTime()-dateClick;	//时间差的毫秒数
	var minutes=Math.floor(date3/(60*1000));	//计算小时数后剩余的毫秒数
	return minutes;
}
function getStatus(timer){
	if(doingAppid!=''){
        $.post("/shike/getAppStatus/"+doingBundleId+"/"+'21793284'+"/"+doingProcessName, {}, function (back) {
        	if(back.error=='false'){
        		if(back.flg=='downloading'){
        			//下载中
        			$('#show_status').html('下载中 ');
        			doingStatus='r2';

        		}else if(back.flg=='waitOpen'){
        			doingStatus='r3';
        			//等待打开
        			$('#show_status').html('等待打开 ');
        			if(back.timer!=''&&back.timer.indexOf('-')==-1){
        				countDown(back.timer);
        			}
        		}else if(back.flg=='waitValidate'){
        			doingStatus='r4';
        			$('#show_status').html('等待验证 ');
        		}else{
        			if(timer!=''&&timer.indexOf('-')==-1){
        				countDown(timer);
        			}
        		}
        	}
		}, "json");
	}
}
function countDown(time){
    sys_second = parseInt(time/1000,10);
    timer = setInterval(function(){
        if (sys_second > 1) {
            sys_second -= 1;
            var hour = Math.floor((sys_second / 3600) % 24);
            var minute = Math.floor((sys_second / 60) % 60);
            var second = Math.floor(sys_second % 60);
            hour = hour<10?"0"+hour:hour;//计算小时
            minute=minute<10?"0"+minute:minute;//计算分钟
            second=second<10?"0"+second:second;//计算秒杀
            $("#deling_time").html(''+minute+':'+second );
        } else {
            clearInterval(timer);
            if(sys_second==1){
            	init();
            }
        }
    }, 1000);
}
function agree(o){
	$(o).toggleClass("agree");
	$(".tit .bnt").toggleClass("bntb7b7b7");
}

function download(){
	if(!/micromessenger/i.test(navigator.userAgent) && !/9_3/.test(navigator.userAgent)){
		location.href = '/itry/dl_step1';
	}else{
		if($(".tit .bnt").hasClass("bntb7b7b7"))return;
		show_download_xb(1);
	}
}

function write_log(val){
    $.post("/api/write_click_log",{user_id:'21793284'},function(s){
    },"html");
	window.open("https://wap.koudaitong.com/v2/goods/271g8tjeevjfs");
}
</script>
</head>
<body>
<div class="wrap">

    <div class="trial_con cf">

        <div class="trial_tips">
            <div class="info">
                <div class="left"><span></span></div>
                    <div id="scrollobj">
                        <span>★小兵闪退解决办法：删除原有小兵（重要），再从试客【更多】下载小兵。 ★听说认真试玩应用会有更多任务出现哦~~</span>
                    </div>
                <div class="right trial_tips_off"><span></span></div>
            </div>
        </div>
        <script>
	    $(function(){
	    	setInterval(itryMarquee('scrollobj'),10);
            $('.trial_tips_off').click(function(){
                $('.trial_tips').addClass('off');
                setStore('gonggao','★小兵闪退解决办法：删除原有小兵（重要），再从试客【更多】下载小兵。 ★听说认真试玩应用会有更多任务出现哦~~');
                ;
            });
            var gonggao = '★小兵闪退解决办法：删除原有小兵（重要），再从试客【更多】下载小兵。 ★听说认真试玩应用会有更多任务出现哦~~';
            if(getStore('gonggao')==gonggao){
            	$(".trial_tips").addClass('off');
            }
	    });
	    </script>

        <div class="msg_xb_tit_off"><img src="http://static.appshike.com/images/list_loadin1.gif" alt=""></div>
        <div class="triallist cf" id="appList">

        </div>

        <!-- play应用 -->
        <div class="triallist cf" id="playList" style="display: none;">
        </div>

        <div class="triallist cf">
	        	<div class="trial cf ns-task">
	        		<a href="javascript:inviteFriends()" class="Click_bj">
		                <span class="appicon"><img src="http://static.appshike.com/images/yaoqingicon.png" alt=""></span>
		                <div class="appinfo">
		                    <h3 class="name">邀请好友</h3>
		                    <p class="mode">试玩一个应用奖励1元 最高10元</p>
		                    <span class="price">10.00<font>元</font></span>
		                </div>
	            	</a>
	            </div>

	            <div class="trial cf Click_bj" onClick="write_log(1)">
                <span class="appicon"><img src="http://static.appshike.com/images/icon6s.png" alt=""></span>
                <div class="appinfo">
                    <h3 class="name" style="min-width: 100%;">iPhone 防蓝光护眼贴膜</h3>
                    <p class="mode">潘多拉魔贴 － 应用���客官方推荐</p>
                </div>
            </div>
        </div>

        <!-- 未抢到的应用 -->
        <div class="triallist finish cf" style="margin-bottom:0px" id="cantPlayList"></div>

         <div class="trial_more">
            <p class="Click_bj" onclick="javascript:getAllCantPlay('21793284')" id="show_all" style="display: none;">查看全部1款</p>
          <span class="trial_lodin"></span>
        </div>
     </div>

        <div class="online_xiaobing Click_bj" onclick="open_xb();"></div>


    <!------您已经试玩过了------->
    <div class="msg_played" style="display:none">
    	<div class="tinymask"></div>
        <div class="tinybox cf">
       		<h4 class="notice">温馨提示</h4>
            <div class="ns-box-inner">
            	<p align="center" id="played_msg">您已经试玩过了</p>
            </div>
            <div class="ns_action">
            	<input type="button" class="Click_bj cancel" onclick="$('.msg_played').hide()" value="我知道了">
                <a href="javascript:inviteFriends();" class="brc169bf8 Click_bj colfff Click_bj">邀请好友赚取更多</a>
            </div>
        </div>
    </div>
    <!--放弃任务提示-->
    <div class="" style="display:none" id='giveMsg'>
    	<div class="tinymask"></div>
        <div class="tinybox cf" id="giveMsg1">
        	<h4 class="notice">温馨提示</h4>
            <div class="ns-box-inner">
            	<p align="center" id="giveMsg1_msg">你有未完成的任务<br>不要太贪心哦！</p>
            </div>
            <div class="ns_action">
                <input type="button" class="Click_bj cancel" value="放弃" onclick="javascript:giveUp();">
                <input type="button" class="brc169bf8 Click_bj colfff pass_st" value="去完成" onclick="javascript:hideTip();">
            </div>
        </div>
        <div class="tinybox cf" id="giveMsg2" style="display: none">
        	<h4 class="notice">注意</h4>
            <div class="ns-box-inner">
            	<p align="center">放弃任务就拿不到本次奖励了<br>确定吗？</p>
            </div>
            <div class="ns_action">
                <input type="button" class="Click_bj cancel" value="放弃" onclick="javascript:giveUpApp();">
                <input type="button" class="brc169bf8 Click_bj colfff pass_st" value="继续任务" onclick="javascript:hideTip();">
            </div>
        </div>
    </div>
    <!-----提示打开小兵----->
    <div class="msg_xb_notopen" style="display:none">
    	<div class="tinymask"></div>
        <div class="tinybox cf">
        	<h4 class="notice">温馨提示</h4>
            <span class="ns-close binding_close" onclick="$('.msg_xb_notopen').hide()"></span>
            <div class="ns-box-inner mb30">
            	<p class="tips">您的试客小兵未打开<br>请先打开小兵！</p>
            </div>
            <div class="ns_action">
                <input type="button" class="Click_bj Iknow col3a90f4 j_openxb" value="打开" onclick="openXB()">
            </div>
        </div>
    </div>
    <div class="tinymask j_checkBind" style="display:none;">
    	<div class="tinybox_tip">
    		<span class="ns-close" onclick="$('.j_checkBind').hide()"></span>
    		<p>下载证书并安装，认证此设备<br>为唯一设备</p>
    		<button class="Click_bj j_getCert">下载证书</button>
    	</div>
    </div>
</div>
<script type="text/jscript">
$(function(){
	$(".cancel,.ns-close").click(function(){
		$(".msg_played,.msg_not_task,.msg_xb_notopen").hide();
	});

	$(".online_xiaobing").click(function(){
		if(doingAppid!=''){
			$("#giveMsg1_msg").html('<p>你有未完成的任务<br>赶快去完成吧！</p>');
			$("#giveMsg").css("display","block");
		}else{
			$(".msg_xb_tit_off").addClass("msg_xb_tit")
			setTimeout(function(){
				$(".msg_xb_tit_off").removeClass("msg_xb_tit")
			},1500);
		}
	});

});

function giveUpApp(){
	$("#giveMsg").css("display","none");
	$.ajax({
        type : "post",
        url : "/shike/giveupApp",
        data : {appid:doingAppid,order_id:doingOrderid,doingStatus:doingStatus,user_id:'21793284'},
        dataType: 'text',
        async : false,
        success : function(back){
            	if(back=='1'){
	                doingAppid='';
	                doingOrderid='';
	                doingDetails_url='';
	            	init();
            	}
       	 }
    });
}
function giveUp(){
	$("#giveMsg1").css("display","none");
	$("#giveMsg2").css("display","block");

}
function hideTip(){
	$("#giveMsg").hide();
	$("#giveUpMsg").hide();
	location.href = getwxurl(doingDetails_url);
}

    function ishadPlay(a){
    	if(a==1){
    		$('#played_msg').html('<p>哎呀～已经被抢光了!等等看吧</p>');
    	}else{
    		$('#played_msg').html('<p>该应用正在投放,但您已经试玩过了</p>');
    	}
  		$(".msg_played").css("display","block");
    }

    function btnStatus(user_id,order_id,appid,detail_url,leave_num){

    	if("true" && $('.offline_xiaobing').length>0 && 'offline_xiaobing'=='online_xiaobing'){
    		if(/micromessenger/i.test(navigator.userAgent)){
    			alert_Iknow('您的试客小兵未打开</br >请先返回桌面打开小兵！','我知道了');
    		}else{
	       		$('.msg_xb_notopen').show();
	        	$('.j_openxb').click(function(){
	        		try{getXBStatus()}catch(e){};
	        	});
	        	$('.ts_number').click(function(){$('.msg_xb_notopen').hide();});
    		}
	        return false;
        }
    	if(doingAppid==''||doingAppid==appid){
    		if(doingAppid!=appid){
            	if(leave_num<=0){
                	$('#played_msg').html('<p>哎呀～暂时被抢光了!等等看吧</p>');
              		$(".msg_played").css("display","block");
              		return;
            	}
		    	$.ajax({
		            type : "post",
		            url : "/shike/getIsDownApp",
		            data : {appid:appid,user_id:user_id,order_id:order_id},
		            dataType: 'text',
		            async : false,
		            success : function(back){
		            	if(back=="-1"){
		            		$('#played_msg').html('<p>哎呀~您已经下载过这个应用了~</p>');
		        			$(".msg_played").css("display","block");
		            	}else if(back=='-99'){
		            		if(/micromessenger/i.test(navigator.userAgent)){
			            		safariopen_tips();
		            		}else{
			            		$('.j_checkBind').show();
			            		$('.j_getCert').click(function(){
			            			location.href = '/itry/mdm2';
			            		});
		            		}
		            	}else if(isNumber(back)){

		                	$.ajax({
		                        type : "post",
		                        url : "/shike/user_click_record",
		                        data : {appid:appid,user_id:user_id,order_Id:order_id,type:"app"},
		                        dataType: 'text',
		                        async : false,
		                        success : function(num){
		                        	if(num=="-1"){
		                        		$('#played_msg').html('<p>哎呀~已经被抢光了!等等看吧</p>');
		                        		$(".msg_played").show();
		                        	}else{
		                        		location.href = getwxurl(detail_url);
		                        	}
		                        }
		                    });
		                }
		           	 }
		        });
		}else{
			$.ajax({
		        type : "post",
		        url : "/shike/user_click_record",
		        data : {appid:appid,user_id:user_id,order_Id:order_id,type:"app"},
		        dataType: 'text',
		        async : false,
		        success : function(num){
		        	if(num=="-1"){
		        		$('#played_msg').html('<p>哎呀~已经被抢光了!等等看吧</p>');
		        		$(".msg_played").show();
		        	}else{
		        		location.href = getwxurl(detail_url+"?ds="+doingStatus);
		        	}
		        }
		    });
		}

    	}else{
			$("#noguan").css("display","block");
			$("#iknow").css("display","none");
    		$("#giveMsg").css("display","block");
    		$("#nowanmsg").html('<p>你有未完成的任务<br>不要太贪心哦！</p>');
    	 }
    }

    function openXB(){
    	location.href = "itry://card/show";
    }

    $(function(){
    	var isHidden = false;
    	try {window.localStorage.store='';}catch(e){isHidden=true;}
    	if(isHidden){
    		var isPad = /ipad/i.test(navigator.userAgent);
    		$('.wrap').append('<div class="incognito cf" style="position: fixed;">\
    	    <div class="incognito_tip cf">\
    	    	<img src="http://static.appshike.com/images/incognito_tipimg.png" alt="">\
    	    	<p>\
    	    		您正在使用无痕浏览，暂时无法使用应用试客<br>\
    					请点击右'+(isPad?'上':'下')+'角按钮 关闭无痕浏览\
    	    	</p>\
    	    </div>\
    	    <span class="'+(isPad?'top_tips':'bottom_tips')+'"></span>\
    		</div>');
    		document.ontouchmove=function(){return false;}
    	}
    });
</script>
</body>
</html>

{ date: 'Fri, 06 May 2016 10:44:38 GMT',
  'content-type': 'text/html;charset=UTF-8',
  'transfer-encoding': 'chunked',
  connection: 'close',
  vary: 'Accept-Encoding',
  'set-cookie': [ 'JSESSIONID=C4893558E2C0951E787148B6C8339E8C; Path=/; HttpOnly' ],
  'content-language': 'zh-CN' }

Process finished with exit code 0
