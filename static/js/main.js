//新闻tab切换
$(".tabs li").click(function() {
    $(".tabs li").removeClass("active"); //移除class="active"属性
    $(this).addClass("active"); //添加class="active"到选择标签中 
    $(".tab_content").hide(); //隐藏全部标签内容  
    var activeTab = $(this).find("a").attr("href"); //找到所属属性值来识别活跃选项卡和内容  
    $(activeTab).fadeIn(); //使内容消失 
    return false;  
});  

if ($(window).width() > 800) {	
    $(".inkv").css({"height":$(window).height()- 60});   
}else{
	$(".inkv").css({"height":$(window).height()- 135}); 
}
