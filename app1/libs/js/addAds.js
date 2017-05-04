window.onload = function(){
	$(".gob").click(function(){
		window.history.go(-1)
	})
	$("#city").citySelect({
					prov:"北京",
					nodata:"none"
			});
			$("#add").click(function(){
				var prov = $(".prov").val();
				var city = $(".city").val();
				var dist = $(".dist").val();
				var addr = $(".det_ad textarea").val();
				var name = $(".shou input").eq(0).val();
				var phone = $(".shou input").eq(1).val();
				if(!/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test( $(".shou input").eq(1).val())){
					
					$('.ts').text('手机号码格式不正确')
				}else if(prov&&city&&dist&&addr&&name&&phone||prov&&city&&addr&&name&&phone){
						if (dist) {
							
						}else{
							dist = "";
						}
						var str =  prov +","+ city +","+ dist +","+ addr +"," + name +"," + phone;
						var num = localStorage.length + 1;
						localStorage.setItem("keyX"+num,str);
						window.location.href = "magAds.html";
					}else{
						$('.ts').text('所列选项的内容不能为空')
						
					}
			})
}
