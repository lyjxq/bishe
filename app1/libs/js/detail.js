





var app = angular.module('myApp-detail',['ionic'])
app.controller('myCtrl-detail',['$scope','$http',function($scope,$http){
	$scope.title = 'bishe';
	
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
		console.log(newitem.data.length)
		for(var i=0;i<newitem.data.length;i++){
			//console.log(newitem.data[i].id)
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

$(function(){
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
})



