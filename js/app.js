

//const listaRecetas = document.querySelector('ul');
const ul = document.getElementById('lista-recetas');
const h2Recetas = document.getElementById('tit_recetas')

let li
let h3
let pCocina
let pDieta
let pInstrucciones
let pCalorias
let imagen



function crearRecetas(recipes) {
    recipes.forEach(recipe => {
        ul.innerHTML += `
        <div class="card1" style="width: 30%;">
            <img src="${recipe.foto}" class="card-img-top" alt="...">
            <div class="card-body1">
                <h5 class="card-title">${recipe.nombre}</h5>
                <p><strong>Cocina: </strong>${recipe.cocina}</p>
                <p><strong>Tipo: </strong>${recipe.tipo}</p>
                <p><strong>Dieta: </strong>${recipe.dieta}</p>
                <a href="#" class="btn1 btn-secondary">Ver más</a>
            </div>
        </div>
        `;
    });
}


function filtra(categoria) {
    if (categoria == "todos") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        crearRecetas(recetas);
    } else if (categoria == "criolla") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let cocinaCriolla = recetas.filter((item) => item.tipo == "Criolla");
        crearRecetas(cocinaCriolla);
    } else if (categoria == "internacional") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let cocinaInternacional = recetas.filter((item) => item.tipo == "Internacional");
        crearRecetas(cocinaInternacional);
    } else if (categoria == "ricaCal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let ricaCalorias = recetas.filter((item) => item.dieta == "Rica en calorías");
        crearRecetas(ricaCalorias);
    } else if (categoria == "moderadaCal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let moderadaCalorias = recetas.filter((item) => item.dieta == "Moderada en calorías");
        crearRecetas(moderadaCalorias);
    } else if (categoria == "bajaCal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let bajaCalorias = recetas.filter((item) => item.dieta == "Baja en calorías");
        crearRecetas(bajaCalorias);
    } else if (categoria == "menos500Cal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let menor500Calorias = recetas.filter((item) => item.calorias <= 500);
        crearRecetas(menor500Calorias);
    } else if (categoria == "menos1000Cal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let menor1000Calorias = recetas.filter((item) => item.calorias <= 1000);
        crearRecetas(menor1000Calorias);
    }

}