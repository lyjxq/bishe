var app = angular.module('myApp-cart',['ionic'])
app.controller('myCtrl-cart',['$scope','$http', '$ionicPopup', '$timeout',function($scope,$http, $ionicPopup, $timeout){
	$scope.title = 'cart-header';
	$scope.title1 = 'cart-footer';
	
				
			
	$scope.jq = function(){
		console.log('jq')
		window.onload = function(){
			var goods = localStorage.getItem('str_good');				
			var strgood = JSON.parse(goods);			
			console.log(strgood)
			$scope.repeatGoods = strgood ;
	
		}
	}
	$scope.jq();
}])