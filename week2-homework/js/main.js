

var app = app || {};

app.main = (function(){

	console.log('Loading app.');

	// 1. We'll put all our event listeners here,
	// that is, all code related to some interactive element on the page
	var attachEvents = function(){

		console.log('Attaching events.');

		/*
		// This is the vanilla JS way of doing things:
		document.getElementById('search-button').addEventListener("click", function(){
			console.log(document.getElementById('search-box').value);
		});

		// This is the JQuery equivalent.
		// Besides being shorter, we can use CSS selectors
		// instead of learning a different syntax
		// See more at: http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/
		$('#search-button').on('click', function(){
			console.log($('#search-box').val());
		});
		*/

		// It's recommended to REMOVE the events before adding. Why?
		// We might call this function again as we create new elements.
		// When we do so, we don't want to duplicate events in existing objects.
		$('#search-button').off('click').on('click', function(){
			loadData($('#search-box').val());
		});

		$('#search-box').keypress(function(e) {
			if (e.keyCode == 13) {
				loadData($('#search-box').val());
			}
		});
	};

	// 2. Load data from the API
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
	         
				// The results are encapsulated into data and results
				console.log(response);
				var results = response.data;
				console.log('Found ' + results.length + 'results.');

				appendData(results);
	        }
	    });

	};

	// 3. Let's display this data
	var appendData = function(data){
		console.log('Appending data.');
		console.log(data);

		// 5. What happens if we search for something again?
		// Let's clean up the results so we don't mess things up
		$('#view').empty();

		// 6. BONUS! Let's scroll
		$('html, body').animate({
            scrollTop: $('#view').offset().top + 'px'
        }, 'slow');

		// 3.
		for(var i = 0; i < data.length; i++){
			$('#view').append('<img src="' + data[i].images.fixed_height.url + '"class="gallery-item"/>');
		}

		// //make css background 100vh
		// $('#grad1').css("height","vh");
	};

	// 1.
	var init = function(){
		console.log('Initializing app.');
		attachEvents();
	};

	return {
		init: init
	};
})();

/* Wait for all elements on the page to load */
window.addEventListener('DOMContentLoaded', app.main.init);
