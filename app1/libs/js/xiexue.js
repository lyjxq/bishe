$(function(){
	$('.nav-l:nth-child(3)').css('color','#33CD5F')
	$('.nav-l').on('click',function(){
		$('.nav-l').css('color','black')
		$(this).css('color','#33CD5F')
	})
	

	var moren = function(){
		$('.tool div').css('color','black')
		$('.tool div:nth-child(3)').css('color','#33CD5F')
		$('.sp').html('')
		$.ajax('libs/json/xiexue.json').success(function(item){						
			var arr =item.data;
			//价格升序排列
			
			for(var i=0;i<arr.length;i++){
				document.createElement('div')
				$('.sp').append('<div class="sp-info"></div>')
				$('.sp>div:last-child()').html("<a href='detail.html?id="+arr[i].id+"'>"+"<img src='"+arr[i].imgUrl+"'/>"+"<div class='ms0'>"+arr[i].describe1+"</div>"+"<div class='ms1'><span >￥"+arr[i].price+"</span><span>已卖:</span><span>"+arr[i].nums+"</span></div></a>")	
			}


		});
	}
	moren()
	////销量降序排列
	$('.tool div:first').on('touchstart',function(){
		$('.tool div').css('color','black')
		$('.tool div:nth-child(1)').css('color','#33CD5F')
		$.ajax('libs/json/xiexue.json').success(function(item){						
			var arr = []
			//销量降序排列
			function sortA(arr){
			    // 如果只有一位，就没有必要比较
			    if(arr.length<=1){
			        return arr;
			    }
			    // 获取中间值的索引
			    var len = Math.floor(arr.length/2);
			    // 截取中间值
			    var cur = arr.splice(len,1);			   
			    // 小于中间值放这里面
			    var left = [];
			    // 大于的放着里面
			    var right = [];
			    for(var i=0;i<arr.length;i++){
			        // 判断是否大于
			     
			        if(Number(cur[0].nums)< Number(arr[i].nums) ){
			            left.push(arr[i]);
			        }else{
			            right.push(arr[i]);
			        }
			    }
			    // 通过递归，上一轮比较好的数组合并，并且再次进行比较。
			    return sortA(left).concat(cur,sortA(right));
			  
			}
			arr = sortA(item.data)
			$('.sp').html('')
			for(var i=0;i<arr.length;i++){
				document.createElement('div')
				$('.sp').append('<div class="sp-info"></div>')
				$('.sp>div:last-child()').html("<a href='detail.html?id="+arr[i].id+"'>"+"<img src='"+arr[i].imgUrl+"'/>"+"<div class='ms0'>"+arr[i].describe1+"</div>"+"<div class='ms1'><span >￥"+arr[i].price+"</span><span>已卖:</span><span>"+arr[i].nums+"</span></div></a>")	
			}


		});
	})
	////价格升序排列
	$('.tool div:nth-child(2)').on('touchstart',function(){
		$('.tool div').css('color','black')
		$('.tool div:nth-child(2)').css('color','#33CD5F')
		$('.sp').html('')
		$.ajax('libs/json/xiexue.json').success(function(item){						
			var arr = []
			//价格升序排列
			function sortA(arr){
			    // 如果只有一位，就没有必要比较
			    if(arr.length<=1){
			        return arr;
			    }
			    // 获取中间值的索引
			    var len = Math.floor(arr.length/2);
			    // 截取中间值
			    var cur = arr.splice(len,1);			   
			    // 小于中间值放这里面
			    var left = [];
			    // 大于的放着里面
			    var right = [];
			    for(var i=0;i<arr.length;i++){
			        // 判断是否大于
			     
			        if(Number(cur[0].price) >Number(arr[i].price) ){
			            left.push(arr[i]);
			        }else{
			            right.push(arr[i]);
			        }
			    }
			    // 通过递归，上一轮比较好的数组合并，并且再次进行比较。
			    return sortA(left).concat(cur,sortA(right));
			  
			}
			arr = sortA(item.data)
			$('.sp').html('')
			for(var i=0;i<arr.length;i++){
				document.createElement('div')
				$('.sp').append('<div class="sp-info"></div>')
				$('.sp>div:last-child()').html("<a href='detail.html?id="+arr[i].id+"'>"+"<img src='"+arr[i].imgUrl+"'/>"+"<div class='ms0'>"+arr[i].describe1+"</div>"+"<div class='ms1'><span >￥"+arr[i].price+"</span><span>已卖:</span><span>"+arr[i].nums+"</span></div></a>")	
			}


		});
	})
	////默认排列
	$('.tool div:nth-child(3)').on('touchstart', moren)	
})
