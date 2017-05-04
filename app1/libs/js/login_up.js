window.onload = function(){
	$('#box').css('height',$(window).height()-44)
	$('#box').css('width',$(window).width())
	$('.gob').on('touchstart',function(){
		window.history.go(-1)
	})
	var flagn;
	var flagp1;
	var flagp2;
	var flaghy;
	var str = [];
	//localStorage.removeItem('hy-info')
	//匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$ 
	$('input[id=name]').on('blur',function(){
		var name = $(this).val()		
		var rep = /^\w{6,}$/;
		if(rep.test(name)){
			$('.ts').text("用户名称符合条件") ;	
			flagn =true;
		}else{						
			$('.ts').text("用户名称只能包含数字、字母、下划线，长度不小于6位") ;
			flagn = false;
		}
	})
	//验证第一个密码框
				$('input[id=pas1]').on('blur',function(){
					var pass = $(this).val()
					
					//密码长度在6-20位之间
					var rep = /^.{6,20}$/;
					if(rep.test(pass)){
						$('.ts').text("密码符合条件") ;
						$('input[id=pas2]').val('')
						flagp1 =true;
					}else{
						$('.ts').text("密码长度在6-20位之间") ;
						flagp1 = false;
					}
					
				})
				//验证第二个密码框
				$('input[id=pas2]').on('blur',function(){
					var pass2 = $(this).val()
					var pass1 = $('input[id=pas1]').val()
					if(pass1==pass2){
						$('.ts').text("密码符合条件") ;
						flagp2 =true;
					}else{
						$('.ts').text("第二次与第一次输入密码不同") ;
						flagp2 =false;
					}										
				})
				$('input').on('focus',function(){
					$(this).val("")					
					if(!flagn){
						$('.ts').text("用户名称只能包含数字、字母、下划线，长度不小于6位") ;
					}else if(!flagp1){
						$('.ts').text("密码长度在6-20位之间") ;
					}
				})
	//点击注册			
	$('.button').on('click',function(){
		if(flagn&&flagp1&&flagp2){
		
			
			obj_name = $('input[id=name]').val();
			obj_pass = $('input[id=pas1]').val();
			 
			var huiyuan = localStorage.getItem('hy-info');				
			
			//如果是首次注册
			if(huiyuan==null || huiyuan== '[]'){
				var obj = {}
				obj.name = obj_name;
				obj.pas = obj_pass;
				str.push(obj)
				var strs = JSON.stringify(str)
				localStorage.setItem('hy-info',strs)
								
			}else{//如果已注册过会员  
				str = JSON.parse(huiyuan);
				//遍历是否有相同的会员名
				for(var i=0;i<str.length;i++){
				
					if(obj_name==str[i].name){
						flaghy = true;
						break;
					}else{
						flaghy = false;
					}
				}
				if(flaghy){//如果用户存在
					$('.ts').text("注册失败！用户名已存在，请更换用户名。") ;
				}else{//如果用户不存在
					var obj = {}
					obj.name = obj_name;
					obj.pas = obj_pass;
					str.push(obj)
					var strs = JSON.stringify(str)					
					localStorage.setItem('hy-info',strs)
					$('.ts').text("恭喜您！注册成功啦！") ;
					$('input').val("")
//					var huiyuan = localStorage.getItem('hy-info');				
//					var hy = JSON.parse(huiyuan);
//					console.log(hy)
					location.href = 'login_in.html'
				}
				
			}
			
			
		}
		
	})
}
