var app = angular.module('myApp',['ionic'])
app.controller('myCtrl',['$scope',function($scope){
	$scope.title = 'bishe啊啊啊啊啊';
	$scope.xl = 'bi';
	$scope.fn = function(){
		$(function(){
			var window_h = $(window).height()
			$('.left-c').css('height',(window_h-44))
			$('.right-c').css('height',(window_h-44))
			
			$('.left-c div').css({"background":"white","border-right":"1px solid #8C8C8C"})
			$('.left-c div:nth-child(1)').css({"background":"white","border-right":"none"})
			
			$('.right-c').load('nanzs.html')
			jQuery.getScript("libs/js/nanz.js", function(data, status, jqxhr) {});
		
			$('.left-c div').each(function(index,element){		
				$(this).on('click',function(){					
					$('.left-c div').css({"background":"white","border-right":"1px solid #8C8C8C"})
					$(this).css({"background":"white","border-right":"none","color":"#33CD5F"})	
					
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
					}else if(index==2){
						$('.right-c').html("")
						$('.right-c').load('xiexue.html',function(){
							jQuery.getScript("libs/js/xiexue.js", function(data, status, jqxhr) {});
						})
					}else if(index==3){
						$('.right-c').html("")
						$('.right-c').load('shuma.html',function(){
							jQuery.getScript("libs/js/shuma.js", function(data, status, jqxhr) {});
						})
					}else if(index==4){
						$('.right-c').html("")
						$('.right-c').load('meiz.html',function(){
							jQuery.getScript("libs/js/meiz.js", function(data, status, jqxhr) {});
						})
					}else if(index==5){
						$('.right-c').html("")
						$('.right-c').load('muy.html',function(){
							jQuery.getScript("libs/js/muy.js", function(data, status, jqxhr) {});
						})
					}else if(index==6){
						$('.right-c').html("")
						$('.right-c').load('meis.html',function(){
							jQuery.getScript("libs/js/meis.js", function(data, status, jqxhr) {});
						})
					}
				})
			});
			$('.pm a ').css({'color':'#908B8B','text-decoration':'none'})
			$('#fl').css('color','#33CD5F')
			$('.pm a').on('click',function(){
				$('.pm a').css('color','#908B8B')
				$(this).css('color','#33CD5F')
			})
			$('.bg-hf dl').css('color','#908B8B')
		
		})
	}
	$scope.fn();
}])




