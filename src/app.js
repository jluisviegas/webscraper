const feedDisplay = document.querySelector('#feed')

fetch('http://localhost:8000/results')
    .then(response => {return response.json()})
    .then(data => {
      data.forEach(article => {
          const articleItem = `<div>Title:<h3>` + article.title + `</h3>URL:<p>` + article.url + `</p></div>`
          feedDisplay.insertAdjacentHTML("beforeend", articleItem)
      })
  })
  .catch(err => console.log(err))