/*
		Tipos de datos en JavaScript:
    	number
      string
      boolean
      undefined
*/

let num = 7
typeof(num)

let str = "Hola Mundo"
typeof(str)

let booleano = true
typeof(booleano)

let dato 
console.log(dato)  

// Operadores matematicos:

let suma = 3 + 2
suma
let resta = 3 - 2
resta
let mult = 3 * 2
mult
let div = 3 / 0
div 
let pot = 3 ** 2
pot

//	Concatenaciones:

let frase = "hola "+"mundo"+"!!!"
frase

//	Variables incrementables y decrementables:

let x = 1
x							//	1
let y = ++ x
y							//	2
x							// 	2
let z = x  ++
z							//	2
x							//	3
let a = 3
let b = -- a
b							//	2
a							//	2
let c = a ++
c							//	2
a							//	3

//	Operadores booleanos:

!true					//	false
!false				//	true
!!true				//	true

//	Operadores de igualdad:
//	En javaScript se usa el operador === camparar tanto en "valor" como "tipo "

true === true
true === false
true !== false
false !== false

3 == "3"
3 === "3"

//	Comparaciones:

5 > 3
5 < 3
3 >= 3
2 <= 1
"c" < "b"

//	Operadores logicos:

0 == false
1 == true
   
true && true && true
true && false && true

false || false || false
false || true || false

//	Sentencias condicionales

//	if - else if - else
let operacion = 6 + 9

if(operacion > 7){
  console.log('Es mayor a 7')
}else if(operacion > 3 && operacion < 7){
  console.log('Esta entre 3 y 7')
}else{
  console.log('Es menor a 3')
}

// switch
switch(operacion){
  case 0:
    console.log('El resultado es 0');
    break;
  case 7:
    console.log('El resultado es 7');
    break;
    
  default:
    console.log('El resultado no es ni cero ni 7');
}

//	Funciones:

function saludar(nombre = "amigo"){
  return "Holaaa " + nombre + " !!!";
}
saludar("Julio")
saludar("Dianelis")
saludar()

/*
		Antes del 2015 en JavaScript no existian las clases ,
    por lo que la manera de crearla era a traves de funciones
    como se muestra a continuacion
*/

function Inventario(nombre){
  this.nombre = nombre;
  this.articulos = [];
}
Inventario.prototype.getNombre = function(){
  return this.nombre;
}
Inventario.prototype.add = function(articulo, cantidad){
  this.articulos[articulo] = cantidad;
}
Inventario.prototype.cantidad = function(articulo){
  return this.articulos[articulo];
}

let libros = new Inventario('libros');
libros.getNombre();
libros.add("Aprendiendo JavaScript", 7);
libros.cantidad('Aprendiendo JavaScript');

/*
		Pero gracias a Dios ya tenemos la palabra reservada class
*/

class Almacen{
  constructor(nombre){
    this.nombre = nombre;
  	this.articulos = [];
  }
  getNombre(){
    return this.nombre;
  }
  add(articulo, cantidad){
    this.articulos[articulo] = cantidad;
  }
  cantidad(articulo){
    return this.articulos[articulo];
  }
}

let producto = new Almacen('Aceite');
producto.getNombre();
producto.add("Aprendiendo JavaScript con Carlos Azaustre", 7);
producto.cantidad('Aprendiendo JavaScript con Carlos Azaustre');