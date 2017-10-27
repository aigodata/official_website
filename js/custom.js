/*
    *自定义脚本
*/

$(function () {

    //当页面滑动到当前图标的动画
    $(window).scroll(function () {
        //获取可视区域
        var displayArea = $(window).height();
        //卷上去的部分
        var scrollHeight = $(window).scrollTop();
        //获取元素
        var imgTop = $('.rx-swing ul li i');
        //当可视区域高度+卷上去的高度>=当前元素距顶部的距离添加类
        imgTop.each(function () {
            var thisImgTop = $(this).offset().top;
            if (displayArea + scrollHeight >= thisImgTop) {
                $(this).addClass('animated swing');
            };
        });
    });
});
