
//API KEY  c86d07b2b8904904bc1f8864ac6549a4

var url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c86d07b2b8904904bc1f8864ac6549a4";

  //displaying data
$(document).ready(function(){
    
    fetch(url)
    .then(
        function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: '
                    + response.status)
                return;
            }

            // Examine the text in the response
            response.json().then(function(data) {
                console.log('News fetch Status : ', data.articles)
                for (let index = 0; index < 18; index++) {
                    $(".newsContainer").append('<div class="col-sm-3 news"><p class="newsHeadline">'+data.articles[index].title+'</p><p class="newsSource">'+data.articles[index].source.name+'</p><p class="newsDate">'+data.articles[index].publishedAt.substr(0, 10)+'</p><p class="newsBody">'+data.articles[index].description+'</p><a class="newsMoreLink" target="_blank" href="'+data.articles[index].url+'">More </a></div>');        
                }
            }
        )
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  })

});

