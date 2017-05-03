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
				
				$('#name').text(hy.name)
				
				$('.nz').css('color','#F16368')
				$('.dj').css('color','#FF9F05')
				$('.ph').css('color','#79B7FD')
				$('.py').css('color','#27EA6A')
				
				$('.mm').css('color','#FE5D81')
				$('.dz').css('color','#F7430A')
				$('.jl').css('color','#F70AC9')
				$('.gob').on('touchstart',function(){
					window.history.go(-1)
				})
				
			}
		}
		$scope.inits();
	}])

}