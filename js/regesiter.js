require(["config"],function($){
	require(["jquery","loadHeaderFooter"],function($){
	 	$("#btn").on("click",function(){
	 		$("#codeJpg").show();
	 		$.getJSON("http://route.showapi.com/26-4?showapi_appid=49973&showapi_sign=17157def3c2b4d1b9689ea3d7b5bf55b",function(respData){
	 		var code=respData.showapi_res_body.img_path;
	 		$("#codeJpg").attr("src",code);
	 		});
	 	});
	    $("#code").on("blur",function(){
	    	console.log($("#code").val().length);
	    	if($("#code").val().length!==4){
	    		alert("验证码输入有错");
	 			$("#code").val("");
	 		}
	    });
	 	
	});
});