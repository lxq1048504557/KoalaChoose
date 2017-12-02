require(["config"],function($){
	require(["jquery","loadHeaderFooter"],function($){
		$(function(){
			$(window).on("scroll",function(){
				if(Number($(document).scrollTop())>500){
					$(".siderSearch").css("display","block");
				}else{
					$(".siderSearch").css("display","none");
				}
			});
			$("#topSearch").on("keyup",function(){
				searchMatch("#topSearch",".showSearchMatch");
			});
			$("body").not("#topSearch").on("click",function(){
				$(".showSearchMatch").css("display","none");
			});
		});
	
	});
});
 function searchMatch(Id,classname){
	$.getJSON("https://suggest.taobao.com/sug?code=utf-8&q="+ $(Id).val() +"&callback=?",function(data){
		//实现鼠标按键松开获取收缩内容
		$(classname).css("display","block");
		var Data=data.result;
		var ul=$(classname);
		var liAll=$("ul li");
		console.log(liAll)
		console.log(Data);
		for(var arr in Data){
			$(liAll[arr]).html(Data[arr][0]);
		}
	});
}