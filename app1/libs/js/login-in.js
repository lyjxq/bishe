window.onload = function(){
	$('#box').css('height',$(window).height())
	$('#box').css('width',$(window).width())
	var flagnp;
	
	$('.button').on('click',function(){
		name = $('input[id=name]').val();
		pass = $('input[id=pas1]').val();
		console.log(name)
		var huiyuan = localStorage.getItem('hy-info');				
		var hy = JSON.parse(huiyuan);
		console.log(hy)
		for(var i=0;i<hy.length;i++){
			if(name==hy[i].name&&pass==hy[i].pas){
				
				flagnp = true;
				break;
			}else{
				flagnp = false;
			}
		}
		if(flagnp){
			$('.ts').text("恭喜您！登录成功啦！") ;
			
			var obj = {}
			obj.name = name;
			obj.pass = pass
			var info = JSON.stringify(obj)
			localStorage.removeItem('obj_info')
			localStorage.setItem('obj_info',info)
			
			location.href = 'index.html'
		}else{
			$('.ts').text("用户名或密码错误") ;
		}
	})
	$('.d_z').on('click',function(){
		location.href = 'login_up.html'
	})
}
