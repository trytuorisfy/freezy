window.onload = function(){
	//弹出框js开始
	var pop_cancel = document.querySelector('#m-pop-cancel');
	
		if(pop_cancel != null){
			var m_pop = document.querySelector('#m-pop');
			var pop_close = document.querySelector('#pop-close');
			var pop_show = document.querySelector('#pop-show');

			pop_cancel.onclick = function(){
				m_pop.style.display = 'none';
			}
			pop_close.onclick = function(){
				m_pop.style.display = 'none';
			}
			pop_show.onclick = function(){
				m_pop.style.display = 'block';
			}
	}

	//弹出框js结束

	//tab  js开始
	var m_tab = document.querySelector('#m-tab');
	if(m_tab != null){
		var m_tab_con = document.querySelector('.m-tab-con');
		var m_tab_tit_li = document.querySelectorAll('.m-tab-tit li');
		var m_tab_con_con = document.querySelectorAll('.m-tab-con .con');
		tab(m_tab_tit_li,m_tab_con_con);
	}


	//tab  js结束

	//icon&btn开始
	var m_icon_btn = document.querySelectorAll('.m-icon_btn');
	if(m_icon_btn != null){
		toggle_class(m_icon_btn,0); //离开时同时去除active，则第二个参数写上0;
	}
	
	//icon&btn结束

	//排行开始
	var m_rank_li = document.querySelectorAll('.m-rank li');
	if( m_rank_li != null){
		toggle_class(m_rank_li);
	}
	
	//排行结束

	//slider开始
	var m_s_p1 = document.querySelector('#m-s-p1');
	if(m_s_p1 != null){
		slider_app(280,400); //第一个参数为横屏时图片宽度 第二个参数为竖屏时图片宽度
	}
	
	//slider结束
	//"更多"内容
	var m_more = document.querySelector('#m-more');
	if(m_more != null){
		more(36);
	}
	

     

	//显示及隐藏导航
	/*
	window.onresize = function(){
		var win_w = document.body.clientWidth;
		var menu_link = document.querySelector('#menuLink');
		var nav_cus = document.querySelector('.m-s-nav.cus');
		var menu_i = 0;
		if(win_w < 1200){
			menu_link.style.display = 'block';
			nav_cus.style.display = 'none';

		}else{
			menu_link.style.display = 'none';
			nav_cus.style.display = 'block';
		}
		menu_link.onclick = function(){
			menu_i++;
			if(menu_i%2 == 0){
				nav_cus.style.display = 'none';
			}else{
				nav_cus.style.display = 'block';
			}
		}					
	}
	*/
	//module-pic_txt patten2
	var m_px2 = document.querySelectorAll('.m-pic_txt');
	toggle_class(m_px2,0);

}