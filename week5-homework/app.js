var Xray = require('x-ray');
var x = Xray();

// 1st argument: URL you want to scrape
// 2nd argument: the selector that you want to grab
// 3rd argument: the array containing object of what you want to be passed on
//look inside this list of mb-movies, because that is the class names that the movie sections are under

x('http://games.espn.com/ffl/tools/projections?display=alt&slotCategoryId=0', '.games-fullcol', [{
	TopTeams: x('.tableBody', [{
		QB: '.tableBody .tableSubHead .subheadPlayerNameLink .flexpop',
		Rank: '.tableBody .tableSubHead .subheadPlayerNameLink',
		Points: '.tableBody .tableBody .playertableStat.appliedPoints',


// x('https://www.rottentomatoes.com/browse/in-theaters/', '.mb-movies', [{
// 	topMovies: x('.mb-movie', [{
// 		title: '.movie_info a .movieTitle',		


		// link: '.movie_info a@href',
		// year: '.lister-item-year',
		// rank: '.lister-item-index',
		// rating: '.ratings-imdb-rating strong',
		// thumbnail: '.lister-item-image img@src',
		// genre: ['.genre'],
		// people: x('.lister-item-content p a', [{
		// 	name: '',
		// 	link: '@href'
		// }]),
		// poster: x('.lister-item-header a@href', 'head meta[property="og:image"]@content')
	}])
}])
		.paginate('a.paginationNav@href')
		.limit(30)
    .write('results.json');