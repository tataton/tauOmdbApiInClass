console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  $( '#searchButton' ).on( 'click', function(){
    console.log( 'on click for searchButton' );
    // get user input for a search
    var movieTitle = $( '#searchIn' ).val();
    console.log( 'searching for:', movieTitle );
    // assemble search string url
    var searchUrl = 'http://www.omdbapi.com/?s=' + movieTitle;
    console.log( 'searchUrl:', searchUrl );
    // ajax call to that url
    $.ajax({
      url: searchUrl,
      dataType: 'JSON',
      success: function( data ){
        console.log( 'success, data:', data );
        // parse the returned data
        console.log( 'data.Search:', data.Search );
        var searchResults = data.Search;
        // display the data on the DOM
        displaySearchResults( searchResults );
      }
    }); // end ajax
  }); // end on click for searchButton

  var displaySearchResults = function( results ){
    console.log( 'in displaySearchResults:', results );
    // loop though the search results and displaying each Title, Year, Poster
    var outputText = '';
    for (var i = 0; i < results.length; i++) {
      outputText += '<h2>' + results[i].Title + '</h2><p>' + results[i].Year + '</p>';
      outputText += '<img src="' + results[i].Poster + '" />';
    }
    // display in div
    $( '#outputDiv' ).html( outputText );
  }; // end displaySearchResults
}); // end doc ready
