var bsGlobal = angular.module('bsGlobal',[])

//配置loading 样式
bsGlobal.constant('$ionicLoadingConfig', {
  template: '<div class="box1"><span></span><span></span></div>',//指示器的html内容
   noBackdrop:true  //是否隐藏背景。默认情况下它会显示
});
bsGlobal.directive('fl',function($compile,$ionicLoading){
	return{
		templateUrl:'fl.html'
	}
})
bsGlobal.directive('aishenghuo',function($http,$compile,$ionicLoading){
	var tt= [];
	return{
		templateUrl:'aishenghuo.html',
		link:function(scope,element,attrs){
			var str1 = [];
			var str2 = [];
			var str3 = [];
			var str4 = [];
			var https = false;
			var strx = [];
			var num = 0;
			scope.loadMore = function(){
											
							$http({
						
								url:'libs/json/ash.json'
								
							}).success(function(items){
																						
								strx = items.data;
							
								for(var i=num;i<(num+4);i++){ //3->代表每次更新三张
									
									if(i<9){//i<4->代表  1--4张分配给第一个模块
										str1.push(strx[i])
										nums = i;
									
									}else if(i>=9&&i<15){//i>=4&&i<8代表  5--8张分配给第二个模块
										str2.push(strx[i])
										nums = i;
									
									}else if(i>=15&&i<19){//i>=8&&i<10代表  9--10张分配给第三个模块
										str3.push(strx[i])
										nums = i;
									
									}else if(i>=19&&i<25){//i>=8&&i<10代表  9--10张分配给第三个模块
										str4.push(strx[i])
										nums = i;
									
									}

									
								}
								num = nums+1;
								

							if(num<10){//代表  1--4张分配给第一个模块
										scope.ash = str1;
										scope.$broadcast('scroll.infiniteScrollComplete');
							}else if(num>=10&& num<15){//代表  5--8张分配给第二个模块
										scope.gts = str2;
										scope.$broadcast('scroll.infiniteScrollComplete');
							}else if(num>=15 && num<19){//代表  9--10张分配给第三个模块
										scope.gtsLoves = str3;
										//console.log(str3)
										scope.$broadcast('scroll.infiniteScrollComplete');
							}else if(num>=19 && num<25){//代表  9--10张分配给第三个模块
										scope.xpz = str4;																			
									
										scope.$broadcast('scroll.infiniteScrollComplete');
							}
							}).finally(function() {
								
					      scope.$broadcast('scroll.refreshComplete');
					      
					    });

			}

		}
	}
})
///  
bsGlobal.directive('gsc',function($compile,$ionicLoading){
	return{
		templateUrl:'gsc.html'
	}
})

