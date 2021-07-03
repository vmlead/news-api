console.log("This is my index js file");

// let source = 'bbc-news';
let apiKey = '929411d9139346f88e5c43b30da442a2';
// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create a get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

// What to do when request is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        // console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(articles[news]);
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                        data-target="#collapse${index}" aria-expanded="true" aria-controls="collapseOne">
                                        ${element["title"]}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="headingOne"
                                data-parent="#newsAccordion">
                                <div class="card-body">${element["content"]} <a href = "${element['url']}" target="_blank"> Read more</a></div>
                            </div>
                        </div>` ;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");
    }
}
xhr.send();

