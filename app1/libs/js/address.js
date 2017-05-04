//localStorage.removeItem('obj_info')
var huiyuan = localStorage.getItem('obj_info');
var hy = JSON.parse(huiyuan);
//console.log(hy)
if(!hy){
	//console.log('gg')
location.href = 'login_in.html'
	
}else{

	var app = angular.module('mybj',['ionic'])
	app.controller('bjCtrl',['$scope','$http', '$ionicPopup', '$timeout',function($scope,$http, $ionicPopup, $timeout){
		$scope.ff = 'ff'
		$scope.name = hy.name
		$scope.inits  = function(){
			window.onload = function(){
				$('.gob').on('touchstart',function(){
					window.history.go(-1)
				})	
				$('.add').on('touchstart',function(){
					console.log('add')
					location.href = 'address01.html'
					
				})	
				
			
				
				
			}
		}
		$scope.inits();
	}])

}