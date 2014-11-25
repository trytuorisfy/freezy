//tab相关js
function tab(obj1,obj2){
	for (var i = 0; i < obj1.length; i++) {
		(function(i){
			obj1[i].onclick = function(){
				for(j=0;j<obj1.length;j++){
					if(j==i){
						addClass(obj1[j],'active');
						addClass(obj2[j],'active');
					}else{
						removeClass(obj1[j],'active');
						removeClass(obj2[j],'active');						
					}
				}
			}					

		})(i)
	};			
}
//搜索相关js
function search_change(){
	var serpat2 = document.querySelector('#m-ser-pat2');
    var ser_f = serpat2.querySelector('#ser-first');
    var ser_s =  serpat2.querySelector('#ser-second');
    var m_ser_item = serpat2.querySelector('.m-ser-item');
    var ser_second = serpat2.querySelector('#ser-second');
    ser_f.onmouseenter = function(){
    	ser_s.style.display = 'block';
    }
    m_ser_item.onmouseleave = function(){
         ser_s.style.display = 'none';       
    }
	ser_second.onclick = function(){
        var ser_f_txt = ser_f.innerHTML;
        var ser_s_txt = ser_s.innerHTML;
        ser_f.innerHTML = ser_s_txt;  
        ser_s.innerHTML = ser_f_txt;                          
    } 
}
//hover时增加或删除active属性
function toggle_class(obj,state){ //state = 0,mouseout时将本身active也去除
	for (var i = 0; i < obj.length; i++) {
		(function(i){
			obj[i].onmouseenter = function(){
				for(j=0;j<obj.length;j++){
					if(j==i){
						addClass(obj[j],'active');
					}else{
						removeClass(obj[j],'active');
					}
				}
			}
			obj[i].onmouseleave = function(){
				if(state == 0){
					for(j=0;j<obj.length;j++){
						if(j==i){
							remove_active(obj[j]);
						}
					}								
				}
			}						
		})(i)
	};				
}
//slider相关js
function slider_app(w,h){
	var m_s_p1 = document.querySelector('#m-s-p1');
	var m_s_p1_w = m_s_p1.offsetWidth;
	var s_ul = document.querySelector('#m-s-ul-p1');
	var rbtn = document.querySelector('#s-btn-r-p1');
	var lbtn = document.querySelector('#s-btn-l-p1');
	var ul_img = s_ul.querySelectorAll('img');
	var f_img = ul_img[0];
	var img_width = f_img.offsetWidth;
	var img_height = f_img.offsetHeight;
	//确定图片竖屏或横屏 计算出外框大小
	if(img_width < img_height){
		f_img.style.width = w+'px'; //竖屏时 宽度
		var rate = img_width/w;
		var new_height = img_height/rate + 20;//20可视为padding-bottom的效果
		addClass(m_s_p1,'vert');
		var vert = document.querySelector('.vert');
		vert.style.height = new_height + 'px';
		var s_imgs = vert.getElementsByTagName('img');
		for (var i = 0; i < s_imgs.length; i++) {
			s_imgs[i].style.width = w+'px';
		};
	}else if(img_width > img_height){
		var rate = img_width/h; //横屏时 宽度
		var new_height = img_height/rate + 10;
		m_s_p1.style.height = new_height + 'px';
	}

	//左右按钮
	rbtn.onclick = function(){
		var img_length = ul_img.length;
		var img_width = f_img.offsetWidth + 10;//10为margin-right的值
		// var fin_left = -img_width*(img_length-1);
		var fin_left = -(ul_img.length - parseInt(m_s_p1_w/img_width))*img_width;

		var now_left = parseInt(s_ul.offsetLeft);
		var new_left = now_left-img_width;
		var run_left;//用于实现类似animate效果辅助

		if(new_left >= fin_left){
			run_left = now_left;			
			function rightgo(){
				run_left = parseInt(run_left) -10;				
				s_ul.style.left =run_left + 'px';
				if(run_left == new_left){
					clearInterval(Timer);
				}
			}
			var Timer = setInterval(rightgo,10);	
		}else{
			s_ul.style.left = fin_left + 'px';
		}
	}
	lbtn.onclick = function(){
		var img_length = ul_img.length;
		var img_width = f_img.offsetWidth + 10;//10为margin-right的值
		var fin_left = 0;
		var now_left = parseInt(s_ul.offsetLeft);
		var new_left = now_left+img_width;
		var run_left;
		if(new_left <= fin_left){
			run_left = now_left;
			function leftgo(){
				run_left = parseInt(run_left) + 10;
				s_ul.style.left =run_left + 'px';
				if(run_left == new_left){
					clearInterval(Timer);
				}
			}
			var Timer = setInterval(leftgo,10);
		}else{
			s_ul.style.left = fin_left + 'px';
		}

	}
}
//"更多模块"
function more(h){
	var m_more = document.querySelector('#m-more');
	var more_btn = m_more.querySelector('.more');
	var less_btn = m_more.querySelector('.less');
	var txt = m_more.querySelector('.txt');
	more_btn.onclick = function(){
		less_btn.style.display = 'inline';
		this.style.display = 'none';
		txt.style.height = 'auto';

	}
	less_btn.onclick = function(){
		more_btn.style.display = 'inline';
		this.style.display = 'none';	
		txt.style.height = h + 'px';

	}
}
//原生js获取css属性
function getStyle(obj,name){
    if(obj.currentStyle){
        //IE
        return obj.currentStyle[name];
    }else{
        //FF、Chrome
        return getComputedStyle(obj,false)[name];
    }
};
//addclass
function addClass(obj,param){
	if (obj.classList)
	  obj.classList.add(param);
	else
	  obj.className += ' ' + param;
}
//removeclass
function removeClass(obj,param){
	if (obj.classList)
	  obj.classList.remove(param);
	else
	  obj.className = obj.className.replace(new RegExp('(^|\\b)' + param.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}
//此函数可以给自己加class 同时去除兄弟元素的class
function siblingsClass(obj,param){
	var siblings = Array.prototype.slice.call(obj.parentNode.children);
	for (var i = siblings.length; i--;) {
		removeClass(siblings[i],param);
	  if (siblings[i] === obj) {
	    addClass(siblings[i],param);
	  }
	}	
}

