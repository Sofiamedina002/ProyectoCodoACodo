let url = "/tatuajes.json";
let datos = [];
fetch(url)
    .then(response => response.json())
    .then(data => {  // data contiene el JSON
        console.log(data)
        datos = data.arreglo   //  3 plantas

        let cad = `<div id="galeria">`

        for (tatuaje of datos) {
            cad += `<img src="${tatuaje.imagen}" alt="${tatuaje.nombre}">`
        }

        cad += `</div>`

        console.log(cad)



        document.getElementById("galeria").innerHTML = cad;

    }
    );





