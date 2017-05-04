function login() {
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
	    getLogin: function(){
	          var params =  {
	            sort: backand.helpers.sort.create('id', backand.helpers.sort.orders.desc),
	            exclude: backand.helpers.exclude.options.all,
	            pageSize: 10,
	            pageNumber: 1
	          };
	          return backand.object.getList('User',params);
	    }
	}
	dataService.init();

	dataService.getLogin().then(function(response){
      // call a helper function to populate results in our UI
      $.each(response.data, function(i, db){
        var username = document.getElementById('inputUsername').value;
        var password = document.getElementById('inputPassword').value;

        if(username == db.username && password == db.password) {
        	document.cookie = "login=true";
        	window.location.href = "index.html";
        }
      })
    })
}