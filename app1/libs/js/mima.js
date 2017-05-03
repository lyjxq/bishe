$(function(){
	var flag;
	$('.gob').on('touchstart',function(){
		window.history.go(-1)
	})
	var window_h = $(window).height()
	$('.box').css('height',(window_h-44))
	$('.right-c').css('height',(window_h-44))
	
	var huiyuan = localStorage.getItem('obj_info');
	var hy = JSON.parse(huiyuan);
	var name = hy.name;	
	var pas = hy.pass
	
	console.log(hy)
	console.log(name)
	console.log(pas)
	
	$('.btn').on('click',function(){
		
		var old_pas = $('#pass01').val()
		var new_pas = $('#pass02').val()
		//密码长度在6-20位之间
		var rep = /^.{6,20}$/;
		if(rep.test(new_pas)){
			flag =true;
		}else{
			flag=false;
			$('.ts').css('color','#F92659')
			$('.ts').text('新密码长度在6-20位之间')
		}
		if(pas==old_pas&&flag){
			
			
			var huiyuan = localStorage.getItem('hy-info');		
			var str = JSON.parse(huiyuan);
			console.log(str)
			
			for(var i=0;i<str.length;i++){
				if(name==str[i].name&&pas==str[i].pas){
					
					var str01 = str[i]
					
					str01.pas = new_pas;
					str.splice(i,1)						
					console.log(str)
					str.push(str01)
					console.log(str)
					var str02 = JSON.stringify(str)
					localStorage.setItem('hy-info',str02)
					$('#pass01').val('')
					$('#pass02').val('')
					$('.ts').css('color','#30C37C')
					$('.ts').text('修改成功')
					
				}
			}
		}
		
		
	})
				
})
