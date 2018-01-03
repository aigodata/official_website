/*
 * 自定义脚本
 */

$(function () {

	// 头部
	var header = $('#header');
	$(window).scroll(function () {
		var scrollTop = $(window).scrollTop();
		if (scrollTop >= 100) {
			header.addClass('rx-header-scroll');
		} else {
			header.removeClass('rx-header-scroll');
		}
	});

	// 页面小于1000
	var ka_Width = $(window).width();
	if (ka_Width <= 1000) {
		$('#header').addClass('rx-header-bg');
	};

	// 自适应宽度
	$(window).resize(function () {
		var ka_Width = $(window).width();
		if (ka_Width >= 1000) {
			$('#header').removeClass('rx-header-bg');
			$('.rx-header .rx-nav').css('display', 'block');
			$('.rx-nav-inner .rx-menu').removeClass('rx-respon-menu');
			$('.rx-mask').css('display', 'none');
		} else {
			$('#header').addClass('rx-header-bg');
			$('.rx-header .rx-nav').css('display', 'none');
		};
	});

	// 头部导航切换按钮
	var navBtn = $('.rx-toggle');
	var Mask = $('.rx-mask');
	navBtn.click(function () {
		if ($(this).next().css("display") == "none") {
			Mask.fadeIn();
			$(this).next().slideDown("slow");
		} else {
			Mask.fadeOut();
			$(this).next().slideUp("slow");
		}
	});

	// 点击蒙层区域
	Mask.click(function () {
		$(this).fadeOut();
		navBtn.next().css('display', 'none');
		navBtn.parents('#header').removeClass('rx-bg');
		navBtn.next().removeClass('rx-respon-menu');
		navBtn.next().slideUp("slow");
	});

	// //可视化展示侧边栏
	// var visualBtn = $('.rx-visual .rx-sidebar ul li a');
	//
	// visualBtn.click(function () {
	// 	$(this).addClass('active').parent().siblings().children().removeClass('active');
	// });

	// //复制代码
	// var clipboard = new Clipboard('.rx-page-component a.copy');
	//
	// //显示隐藏代码块
	// var toggleBtn = $('.rx-demo-layout .example-wrap a.toggle-btn'); //获取显示隐藏的按钮
	//
	// toggleBtn.click(function () {
	//
	// 	if ($(this).prev().is(':visible')) {
	// 		$(this).prev().slideUp(550);
	// 		$(this).text('显示代码');
	//
	// 	} else {
	// 		$(this).prev().slideDown(550);
	// 		$(this).text('隐藏代码');
	// 	}
	//
	// });
	//
	// //隐藏代码块
	// var aBtn = $('.code-block a.up');
	//
	// aBtn.click(function () {
	// 	$(this).parent().slideUp(550);
	// 	$(this).parent().next().text('显示代码');
	// });

});
