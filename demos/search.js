(function(){
	var ser_ipt = $('#search-input');	
	ser_ipt.keyup(function(e){
		// console.log(e.keyCode)
		if(e.keyCode == 13){
			searchApps();
		}else{
			$('#appul').empty();
			$('#gameul').empty();
			$('#sum').empty();
			$('#key-val').empty();
			$('#game-sum').empty();
			$('#app-sum').empty();

			var ser_key = ser_ipt.val();
			if(ser_key != ''){
				getSearchData(ser_key);
			}else{
				$('#ser-div').hide();
			}				
		}
	})
	ser_ipt.blur(function(){
		$('#ser-div').mouseleave(function(){
			$('#ser-div').hide();
		})
		// $('#ser-div').hide();
	});	

function getSearchData(ser_key){
	$('#ser-div').show();
	var ser_url = 'http://foreignsearch.vshare.com/search_prefix?prefix=' + ser_key + '&page=1&device=1&iphoneoff=0&language=zh-Hans&jb=0&callback=searchcallback';
	$.ajax({
		type : "GET",
		// url:"http://foreignsearch.vshare.com/search_prefix?prefix=wechat&page=1&device=1&iphoneoff=0&language=zh-Hans&jb=0&callback=searchcallback",
		url: ser_url,
		dataType : "jsonp",
		cache:false,
		jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(默认为:callback)
		jsonpCallback:"searchcallback",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名
		success : function(data){
			var gameData = data.data.results['Games'];
			var appData = data.data.results['Application']; 
			// var game_len = data.data.results['Application '].length
			// alert(data.data.results['Games'].length);
			$('#sum').html(gameData.length + appData.length);
			$('#key-val').html(ser_key);
			$('#game-sum').html(gameData.length);
			$('#app-sum').html(appData.length);
			var game_html='', app_html='';
			var i=0,j=0;
			var linkid;
			$.each(gameData, function(k, v) {
				if(v['trackId']){
					linkid = v['trackId'];
				}else{
					linkid = 'appid-' + v['appid'];
				}
				if(i<5){
					game_html += '<li class="ell"><a target="_blank" href="http://apple.vshare.com/' + linkid + '.html">' + v['trackName']+ '</a></li>';
				}
				i++;
			});	
			$('#gameul').html(game_html);
			$.each(appData, function(k, v) {
				var linkid;
				if(v['trackId']){
					linkid = v['trackId'];
				}else{
					linkid = 'appid-' + v['appid'];
				}
				if(j<5){				
					app_html += '<li class="ell"><a target="_blank" href="http://apple.vshare.com/' + linkid + '.html">' + v['trackName']+ '</a></li>';
				}
				j++;
			});	
			$('#appul').html(app_html)								

		}
	});
	function searchcallback(data){		
	}	
}
	
})()