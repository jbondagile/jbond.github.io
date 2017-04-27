$('.submitting p:first(), .checking p:first()').click(function() {
	$(this).siblings('.inside').slideToggle();
	$(this).parent().siblings().children('.inside').slideUp();
});
$('.nap p:first(), .play p:first(), .eat p:first(), .diaper p:first()').click(function(){
	$(this).siblings('.inside').slideToggle();
	$(this).parent().siblings().children('.inside').slideUp();
})