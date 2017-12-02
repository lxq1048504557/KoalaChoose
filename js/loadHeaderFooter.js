define(["jquery","cookie"],function($){
	$.ajax("/html/include/header.html").done(function(data){
		$(".Header").html(data);
	}).done(function(){
		$("#TopSearch").on("keyup",function(){
			$.getJSON("https://suggest.taobao.com/sug?code=utf-8&q="+ $("#TopSearch").val() +"&callback=?",function(data){
			//实现鼠标按键松开获取收缩内容
			$(".ShowSearchMatch").css("display","block");
			var Data=data.result;
			var ul=$(".ShowSearchMatch");
			var liAll=$(".ShowSearchMatch li");
			console.log(liAll)
			console.log(Data);
			for(var arr in Data){
				$(liAll[arr]).html(Data[arr][0]);
				}
			});
		});
		$("body").not("#TopSearch").on("click",function(){
			$(".ShowSearchMatch").css("display","none");
		});
	});
	$.ajax("/html/include/footer.html").done(function(data){
		$(".footer").html(data);
	});
});