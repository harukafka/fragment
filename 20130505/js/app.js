$(function(){
		var controller = $.superscrollorama({
			triggerAtCenter: false,
			playoutAnimations: true
		});	
		$('#title-line1').lettering();
		//TweenMax.from($('#title-line1'), 1.5, {x:0, y:30 ,yoyo:true, repeat:3, ease:Quad.easeIn});
		
		TweenMax.from($("#title-line1"),0.3,{y:-300});
		
		$("#title-line1 span").each(function (i) {
			var lag = i * 0.08;
			TweenMax.from($(this), 0.5, {x:0, y:30, delay:lag, ease:Quad.easeOut});
			i++;
		});
});