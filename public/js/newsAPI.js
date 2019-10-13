
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
                for (let index = 0; index < 3; index++) {
                    // $(".testNews").append(' <div class="col-sm-4 newsBox"><h6>'+data.articles[index].publishedAt.substr(0, 10)+'</h6><p>'+data.articles[index].source.name+'</p><h4>'+data.articles[index].description+'</h4></div>');        
                    $(".testNews").append('<div class="col-sm-3 news"><p class="newsHeadline">'+data.articles[index].title+'</p><p class="newsSource">'+data.articles[index].source.name+'</p><p class="newsDate">'+data.articles[index].publishedAt.substr(0, 10)+'</p><p class="newsBody">'+data.articles[index].description+'</p><a class="newsMoreLink" target="_blank" href="'+data.articles[index].url+'">More </a></div>');                   
                }
            }
        )
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  })

});

function showTwoBox1() {
    const x = document.getElementById('ourOff')
    const y = document.getElementById('ourSp')
    const b1 = document.getElementById('homeButton1')
    const b2 = document.getElementById('homeButton2')

    x.style.display = 'block'    
    x.style.opacity = '1'
    b1.style.color = '#fafafa'
    b1.style.background = "#6710f2c4"
    b2.style.color = '#343a40'
    b2.style.background = "#fafafa"
    y.style.opacity = '0'
    y.style.display = 'none'    

    
}

function showTwoBox2() {
    const x = document.getElementById('ourOff')
    const y = document.getElementById('ourSp')
    const b1 = document.getElementById('homeButton1')
    const b2 = document.getElementById('homeButton2')

    x.style.opacity = '0'
    x.style.display = 'none'
    y.style.display = 'block'    
    y.style.opacity = '1'
    b2.style.color = '#fafafa'
    b2.style.background = "#6710f2c4"
    b1.style.color = '#343a40'
    b1.style.background = "#fafafa"

}