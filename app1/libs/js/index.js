var app = angular.module('myApp',['ionic','bsGlobal'])
app.controller('myCtrl',['$scope',function($scope){
	$scope.title = 'bishe';
}])





$(function(){
	  var mySwiper = new Swiper ('.swiper-container', {
	    direction: 'horizontal',
	    loop: true,
	    autoplay: 3000,
	    // 如果需要分页器
	    pagination: '.swiper-pagination',	    
	    // 如果需要前进后退按钮
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev'	    
	    // 如果需要滚动条
	    //scrollbar: '.swiper-scrollbar',
	  }) 
	  //demo示例六 通过id调取
		$('#demo06').navbarscroll({
			defaultSelect:0,
			scrollerWidth:6,
			fingerClick:1,
			endClickScroll:function(obj){
				//console.log(obj.text())
			}
		});
		$('.pm a ').css('color','#908B8B')
		$('.pm a:first').css('color','#33CD5F')
		$('.pm a').on('click',function(){
			$('.pm a').css('color','#908B8B')
			$(this).css('color','#33CD5F')
		})
		$('.bg-hf dl').css('color','#908B8B')
		
})
