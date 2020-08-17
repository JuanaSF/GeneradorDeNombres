document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

function cargarNombres(e) {
    e.preventDefault();

    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value;

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value;

    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += 'https://randomuser.me/api/1.3/?inc=name&';

    if(origenSeleccionado != '') {
        url += `nat=${origenSeleccionado}&`;
    }

    if(generoSeleccionado != '') {
        url += `gender=${generoSeleccionado}&`;
    }

    if(cantidad != '') {
        url += `results=${cantidad}`;
    }

    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(datos) {
            let nombres = datos.results;

            let htmlNombres = '<h2>Nombres Generados</h2>';
            htmlNombres += '<ul class="lista">';
            nombres.forEach(function(nombre){
                htmlNombres += `
                    <li>${nombre.name.first}</li>
                `;
            })
            htmlNombres += '</ul>';

            document.getElementById('resultado').innerHTML = htmlNombres;
        })
        .catch(function(error) {
            console.log(error)
        })
}