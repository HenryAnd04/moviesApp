import API_KEY from "./secret.js";


//funcion para mostrar las peliculas en tendencia del dia
//hacemos un fetch a la api y mostramos creando elementos html
async function getTrendingMovies() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY)
    const data = await res.json();

    const movies = data.results;

    const contenedorMoviesTrendingDay = document.querySelector('.tendencias-container-movie');

    movies.forEach(movie => {
        const tendenciaMovie = document.createElement('div');
        tendenciaMovie.classList.add('tendencias-movie');

        const tendenciaImageMovie = document.createElement('img');
        tendenciaImageMovie.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path);
        tendenciaImageMovie.setAttribute('alt', movie.title);

        tendenciaMovie.append(tendenciaImageMovie);
        contenedorMoviesTrendingDay.append(tendenciaMovie);
    });

}


getTrendingMovies()


//funcion para obtener y mostrar los generos de peliculas que esta api nos proporciona
//en este caso a traves del for slo mostramos 6 categorias ya que son 20 y pueden parecer muchas
async function getGenresMovies() {
    const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=' + API_KEY)
    const data = await res.json();

    const genres = data.genres;
    const contenedorGenresMovie = document.querySelector('.categorias-item-container');

    for (let i = 0; i < 6; i++) {
        const genre = genres[i];
        const genreMovie = document.createElement('div');
        genreMovie.classList.add('categorias-item');

        const genreIcono = document.createElement('div');
        genreIcono.classList.add('categorias-icono');

        const tituloGenre = document.createElement('div');
        tituloGenre.classList.add('categorias-item-nombre');
        tituloGenre.textContent = genre.name;

        genreMovie.append(genreIcono);
        genreMovie.append(tituloGenre);
        contenedorGenresMovie.append(genreMovie);
    }

}

getGenresMovies()


//capturamos el boton para ir hacia atras en la pantalla de busqueda
const headerBotonSearch = document.querySelector('.header-boton');

//le agregamos un evento escucha al boton de buscar y llamamos la funcion getOneMovie()
headerBotonSearch.addEventListener('click', e => {
    const inputSearchMovie = document.querySelector('#inputSearchMovie').value;
    document.querySelector('.tendencias').style.display = 'none'
    document.querySelector('.categorias').style.display = 'none'
    document.getElementById('goToHome').style.display = 'flex'
    document.querySelector('#buscarMovieContainer').style.display= 'flex';
    getOneMovie(inputSearchMovie) //

})

//funcion para obtener el resultado de la busqueda y mostrarlo en un div
async function getOneMovie(inputSearchMovie) {
    /* let movie = 'avengers' */
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTZjODUyZDIwZWFkOTRjYTc1ZjU5YTA2MDY2NjYwZSIsInN1YiI6IjYyOWZhODM5N2I3YjRkMDA1MzQ1MzMyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w5XNhHlKnriDMhwA_HYo5SoMZnj1IN_OhXeEmSmZ7as'
        }
    };

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?query=${inputSearchMovie}&include_adult=false&language=en-US&page=1?api_key=${API_KEY}`, options)
    const data = await res.json();
    const moviesEncontradas = data.results
    const buscarMovieContainer = document.getElementById('buscarMovieContainer');


    moviesEncontradas.forEach(movie => {
        const buscarMovieDiv = document.createElement('div');
        buscarMovieDiv.classList.add('buscar-movie-div');

        const buscarMovieImg = document.createElement('img');
        buscarMovieImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + movie.poster_path);
        buscarMovieImg.setAttribute('alt', movie.title);

        const buscarMovieTitulo = document.createElement('p');
        buscarMovieTitulo.textContent = movie.title;

        const buscarMovieRelease = document.createElement('span');
        buscarMovieRelease.textContent = movie.release_date;

        buscarMovieDiv.append(buscarMovieImg);
        buscarMovieDiv.append(buscarMovieTitulo);
        buscarMovieDiv.append(buscarMovieRelease);
        buscarMovieContainer.append(buscarMovieDiv);
    })


}




//capturamos el boton de atras para volver al home desde la pantalla de busqueda
const goToHome = document.getElementById('goToHome');
goToHome.addEventListener('click', e => {
    fnGoToHome()
})


//con esta funcion mostramos y ocultamos los elementos del dom
function fnGoToHome(){
    document.querySelector('.tendencias').style.display = 'flex'
    document.querySelector('.categorias').style.display = 'flex'
    document.querySelector('#buscarMovieContainer').style.display= 'none'
    document.getElementById('goToHome').style.display = 'none'
}