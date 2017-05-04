window.onload = function(){
	$(".gob").click(function(){
		window.history.go(-1)
	})

			var mes = localStorage.getItem(localStorage.getItem("keyId"));
			var msg = localStorage.getItem("keyId");
			var arr = mes.split(",");
			var prov1 = arr[0];
			var city1 = arr[1];
			var dist1 = arr[2];
			var addr1 = arr[3];
			$(".det_ad textarea").html(addr1);
			var name1 = arr[4];
			$(".shou input").eq(0).attr("value",name1);
			var phone1 = arr[5];
			$(".shou input").eq(1).attr("value",phone1);
			$("#city").citySelect({
					prov:prov1,
					city:city1,
					dist:dist1
			});
			$("#add").click(function(){ 
				var prov = $(".prov").val();
				var city = $(".city").val();
				var dist = $(".dist").val();
				var addr = $(".det_ad textarea").val();
				var name = $(".shou input").eq(0).val();
				var phone = $(".shou input").eq(1).val();
				var str =  prov +","+ city +","+ dist +","+ addr +"," + name +"," + phone;
				localStorage.setItem(msg,str);
				window.location.href = "magAds.html";
			})
				
}
