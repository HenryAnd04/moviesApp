import API_KEY from "./secret.js";
import { getTrendingMovies } from "./getTrendingMovies.js";
import { getGenresMovies } from "./getCategoriasMovies.js";
import { getOneMovie } from "./getOneMovie.js";
import { getCategory } from "./getCategoriasBusqueda.js";

getTrendingMovies()
getGenresMovies()


//capturamos el boton para ir hacia atras en la pantalla de busqueda
const headerBotonSearch = document.querySelector('.header-boton');

//le agregamos un evento escucha al boton de buscar y llamamos la funcion getOneMovie()
headerBotonSearch.addEventListener('click', e => {
    const inputSearchMovie = document.querySelector('#inputSearchMovie').value;
    document.querySelector('.tendencias').style.display = 'none'
    document.querySelector('.categorias').style.display = 'none'
    document.getElementById('goToHome').style.display = 'flex'
    document.querySelector('#buscarMovieContainer').style.display = 'flex';
    getOneMovie(inputSearchMovie) //

})




//capturamos el boton de atras para volver al home desde la pantalla de busqueda
const goToHome = document.getElementById('goToHome');
goToHome.addEventListener('click', e => {
    fnGoToHome()
})


//con esta funcion mostramos y ocultamos los elementos del dom
function fnGoToHome() {
    document.querySelector('.tendencias').style.display = 'flex'
    document.querySelector('.categorias').style.display = 'flex'
    document.querySelector('#buscarMovieContainer').style.display = 'none'
    document.getElementById('goToHome').style.display = 'none'
    document.querySelector('#buscarCategoriaContainer').style.display = 'none';
    document.querySelector('#inputSearchMovie').value = ''
    document.querySelector('.header-buscador').style.display = 'flex';
}


window.addEventListener('click', e => {
    if (e.target.matches('.categorias-item-nombre')) {
        let query = e.target.textContent
        document.querySelector('.tendencias').style.display = 'none'
        document.querySelector('.categorias').style.display = 'none'
        document.getElementById('goToHome').style.display = 'flex'
        document.querySelector('#buscarCategoriaContainer').style.display = 'flex';
        document.querySelector('.header-buscador').style.display = 'none';
        
        getCategory(query);
    }
})


