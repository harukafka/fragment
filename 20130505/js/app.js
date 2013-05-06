$(function(){
		var controller = $.superscrollorama({
			triggerAtCenter: false,
			playoutAnimations: true
		});	
		$('#title-line1').lettering();
		TweenMax.from($('#title-line1'), 1.5, {x:0, y:30 ,yoyo:true, repeat:-1, ease:Quad.easeIn});
});