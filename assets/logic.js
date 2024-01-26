$("#search").on("click", function (event) {
    event.preventDefault();

    console.log('Dream Team!');

    let searchInput = $('#searchInput').val().trim();

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=KTCCfI8ye5DYMsMoYGcceypmCC3xwsqj&q=" + searchInput;

    console.log(queryURL);

});