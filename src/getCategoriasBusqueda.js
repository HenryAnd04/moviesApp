import API_KEY from "./secret.js";

//funcion para mostrar peliculas por categoria
export async function getCategory(query) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTZjODUyZDIwZWFkOTRjYTc1ZjU5YTA2MDY2NjYwZSIsInN1YiI6IjYyOWZhODM5N2I3YjRkMDA1MzQ1MzMyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w5XNhHlKnriDMhwA_HYo5SoMZnj1IN_OhXeEmSmZ7as'
        }
    };

    const res = await fetch(`https://api.themoviedb.org/3/search/collection?query=${query}&include_adult=false&language=en-US&page=1?api_key=${API_KEY}`, options)
    const data = await res.json();
    const categoriaEncontrada = data.results
    const buscarCategoriaDiv = document.getElementById('buscarCategoriaContainer');

    categoriaEncontrada.forEach(item => {
        const buscarCategoriaDiv = document.createElement('div');
        buscarCategoriaDiv.classList.add('buscar-categoria-div')
        
        const buscarCategoriaImg = document.createElement('img');
        buscarCategoriaImg.setAttribute('src', 'https://image.tmdb.org/t/p/w300/' + item.poster_path);
        buscarCategoriaImg.setAttribute('alt', item.name);

        const buscarCategoriaTitulo = document.createElement('p');
        buscarCategoriaTitulo.textContent = item.name;

        const buscarMovieLenguage = document.createElement('span');
        buscarMovieLenguage.textContent = `Idioma: ${item.original_language}`;

        buscarCategoriaDiv.append(buscarCategoriaImg);
        buscarCategoriaDiv.append(buscarCategoriaTitulo);
        buscarCategoriaDiv.append(buscarMovieLenguage);
        buscarCategoriaContainer.append(buscarCategoriaDiv);
    })



}