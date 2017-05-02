//setting up database (hopefully)
var dataService = {
  init: function(){
    backand.init(
      {appName: 'jbondagile',
       signUpToken: 'a00f69cd-29ad-11e7-8124-06bcf2b21c8c',
       anonymousToken: '08d1d147-6b1b-4604-a7f4-bb78abb9bef2',
       runSocket: false
      }
    );   
  },
  getListPlay: function(){
        var params =  {
          sort: backand.helpers.sort.create('createdAt', backand.helpers.sort.orders.desc),
          exclude: backand.helpers.exclude.options.all,
          pageSize: 10,
          pageNumber: 1
        };
        return backand.object.getList('Play',params);
  },
  createPlay:function(text){
    return backand.object.create('Play',
      {"notes":text,"createAt":new Date()});
  },
  getListNap: function(){
        var params =  {
          sort: backand.helpers.sort.create('createdAt', backand.helpers.sort.orders.desc),
          exclude: backand.helpers.exclude.options.all,
          pageSize: 10,
          pageNumber: 1
        };
        return backand.object.getList('Nap',params);
  },
  createNap:function(text1, text2){
    return backand.object.create('Nap',
      {"startTime":text1, "endTime":text2,"createAt":new Date()});
  },
  getListMeal: function(){
        var params =  {
          sort: backand.helpers.sort.create('createdAt', backand.helpers.sort.orders.desc),
          exclude: backand.helpers.exclude.options.all,
          pageSize: 10,
          pageNumber: 1
        };
        return backand.object.getList('Meal',params);
  },
  createMeal:function(text1, text2){
    return backand.object.create('Meal',
      {"food":text1, "amount":text2,"createAt":new Date()});
  },
  getListDiaper: function(){
        var params =  {
          sort: backand.helpers.sort.create('createdAt', backand.helpers.sort.orders.desc),
          exclude: backand.helpers.exclude.options.all,
          pageSize: 10,
          pageNumber: 1
        };
        return backand.object.getList('DiaperChange',params);
  },
  createDiaper:function(dry, wet, soft, normal){
    return backand.object.create('DiaperChange',
      {"dry":dry, "wet":wet, "soft":soft, "normal":normal, "createAt":new Date()});
  },
};
dataService.init();

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
	dataService.createNap($('#napStartTime').val(), $('#napEndTime').val()).then(function(data) { 
		$('.nap .verify').slideDown();
	}).catch(function(error) { 
		$('.nap .error').slideDown();
	});;
}
function savePlay() {
	dataService.createPlay($('#playTime').val()).then(function(data) { 
		$('.play .verify').slideDown();
	}).catch(function(error) { 
		$('.play .error').slideDown();
	});
}
function saveMeal() {
	dataService.createMeal($('#foodType').val(), $('#howMuchEaten').val()).then(function(data) { 
		$('.eat .verify').slideDown();
	}).catch(function(error) { 
		$('.eat .error').slideDown();
	});
}
function saveDiaper() {
	dataService.createDiaper($('#dry').is(':checked'), $('#wet').is(':checked'), $('#soft').is(':checked'), $('#normal').is(':checked')).then(function(data) { 
		$('.diaper .verify').slideDown();
	}).catch(function(error) { 
		$('.diaper .error').slideDown();
	});
}

function loadNap() {

}



