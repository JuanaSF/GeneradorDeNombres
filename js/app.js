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
    url += 'https://randomuser.me/api/1.3/?inc=name&';

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

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {

        if(this.status === 200) {
            const response = JSON.parse( this.responseText);
            let nombres = response.results;
            
            let htmlNombres = '<h2>Nombres Generados</h2>';
            htmlNombres += '<ul class="lista">';
            nombres.forEach(function(nombre) {
                htmlNombres += `
                    <li>${nombre.name.first}</li>
                `;
            })
            htmlNombres += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        }
    }

    xhr.send();
}