const fila = document.querySelector('.contenedor-carrusel');
const peliculas = document.querySelectorAll('.pelicula2');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// evento listener para la flecha derecha
flechaDerecha.addEventListener('click', () => {  
    fila.scrollLeft += fila.offsetWidth;
});

// evento listener para la flecha izquierda
flechaIzquierda.addEventListener('click', () => {  
    fila.scrollLeft -= fila.offsetWidth;
});

//paginacion
const numeroPaginas = Math.ceil(peliculas.length / 5);
for (let i = 0; i < numeroPaginas; i++){
    const indicador = document.createElement('button');

    if (i === 0){
        indicador.classList.add('activo');
    }

    document.querySelector('.indicadores').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
    });
}
//paginacion 2
