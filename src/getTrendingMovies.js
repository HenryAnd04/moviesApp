import API_KEY from "./secret.js";


//funcion para mostrar las peliculas en tendencia del dia
//hacemos un fetch a la api y mostramos creando elementos html
export async function getTrendingMovies() {
    const res = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=' + API_KEY)
    const data = await res.json();
    console.log(data);
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