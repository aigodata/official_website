$(document).ready(function() {
	//导航开始
	
		$('#oiBtn').click(function() {
		//var oiicn = $('#oiBtn em')
		$('#oiBtn').toggleClass("io")
		$('#navBox').toggleClass("navbox01 navbox")
		if($('#navBox').hasClass("navbox01")) {
			$(".logobox img").src;
			$(".logobox img").attr('src', 'images/logo.svg').css("opacity","0.4");
			
		} else {
			$(".logobox img").src;
			$(".logobox img").attr('src', 'images/logo.svg').css("opacity","1");
		}
	}); //菜单按钮
	
	$('#div1Link,#div2Link,#div3Link,#div4Link').click(function() {
		//var oiicn = $('#oiBtn em')
		$('#oiBtn').toggleClass("io")
		$('#navBox').toggleClass("navbox01 navbox")
		if($('#navBox').hasClass("navbox01")) {
			$(".logobox img").src;
			$(".logobox img").attr('src', 'images/logo.svg').css("opacity","1");
			
		} else {
			$(".logobox img").src;
			$(".logobox img").attr('src', 'images/logo.svg').css("opacity","1");
		}
	}); //菜单按钮
	
	//导航结束
	
});


