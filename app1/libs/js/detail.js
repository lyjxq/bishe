var app = angular.module('myApp-detail',['ionic'])
app.controller('myCtrl-detail',['$scope','$http', '$ionicPopup', '$timeout',function($scope,$http, $ionicPopup, $timeout){
	$scope.title = 'bishe';
//	加入购物车
	$scope.showAlert = function() {	
		//判断是否选择了尺码
		if(size==undefined){
			var alertPopup = $ionicPopup.alert({
	        	title: '温馨提示',
	        	template: '操作失败,请选择宝贝的尺码!',
	        	buttons: [{
				    text: 'Go Back',
				    type: 'button-assertive'
				   
				}]
	        });
		}else{			
			var alertPopup = $ionicPopup.alert({
	        	title: '温馨提示',
	        	template: '恭喜您,宝贝已成功加入购物车',
	        	buttons: [{
				    text: 'OK',
				    type: 'button-balanced'
				   
				}]
	        });
	        //点击弹框的ok 执行函数
	        alertPopup.then(function(res) {		   				
//				console.log(ID )
			
				var good = localStorage.getItem('str_good')
				
				
				if(good==null  || good=='[]'){
						
						var imgsrc = $('#img-c').attr('src');
						var des = $('.describe1').text();
						var pri= $('.price').text().replace(/[&\|\\\*^%$￥#@\-]/g,"") ;
						var num1= $('.nums').text();
						
						var obj = {};
						obj.id = ID;
						obj.imgsrc = imgsrc;
						obj.des = des;
						obj.pri = pri;
						obj.num1 = num1;
						obj.size = size.trim();
						strsp.unshift(obj)
						var tostr = JSON.stringify(strsp);
												
						localStorage.setItem('str_good',tostr)
						
						
						
				}else{						
						strsp = JSON.parse(good)
												
						for(var i=0;i<strsp.length;i++){
							if(ID==strsp[i].id){							
									if(size.trim()==strsp[i].size.trim()){
										str_num=strsp[i].num1								
										strsp.splice(i,1);									
										flag = false;
									}else{
										flag = true;
									}
								
							}else{
								flag = true;
							}
							
							
						}
						if(flag){
							num_befor = 0;
						}else{
							num_befor = str_num;
						}
						
						var imgsrc = $('#img-c').attr('src');
						var des = $('.describe1').text();
						var pri= $('.price').text().replace(/[&\|\\\*^%$￥#@\-]/g,"") ;
						var num2= $('.nums').text();
						console.log(num2)
						
						var obj = {};
						obj.id = ID;
						obj.imgsrc = imgsrc;
						obj.des = des;
						obj.pri = pri;
						console.log(Number(num_befor))
						
						obj.num1 =Number(Number(num2)+Number(num_befor));
						obj.size = size.trim();
						
						strsp.unshift(obj)						
						var tostr = JSON.stringify(strsp);
						//localStorage.removeItem('str_good')	
						localStorage.setItem('str_good',tostr)
						
					
				}
			var goods = localStorage.getItem('str_good');
			console.log(goods)	
			var strgood = JSON.parse(goods);
			goodsnum = 0
			for(var j=0;j<strgood.length;j++){
				goodsnum += Number(strgood[j].num1) 
				
			}
			$('.nm').text(goodsnum)	
			
		});
	      
		}
		
		
        
    };
	$scope.getUrl = function(){
		var _url = window.location.search; //获取url中"?"符后的字串
		var obj = { };
		if(_url.indexOf("?") !=-1){ //判断是否有参数
			var str1 = _url.substr( 1 ); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
			var strs = str1.split("&"); //用&号进行分隔 （有多个参数 要用&号分隔 再用等号进行分隔）
			for(var i=0;i<strs.length;i++){
			
				obj[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);//  unescape() 函数可对通过 escape() 编码的字 符串进行解码。用法unescape(string)
			}
		}
		return obj	
	}
	ID = $scope.getUrl().id;
	console.log(ID)
	$http.get('libs/json/ash.json').success(function(newitem){		
		for(var i=0;i<newitem.data.length;i++){			
			if(ID==newitem.data[i].id){
				var strDetail = [];				
				strDetail.push(newitem.data[i]);								
				$scope.detail =strDetail;
				$scope.ee =newitem.data[i].xImg;
				
				$scope.detail0 = newitem.data[i].lImg.lImg01;
				$scope.detail1 = newitem.data[i].lImg.lImg02;
				$scope.detail2 = newitem.data[i].lImg.lImg03;
				$scope.detail3 = newitem.data[i].lImg.lImg04;
			}
		}
	})
}])
var strsp = [];//放商品对象信息的数组，设为全局变量
var size ;
var num_befor;
var goodsnum = 0;
window.onload = function(){
//localStorage.removeItem('str_good')	
	var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: false,	   
	    autoplay: 3000,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',	    
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev'	    
	    // 如果需要滚动条
	    //scrollbar: '.swiper-scrollbar',
	}) 
	
	
	//选择尺码
	
	$('.cz-size-size').on('touchstart',function(){
		$('.cz-size-size').css({"border":"1px solid #E6E6E6","color":"black"})
		$('.cz-size-size').removeClass('active')
		$(this).css({"border":"1px solid #31C37C","color":"#31C37C"})
		$(this).addClass('.active')
		size = $(this).text().trim()
		console.log(size ) 
	})

	//数量增加
	$('.add').on('click',function(){
		var nums = Number($('.nums').text())+1 
		$('.nums').text(nums)
		if(nums>1){
			$('.des').css('border','1px solid #31C37C')
		}
	})
	
	//数量减少
	$('.des').on('click',function(){
		var nums = Number($('.nums').text())-1 
		if(nums<=1){
			$('.nums').text(1)
			$(this).css('border','1px solid #E6E6E6')
		}else{
			$('.nums').text(nums)
			
		}				
	})
	$('.button').on('click',function(){
					
	})

			var goods = localStorage.getItem('str_good');
			console.log(goods)
			if(goods!=null){
				console.log(goods)	
				var strgood = JSON.parse(goods);
				var goodsnum = 0;
				for(var j=0;j<strgood.length;j++){
					goodsnum += Number(strgood[j].num1) 
				}
				$('.nm').text(goodsnum)
			}else{
				$('.nm').text(0)
			}
			
	
}


