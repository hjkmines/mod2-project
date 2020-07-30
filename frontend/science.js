const $article_section = document.querySelector(".articles")
const $top_header = document.querySelector(".top-header")
const $time = document.querySelector("#time")
const $categories = document.querySelectorAll(".cat")

fetch(`http://localhost:3000/sciences`)
      .then(response => response.json())
      .then(parsed_response => {
        parsed_response.forEach(article => {
          makeArticleCard(article)
        })
      })
    
      function makeArticleCard(article) {
        const $div = document.createElement("div")
        $div.classList.add("card")
        $div.classList.add("col-lg-2")
        $div.classList.add("col-md-4")
        $div.classList.add("col-sm-6")
    
        $div.innerHTML = `<h3>${article.source}</h3><img src="${article.image}" class="card-img-top" alt="Image" onerror="this.src='./Google_news_logo.png'">
        <div class="card-body">
          <a href="${article.url}"><h5 class="card-title">${article.title}</h5></a>
        </div>`
        $article_section.append($div)
      }

  // set-up for date and time
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 
  const today = new Date(); 
  const date = `${days[today.getDay()]}, ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}` 
  const time = `${today.getHours()}:${today.getMinutes() < 10 ? '0' : ""}${today.getMinutes()}`
  const dateTime = date + "                  " + time 

  const $h4 = document.createElement("h4")
  $h4.textContent = dateTime 
  $time.append($h4)