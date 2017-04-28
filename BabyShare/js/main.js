//first level slide downs
$('.submitting p:first(), .checking p:first()').click(function() {
	$(this).siblings('.inside').slideToggle();
	$(this).parent().siblings().children('.inside').slideUp().children().children('.inside').slideUp();

});
//second level slide downs
$('.nap p:first(), .play p:first(), .eat p:first(), .diaper p:first()').click(function(){
	$(this).siblings('.inside').slideToggle();
	$(this).parent().siblings().children('.inside').slideUp();
});

//save functions
function saveNap() {
	console.log('nap');
}
function savePlay() {
	console.log('play');
}
function saveMeal() {
	console.log('meal');
}
function saveDaiper() {
	console.log('diaper');
}

