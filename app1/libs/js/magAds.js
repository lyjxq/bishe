window.onload = function () {
	var keyArr = [];
	$(".gob").click(function(){
		window.history.go(-1)
	})
			//新增地址
			$("#add").click(function(){
				window.location.href = "addAds.html"
			})
			//遍历是否有地址
			for(var i = 0;i<localStorage.length;i++){
				var keyarr = localStorage.key(i).split("X");
				var str = localStorage.getItem(localStorage.key(i));
				if(keyarr[0]=="key"){
					keyArr.push(localStorage.key(i));
					var arr = localStorage.getItem(localStorage.key(i)).split(",");
					var prov = arr[0];
					var city = arr[1];
					var dist = arr[2];
					var addr = arr[3];
					var name = arr[4];
					var phone = arr[5];
					var li = $('<li><input type="checkbox" class="checked">'+
							'<p><span class="spcolor">收件人:  </span><span>'+ name + '</span></br><span class="spcolor">电话号码:  </span><span>'+ phone+'</span><br>'+
							'<span class="spcolor">收货地址:  </span><span>'+ prov + city + dist + addr +'</span></p>'+
							'<div ><input type="button" class="bianji" value="编辑" />'+
							'<input type="button" class="del" value="删除" /></div></li>')
					$("#ul").append(li);
				}
			}
			//是否选中
			$(".checked").click(function(){				
				 flag = $(this).prop("checked")	
				 	//编辑事件
					$("#ul").on("click",".bianji",function(){
						if(flag){
							var keyid = keyArr[$(".bianji").index(this)]
							localStorage.setItem("keyId",keyid);
							window.location.href = "insertAds.html";
						}
						
					})
					//删除事件
					$("#ul").on("click",".del",function(){
						if(flag){
							var delkey = keyArr[$(".del").index(this)];
							localStorage.removeItem(delkey);
							$(this).parent().parent().remove();
						}							
					})
				
			})
}