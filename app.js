const peliculas = [
    {
        titulo: "Episodio I: La amenaza fantasma",
        poster: "https://www.posterscine.com/media/catalog/product/cache/1c91d037a1f0ef180108abb0973795cc/p/o/poster_la_guerra_de_las_galaxias_anakin_sombra_.png",
        año: 1999,
        director:"George Lucas" 
    },
    {
        titulo: "Episodio II: El ataque de los clones" ,
        poster: "https://www.phenomena-experience.com/galeria/Historico_peliculas/A/ataque-de-los-clones-poster.jpg",
        año: 2002,
        director: "George Lucas"
    },
    {
        titulo: "Episodio III: La venganza de los sith",
        poster: "https://m.media-amazon.com/images/I/71O92W1HkNL.jpg",
        año: 2005,
        director: "George Lucas" 
       
    },
    {
        titulo: "Episodio IV: Una nueva esperanza",
        poster: "https://i.etsystatic.com/14140434/r/il/de4702/1526222179/il_fullxfull.1526222179_kl3i.jpg",
        año: 1977,
        director:  "George Lucas"
      
    },
    {
        titulo: "Episodio V: El imperio contraataca",
        poster: "https://static.posters.cz/image/750/posters/star-wars-episodio-v-el-imperio-contraataca-one-sheet-i30790.jpg",
        año: 1980,
        director: "Irvin Kershner"
       
    },
    {
        titulo: "Episodio VI: El retorno del Jedi",
        poster: "https://m.media-amazon.com/images/I/81GkOWkB-0L._AC_UF894,1000_QL80_.jpg",
        año: 1983,
        director: "Richard Marquand" 
    },
    {
        titulo: "Star Wars: El despertar de la fuerza",
        poster: "https://pics.filmaffinity.com/star_wars_episode_vii_the_force_awakens-625343391-mmed.jpg",
        año: 2015,
        director:"J.J. Abrams" 
    },
    {
        titulo: "Star Wars: Los últimos Jedi",
        poster: "https://pics.filmaffinity.com/star_wars_the_last_jedi-535293064-mmed.jpg",
        año: 2017,
        director: "Rian Johnson" 
    },
    {
        titulo: "Star Wars: El ascenso de Skywalker",
        poster: "https://pics.filmaffinity.com/star_wars_the_rise_of_skywalker-619389738-mmed.jpg" ,
        año: 2019,
        director:"J.J. Abrams" 
    }
]


function ordenarPorAño(peliculas) {
    peliculasOrdenadas=[...peliculas];
    return peliculasOrdenadas.sort((a, b) => a.año - b.año);
}
      
function mostrarPeliculas(peliculas) {
    const seccionpel = document.querySelector("#peliculas");
    seccionpel.innerHTML = ""; // Limpiar la sección de películas
        
    for (const pelicula of peliculas) {
        const template = `
        <article>
            <h3 class = "titulo">${pelicula.titulo}</h3>
            <img src=${pelicula.poster} alt="Poster pelicula"/>
            <h4 class="anio">${pelicula.año}</h4>
            <p class="director">${pelicula.director}</p>
        </article>
        `;
        seccionpel.innerHTML += template;
    }
}
      
let peliculasOrdenadas = null;

document.getElementById('filtro').addEventListener('click', function() {
    if (peliculasOrdenadas===null) {
        peliculasOrdenadas = ordenarPorAño(peliculas);
        mostrarPeliculas(peliculasOrdenadas);
        this.classList.add('activado');
        this.innerText="filtrar por orden cronológico"
    } else {
        console.log(peliculas);
        mostrarPeliculas(peliculas);
        peliculasOrdenadas = null;
        this.classList.remove('activado');
        this.innerText="Filtrar por año";
    }
});

      
// Mostrar las películas al cargar la página
mostrarPeliculas(peliculas);