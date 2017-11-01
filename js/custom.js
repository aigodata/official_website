/*
 * 自定义脚本
 */

$(function () {

	//可视化展示侧边栏
	var visualBtn = $('.rx-visual .rx-sidebar ul li a');

	visualBtn.click(function () {
		$(this).addClass('active').parent().siblings().children().removeClass('active');
	});

	/*复制代码*/
	var clipboard = new Clipboard('.rx-page-component a.copy');

	clipboard.on('success', function (e) {
		console.log(e)
	});

	clipboard.on('error', function (e) {
		console.log(e);
	});

});
