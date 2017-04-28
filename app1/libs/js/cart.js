var app = angular.module('myApp-cart',['ionic'])
app.controller('myCtrl-cart',['$scope','$http', '$ionicPopup', '$timeout',function($scope,$http, $ionicPopup, $timeout){
	$scope.title = 'cart-header';
	$scope.title1 = 'cart-footer';
	   $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
               title: '温馨提示',
               template: '您确定要删除该宝贝吗？',
               buttons: [{ //Array[Object] (可选)。放在弹窗footer内的按钮。
				    text: '取消',
				    type: 'button-default',
				    onTap: function(e) {
				      	// 当点击时，e.preventDefault() 会阻止弹窗关闭。
			      		//e.preventDefault();				     
				    }
				  }, {
				    text: '确认',
				    type: 'button-balanced',
				    onTap: function(e) {				    	

				    }
				}]
            });
			confirmPopup.then(function(res) {
		             
		   if(res) {
		         console.log('You are sure');
		       } else {
		         console.log('You are not sure');
		       }
            
			});
        };
				
			
	$scope.jq = function(){
		console.log('jq')
		var goods = localStorage.getItem('str_good');				
		var strgood = JSON.parse(goods);					
		$scope.repeatGoods = strgood ;
		
	}
	$scope.jq();
	
}])
window.onload = function(){
	
	//增加数量
	$('.good-box span[id=add]').on('click',function(){
		$(this).prev().text(Number($(this).prev().text())+1)
		var size = $(this).closest('.good-cz').find('#good-size').text()
		var id = $(this).closest('.good-cz').next().find('#good-id').text()
				
		var goods = localStorage.getItem('str_good');				
		var strgood = JSON.parse(goods);		
		for(var i=0;i<strgood.length;i++){
			if(id==strgood[i].id&&size==strgood[i].size){				
				var obj = strgood[i]			
				obj.num1 = $(this).prev().text();
				strgood.splice(i,1)			
				strgood.splice(i,0,obj)													
				var tostr = JSON.stringify(strgood);
				localStorage.removeItem('str_good')	
				localStorage.setItem('str_good',tostr)				
			}
		}
		go()
	})
	//减少数量
	$('.good-box span[id=des]').on('click',function(){	
		$(this).next().text(Number($(this).next().text())-1)
		if(Number($(this).next().text())<1){
			Number($(this).next().text(1))
		}
		var size = $(this).closest('.good-cz').find('#good-size').text()
		var id = $(this).closest('.good-cz').next().find('#good-id').text()
				
		var goods = localStorage.getItem('str_good');				
		var strgood = JSON.parse(goods);		
		for(var i=0;i<strgood.length;i++){
			if(id==strgood[i].id&&size==strgood[i].size){				
				var obj = strgood[i]			
				obj.num1 = $(this).next().text();
				strgood.splice(i,1)			
				strgood.splice(i,0,obj)													
				var tostr = JSON.stringify(strgood);
				localStorage.removeItem('str_good')	
				localStorage.setItem('str_good',tostr)				
			}
		}
		go()
	})
	  	//确认删除
		$('.good-box #remove').on('click',function(){									
			var size = $(this ).closest('.good-box').find('.good-cz').find('#good-size').text()
			var id = $(this).closest('.good-box').find('.good-sc').find('#good-id').text()
			console.log(size)
			console.log(id)
			var goods = localStorage.getItem('str_good');				
			var strgood = JSON.parse(goods);
			console.log(strgood)
			for(var i=0;i<strgood.length;i++){
				if(id==strgood[i].id&&size==strgood[i].size){								
					strgood.splice(i,1)																			
					var tostr = JSON.stringify(strgood);
					localStorage.removeItem('str_good')	
					localStorage.setItem('str_good',tostr)				
				}
			}
			window.location.href = 'cart.html'
			go()
		})	
	//单选某件商品
	$('.good-box input').on('click',function(){
		//如果有一个商品的选中状态为false则 全选的状态为false
		if($(this).prop('checked')==false){
			$(".bar-footer input[type=checkbox]").attr('checked',false)		
		}
		go();		
	})
	//计算价格和数量
    function go(){
	    	total = 0;
	    	var hh = 0
	    	//$('span[class=pay]').text(total);
	    	$('.bar-footer .button').text(total)
	    	console.log(total)
	    	//console.log($(".check input[type=checkbox]").length)
	    	$(".good-box input[type=checkbox]").each(function(){  
		    	if($(this).prop("checked")){
		     		var num = $(this).closest('.good-box').find('#good-num').text() 		
		    		var price = $(this).closest('.good-box').find('#good-pri').text().replace(/[&\|\\\*^%$￥#@\-]/g,"") 
		    		//console.log(num)
		    		//console.log(price)
		    		total += Number(num)*Number(price) 
		    		hh += Number(num)
		    		
		    	}   
	    	 })
	      	$('.bar-footer .button').text('总价:￥'+total) 
			$('.bar-footer .nm').text('数量:'+hh)
	      	
	};
	go();
	//全选
       $(".bar-footer input[type=checkbox]").click(function() {  
       	//console.log('ff')
	        if ($(this).prop("checked")) { 

	            $(".good-box input[type=checkbox]").each(function() {  
	                $(this).attr("checked", true);
	                 $(this).prop("checked", true);
	                go();
	            });  
	        }else{  
	            $(".good-box input[type=checkbox]").each(function() {  
	                $(this).attr("checked",false);
	                $(this).prop("checked", false);
	                 //console.log('mm') 
	                 go();
	            });  
	        }  
    	});	
}