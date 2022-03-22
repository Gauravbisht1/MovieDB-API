const url =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'
const searchAPI =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='
const IMGPATH = 'https://image.tmdb.org/t/p/w1280'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

getmovies(url)

//Get Movies
async function getmovies(url) {
  const site = await fetch(url)
  const response = await site.json()
  showmovies(response.results)
}

function showmovies(movies) {
  if (movies.length == 0) {
    main.innerHTML = `<h2>Oops! Sorry No Movie With This Name</h2>`
  } else {
    main.innerHTML = ''
    movies.forEach((movie) => {
      let title = movie.original_title
      let rating = movie.vote_average
      let overview = movie.overview
      let popularity = movie.popularity
      let release_date = movie.release_date
      const movieEl = document.createElement('div')
      movieEl.classList.add('movie')

      movieEl.innerHTML = ` 
      <img src="${IMGPATH + movie.poster_path}" alt="${title}">
      <div class="movie-info">
      <h3>${title}</h3>
      <span>${rating}</span>
      </div>
      <div class="overview"><h2>overview</h2>
      <div class="movie-info">
      <h4>Popularity </h4>
      <span> ${popularity}</span>
      </div>
       <div class="movie-info">
      <h4>Release Date</h4>
      <span> ${release_date}</span>
      </div>
      <p>${overview}</p></div>`

      main.appendChild(movieEl)
    })
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchmovie = search.value
  if (searchmovie) {
    getmovies(searchAPI + searchmovie)

    search.value = ''
  }
})

mybutton = document.getElementById('myBtn')
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

function topFunction() {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}
