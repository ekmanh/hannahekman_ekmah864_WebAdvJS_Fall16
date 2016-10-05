/*utalized the spotify example we did in class but made my own adjustments and added a different api*/

var app = app || {};

app.main = (function(){

	console.log('Loading app.');

	var attachEvents = function(){

		console.log('Attaching events.');

		
		$('#search-button').off('click').on('click', function(){
			loadData($('#search-box').val());
		});

		$('#search-box').keypress(function(e) {
			if (e.keyCode == 13) {
				loadData($('#search-box').val());
			}
		});
	};

	// Load data from the API
	var loadData = function(query){
		console.log('Searching for ' + query + '...');
		
	    $.ajax({
	        url: 'http://api.giphy.com//v1/gifs/search?q=' + query + "&api_key=dc6zaTOxFJmzC", 

	        data: {
	            q: query,
	            type: 'gif',
	            rating: 'pg',
	            limit: 20,
	            offset: 10
	        },


	        success: function (response) {
	         

				console.log(response);
				var results = response.data;
				console.log('Found ' + results.length + 'results.');

				appendData(results);
	        }
	    });

	};

	// Data displayed
	var appendData = function(data){
		console.log('Appending data.');
		console.log(data);

		
		$('#info').empty();

	
		$('html, body').animate({
            scrollTop: $('#info').offset().top + 'px'
        }, 'slow');

		
		for(var i = 0; i < data.length; i++){
			$('#info').append('<img src="' + data[i].images.fixed_height.url + '"class="gallery-item"/>');
		}

	
	};

	// initialize the app
	var init = function(){
		console.log('Initializing app.');
		attachEvents();
	};

	return {
		init: init
	};
})();


window.addEventListener('DOMContentLoaded', app.main.init);
