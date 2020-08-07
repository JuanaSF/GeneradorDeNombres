document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a Ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += 'https://randomuser.me/api/?';

    //Si se elige un origen especifico se lo agrega a la url
    if(origenSeleccionado != '') {
        url += `nat=${origenSeleccionado}&`;
    }
    //Se agrega el genero elegido
    if(generoSeleccionado != '') {
        url += `gender=${generoSeleccionado}&`;
    }
    //se le agrega la cantidad de nombres deseada
    if(cantidad != '') {
        url += `results=${cantidad}`;
    }

    console.log(url);

}