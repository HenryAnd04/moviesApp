import API_KEY from "./secret.js";




//funcion para obtener el resultado de la busqueda y mostrarlo en un div
export async function getOneMovie(inputSearchMovie) {
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
        buscarMovieRelease.textContent = `Lanzamiento: ${movie.release_date}`;

        buscarMovieDiv.append(buscarMovieImg);
        buscarMovieDiv.append(buscarMovieTitulo);
        buscarMovieDiv.append(buscarMovieRelease);
        buscarMovieContainer.append(buscarMovieDiv);
    })


}
