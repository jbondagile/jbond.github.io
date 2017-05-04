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
window.onload = function() {
  loadNap();
  loadDiaper();
  loadPlay();
  loadMeal();
}

//first level slide downs
$('.submitting p:first(), .checking p:first()').click(function() {
	$(this).siblings('.inside').slideToggle();
	$(this).parent().siblings().children('.inside').slideUp().children().children('.inside').slideUp();

});
//second level slide downs
$('.submitting .nap p:first(), .submitting .play p:first(), .submitting .eat p:first(), .submitting .diaper p:first()').click(function(){
	$(this).siblings('.inside').slideToggle();
	$(this).parent().siblings().children('.inside').slideUp();
});
$('.checking .nap p:first(), .checking .play p:first(), .checking .eat p:first(), .checking .diaper p:first()').click(function(){
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
  dataService.getListNap().then(function(response){
    // call a helper function to populate results in our UI
    $.each(response.data, function(i, db){
      // Find a <table> element with id="myTable":
      var table = document.getElementById("napTable");

      // Create an empty <tr> element:
      var row = table.insertRow(1);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);

      // Add some text to the new cells:
      cell1.innerHTML = db.startTime;
      cell2.innerHTML = db.endTime;
    })
  })
}

function loadPlay() {
  dataService.getListPlay().then(function(response){
    // call a helper function to populate results in our UI
    $.each(response.data, function(i, db){
      // Find a <table> element with id="myTable":
      var table = document.getElementById("playTable");

      // Create an empty <tr> element:
      var row = table.insertRow(1);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);

      // Add some text to the new cells:
      cell1.innerHTML = db.notes;
    })
  })
}

function loadMeal() {
  dataService.getListMeal().then(function(response){
    // call a helper function to populate results in our UI
    $.each(response.data, function(i, db){
      // Find a <table> element with id="myTable":
      var table = document.getElementById("eatTable");

      // Create an empty <tr> element:
      var row = table.insertRow(1);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);

      // Add some text to the new cells:
      cell1.innerHTML = db.food;
      cell2.innerHTML = db.amount;
    })
  })
}

function loadDiaper() {
  dataService.getListDiaper().then(function(response){
    // call a helper function to populate results in our UI
    $.each(response.data, function(i, db){
      // Find a <table> element with id="myTable":
      var table = document.getElementById("diaperTable");

      // Create an empty <tr> element:
      var row = table.insertRow(1);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);

      // Add some text to the new cells:
      cell1.innerHTML = db.createdAt;
      if(db.Dry == 'True') {
        cell2.innerHTML = '&#10003;';
      }
      else {
        cell2.innerHTML = '&#10005;';
      }
      if(db.wet == 'True') {
        cell3.innerHTML = '&#10003;';
      }
      else {
        cell3.innerHTML = '&#10005;';
      }
      if(db.soft == 'True') {
        cell4.innerHTML = '&#10003;';
      }
      else {
        cell4.innerHTML = '&#10005;';
      }
      if(db.normal == 'True') {
        cell5.innerHTML = '&#10003;';
      }
      else {
        cell5.innerHTML = '&#10005;';
      }
    })
  })
}

