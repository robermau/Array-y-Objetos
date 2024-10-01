const bancos = ['Santander', 'ITAU', 'Galicia', 'BCI']

// console.log(bancos)
for (let banco of bancos) {
    // console.log(banco)
}

const nombres = ['Juan', 'Fabian', 'Jorge', 'Luisa']

// console.log(nombres[0])
// console.log(nombres[1])
// console.log(nombres[])


const lenguajes = ['JavaScript', 'Python', 'Java', 'Elixir', '.NET']


for (let lenguaje of lenguajes) {
    // console.log(lenguaje)
}

//INTERPOLACION (no usar comillas dobles y simples , usar bastiks)
const nombre = 'Roberto'
const edad = '38'

// console.log(`Hola mi nombre es ${nombre} , tengo ${edad} años`)


// const frutas =[ 'Pera' , 'Manzana','Banana','Naranja','Frutilla']
// const d =document.querySelector('#elemetosDinamicos')
// for(let fruta of frutas){
//     d.innerHTML +=`<li>${fruta}</li>`
// }



const notasMusicales = ['Do', 'Re', 'Mi', 'Fa', 'Sol']
let notas = ''
const n = document.querySelector('#notasMusicales')
// for(let notaMusical of notasMusicales){
//     n.innerHTML +=`<li>${notaMusical}</li>`
// }


// correcta
// for(let notaMusical of notasMusicales){
//     notas +=`<li>${notaMusical}</li>`
// }
// n.innerHTML = notas




//OBJETOS
// let auto = {
//     marca: 'Volskwagen',
//     año: 2012,
//     colores: ['Rojo', "Azul", 'Verde','Negro'],
//     km: 20000,
//     vendido: false

// }

// console.log(auto)
// console.log(auto['marca'])

// const articulo = {
//     id: 31,
//     titulo: "Autos nuevos en Chile",
//     subtitulo: "El mercado de autos se normaliza",
//     descripcion: "No es novedad que los precios de los autos usados se han disparado debido a la falta en stock de autos nuevos, sin embargo puede que esto esté llegando a su fin…"
// }

// const articuloSection = document.querySelector('.section')

// articuloSection.innerHTML = `
// <article class="articulo">
//   <h4>${articulo.titulo}</h4>
//   <h6>${articulo.subtitulo}</h6>
//   <p>${articulo.descripcion}</p>
//   <a href="/articulo/${articulo.id}"> <button> Ver mas

//   </button>
// </a>

// </article>
// `
//Arreglos de Objetos 

const productos = [ 
     { id: 1, titulo: "Item 1", precio: "12000" },
     { id: 2, titulo: "Item 2", precio: "14000", },
     { id: 3, titulo: "Item 3", precio: "6000", },
     { id: 4, titulo: "Item 4", precio: "4000", },
     { id: 5, titulo: "Item 5", precio: "10000", }
    ]


    function template () {
        html =''
   
        for( let producto of productos) {
            
            html += `
            
             <li>${producto.id}</li>
             <li>${producto.titulo}</li>
             <li>${producto.precio}</li>
             `
        }
    
        let elemento= document.querySelector('.productos')
        elemento.innerHTML = html


    }
    template()