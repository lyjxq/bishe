var app = angular.module('myApp',['ionic'])
app.controller('myCtrl',['$scope',function($scope){
	$scope.title = 'bishe啊啊啊啊啊';
	$scope.xl = 'bi';
	$scope.fn = function(){
		$(function(){
			var window_h = $(window).height()
			$('.left-c').css('height',(window_h-44))
			$('.right-c').css('height',(window_h-44))
			$('.left-c div:nth-child(1)').css({"background":"#C4C9CE","border-right":"none"})
			$('.right-c').load('nanzs.html')
			jQuery.getScript("libs/js/nanz.js", function(data, status, jqxhr) {});
		
			$('.left-c div').each(function(index,element){		
				$(this).on('click',function(){					
					$('.left-c div').css({"background":"white","border-right":"1px solid #8C8C8C"})
					$(this).css({"background":"#C4C9CE","border-right":"none"})	
					
					if(index==0){
						$('.right-c').html("")
						$('.right-c').load('nanzs.html',function(){							
							jQuery.getScript("libs/js/nanz.js", function(data, status, jqxhr) {});														
						})						
					}else if(index==1){
						$('.right-c').html("")
						$('.right-c').load('nvz.html',function(){
							jQuery.getScript("libs/js/nvz.js", function(data, status, jqxhr) {});
						})
					}
				})
			});
			
		
		})
	}
	$scope.fn();
}])




