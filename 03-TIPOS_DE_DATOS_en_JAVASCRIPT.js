
/**
    Clase Objeto:
    Maneras de acceder al la propiedades de un objeto
    Tambien las propiedades pueden tener funciones
*/
const libro = {
  titulo: "Aprendiendo JavaScript",
  autor: "Carlos Azaustre",
  numPaginas: 100,
  editorial: "carlosazaustre.es",
  precio: 24.90,
  leer: function(){
    console.log("He leido un libro")
  }
}
// Maneras de acceder a contenido de las propiedades de un objeto

libro.titulo
libro["autor"]
let page = "numPaginas";
libro[page]

libro.leer();

// El valor de las propiedades se puede modificar
libro.titulo = "Desarrollo web con React"
libro.titulo

//	Maneras de crear un objeto
let book = {
 editorial: "casanueva.cu",
}
book.editorial

let almacen = new Object({
 encargado: "Perensejo",
})
almacen.encargado

let  revista = {
 titulo: "aprendiendo JavaScript",
 autor:{
   nombre: "Carlos Azaustre",
   edad: 36,
   redes: {
     twitch: "twitch.tv/carlosazaustre",
     tiktok: "tiktok.com/@carlosazaustre"
   }
 }
}

revista.autor.redes
revista['autor']['edad']

//	Dos objetos van a ser exactamente igual si su referencia es la misma

const car1 = {marca: "Audi", modelo: "A4"}
const car2 = {marca: "Audi", modelo: "A4"}

car1 === car2										//	false
car1.marca === car2.marca				//	true

//	Aqui igualamos su referencia 
const car3 = car1
car3 === car1

//	Clase Number

// Natural
5
// Decimal
5.25
// Numero exadecimal seria 0x(valor exadecimal) va del 0 al 15
0x1F
// Numero comaflotante seria e2 -> 10^2 * 5.4
5.4e2
// Infinity
3/0
// NaN
"Hola mundo" / 3

parseInt("15")
parseFloat("5e3")
let num = 2.5678
let res = num.toFixed(2)

parseFloat(res)
 
num.toString(2)	// Binario
num.toString(10) // Decimal
num.toString(16)	// Hexadecimal

// Clase Math

Math.PI
Math.E
Math.random()
Math.pow(2, 3)
Math.min(2,3,1,0)
Math.max(9,3,6)

//	Array

let miArray = [1,2,3,4,5,6,7]
console.log(miArray)

let arrayObj = [
 {propiedad: "valor"},
 {propiedad: "otroValor"}
]
arrayObj[1].propiedad

let arrayArrays = [
 [2,4],
 [3,6]
]
arrayArrays[1][0]

let arrayMixto = [
 1,
 true,
 [3,2],
 "hola",
 {clave: "valor"}
]
arrayMixto.length

let arrayPrueba = [2,5,7,1,0,3]
arrayPrueba.sort()
arrayPrueba.pop()
arrayPrueba
arrayPrueba.push(2)
arrayPrueba.sort()
arrayPrueba.reverse()

// Pintar template

let valor = "Esta es una etiqueta h1"
const template = [
 "<h1>",
 valor,
 "</h1>"
].join("");

console.log(template)

// Metodo map
let mapArray = [2,4,6,8]
let raices = mapArray.map(Math.sqrt)
raices

// Metodo filter
let filterArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let resultado = filterArray.filter(item => item % 3 === 0)
resultado
filterArray

// Metodo slice
let sliceArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
sliceArray.slice(2)
sliceArray.slice(2, 7)
sliceArray.slice(2, -5)

//	Clase String
let str = "JavaScript"
str[7]
str.length
str.charCodeAt(5)
str.indexOf("Script")
str.substring(2,7)

const fecha = new Date()
fecha.toString().split("  ")[6]