//localStorage.removeItem('obj_info')
var huiyuan = localStorage.getItem('obj_info');
var hy = JSON.parse(huiyuan);
//console.log(hy)
if(!hy){
	//console.log('gg')
location.href = 'login_in.html'
	
}else{


	window.onload = function(){
		console.log(hy)
		$('.d-z span').text(hy.name)
		$('.list p').css('color','#27EA6A')
		$('.list h2').css('color','#27EA6A')
		$('.tc').on('click',function(){
			console.log('ll')
			//localStorage.removeItem('obj_info')
			//location.href = 'index.html'
		})
		$('.sc').css('color','#F16368')
		$('.ll').css('color','#FF9F05')
		$('.ks').css('color','#79B7FD')
		$('.xy').css('color','#FE5D81')
		
		$('.qd').css('color','#27EA6A')
		$('.cp').css('color','#F7430A')
		$('.yj').css('color','#F70AC9')
		$('.sh').css('color','#0AE0F7')
		
		
		
		$('.pm a ').css({'color':'#908B8B','text-decoration':'none'})
		$('.mys a').css('color','#33CD5F')
		$('.pm a').on('click',function(){
			$('.pm a').css('color','#908B8B')
			$(this).css('color','#33CD5F')
			})
		//$('.bg-hf dl').css('color','#908B8B')
		$('.btn_tc').on('click',function(){
			localStorage.removeItem('obj_info')
			location.href = 'index.html'
		})
	
	
	
	}
}