window.onload = function(){
	$('#box').css('height',$(window).height())
	$('#box').css('width',$(window).width())
	var flagn;
	var flagp1;
	var flagp2;
	//匹配帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)：^[a-zA-Z][a-zA-Z0-9_]{4,15}$ 
	$('input[id=name]').on('blur',function(){
		var name = $(this).val()
		console.log(name)
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
}
