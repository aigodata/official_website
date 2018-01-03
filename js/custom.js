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

	// 移动端 头部菜单点击
	/*var mobileBtn = $('.rx-header .rx-nav ul li.drop-down a');*/
	// 移动端 头部菜单点击函数
	/*function navClick() {
		if ($(this).next().css("display") == "none") {
			$(this).next().slideDown("500");
		} else {
			$(this).next().slideUp("500");
			$(this).next().find('.subnav').slideUp(500);
		}
	};*/

	// 页面小于992
	/*var ka_Width = $(window).width();
	if (ka_Width <= 992) {
		$('#header').addClass('rx-header-bg');
		$('.rx-header .inner .rx-toggle').css('display', 'block');
		mobileBtn.off('click').on('click',navClick);
	};*/

	// 自适应宽度
	/*$(window).resize(function () {
		var ka_Width = $(window).width();
		if (ka_Width >= 992) {
			$('#header').removeClass('rx-header-bg');
			$('.rx-header .rx-nav').css('display', 'block');
			$('.rx-mask').css('display', 'none');
			$('.rx-header .inner .rx-toggle').css('display', 'none');
			mobileBtn.off('click').next().removeAttr("style");
		} else {
			$('#header').addClass('rx-header-bg');
			$('.rx-header .rx-nav').css('display', 'none');
			$('.rx-header .inner .rx-toggle').css('display', 'block');
			mobileBtn.off('click').on('click',navClick);
		};
	});*/

	// 头部导航切换按钮
	/*var navBtn = $('.rx-toggle');
	var Mask = $('.rx-mask');
	navBtn.click(function () {
		if ($(this).next().css("display") == "none") {
			Mask.fadeIn();
			$(this).next().slideDown("slow");
		} else {
			Mask.fadeOut();
			$(this).next().slideUp("slow");
			$(this).next().find('.rx-subnav').css('display', 'none');
		}
	});*/

	// 点击蒙层区域
	/*Mask.click(function () {
		$(this).fadeOut();
		navBtn.next().css('display', 'none');
		navBtn.parents('#header').removeClass('rx-bg');
		navBtn.next().removeClass('rx-respon-menu');
		navBtn.next().slideUp("slow");
	});*/

});
