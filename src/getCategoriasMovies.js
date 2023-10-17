import API_KEY from "./secret.js";

//funcion para obtener y mostrar los generos de peliculas que esta api nos proporciona
//en este caso a traves del for slo mostramos 6 categorias ya que son 20 y pueden parecer muchas
export async function getGenresMovies() {
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

        const tituloGenre = document.createElement('button');
        tituloGenre.classList.add('categorias-item-nombre');
        tituloGenre.textContent = genre.name;

        genreMovie.append(genreIcono);
        genreMovie.append(tituloGenre);
        contenedorGenresMovie.append(genreMovie);
    }

}