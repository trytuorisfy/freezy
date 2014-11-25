; (function ($) {
	$.extend({
		'foucs': function (con) {
			var $container = $('#index_b_hero');
			var $imgs = $container.find('li.hero');
			var $leftBtn = $container.find('a.prev');
			var $rightBtn = $container.find('a.next');
			var $s_nav = $('.s-nav');
			var $heros = $('.heros');
			var $hero = $('.hero');
			var config = {
				interval: con && con.interval || 4000,
				animateTime: con && con.animateTime || 600,
				_imgLen: $imgs.length
			};
			i = 0;
			var silde = function () {
				if( i == 2){
					i = 0;
				}else{
					i++;
				}
				var ul_left = -960*i;
				$heros.animate({left:ul_left}, 600);				
				$('.hero').eq(i).addClass('active').siblings().removeClass('active');
				$('.s-nav').eq(i).addClass('active').animate({left:0}).siblings().removeClass('active').animate({left:68});	
				
			};
			var s = setInterval(function () {
				silde();
			}, config.interval);
			$s_nav.hover(function () {	
				clearInterval(s);
			}, function () {
				s = setInterval(function () {
					silde();
				}, config.interval);
			});
			$hero.hover(function () {	
				clearInterval(s);
			}, function () {
				s = setInterval(function () {
					silde();
				}, config.interval);
			});			
			$s_nav.hover(function() {
				i = $(this).index()-1;
				silde();
			});

		


		}
	});
}(jQuery));