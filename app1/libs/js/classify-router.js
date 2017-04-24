
	        var myApp = angular.module("myApp", ['ui.router']);
	        //声明了把 $stateProvider 和 $urlRouteProvider 路由引擎作为函数参数传入，这样我们就可以为这个应用程序配置路由了.
	        myApp.controller('myCtrl',['$scope','$http',function($scope,$http){
	        	$scope.title = '男装';
	        	$scope.xl = '销量↓';
	        	$scope.jg = '价格↓';
	        	$scope.zh = '默认';
	        	
	        	$scope.nanz = function(){
					$http({
						url:'libs/json/nanz.json'								
					}).success(function(items){						
						$scope.nanzinfo = items.data;
						
					})
	        	}
	        	$scope.nanz();
//	        	默认排序
	        	$scope.zhpx = function(){
	        		$scope.fn1 = function(){	        		
	        			return false;
	        		}
	        		$scope.fn2 = function(){	        		
	        			return false;
	        		}
	        		$scope.fn3 = function(){	        		
	        			return true;
	        		}
	        	}
	        	$scope.zhpx();
//	        	销量降序
	        	$scope.xljx = function(){	
	        		console.log("xljx");
	        		$scope.fn1 = function(){	        		
	        			return true;
	        		}
	        		$scope.fn2 = function(){	        		
	        			return false;
	        		}
	        		$scope.fn3 = function(){	        		
	        			return false;
	        		}
	        	}
//	        	价格降序
	        	$scope.jgjx = function(){
	        		console.log("jgjx");
	        		$scope.fn1 = function(){	        		
	        			return false;
	        		}
	        		$scope.fn2 = function(){	        		
	        			return true;
	        		}
	        		$scope.fn3 = function(){	        		
	        			return false;
	        		}
	        	}
	        
	        	
	        }]) 
	        myApp.config(function ($stateProvider, $urlRouterProvider) {
	            //如果没有路由引擎能匹配当前的导航状态，那它就会默认将路径路由至 PageTab.html, 这个页面就是状态名称被声明的地方. 只要理解了这个，那它就像switch case语句中的default选项.
	           
	            $urlRouterProvider.when("", "pagetab");
//	            $urlRouterProvider.otherwise("/");
	            //定义了会在main.html页面第一个显示出来的状态，作为页面被加载好以后第一个被使用的路由.
	            //这就向母版页的子页面，应用程序会首先加载这个main.html页面。
	            $stateProvider
	               .state("pagetab", {
	                   url: "/pagetab",
	                   templateUrl: "pagetab.html"
	               })
	             
	               .state("pagetab.page1", {
	                   url: "/nanz",	
	                   templateUrl: "nanz.html"
	               })
	               .state("pagetab.page2", {
	                   url: "/page2",
	                   templateUrl: "page2.html"
	               })
	               .state("pagetab.page3", {
	                   url: "/page3",
	                   templateUrl: "page3.html"
	               });
	              
	               
	        });
	