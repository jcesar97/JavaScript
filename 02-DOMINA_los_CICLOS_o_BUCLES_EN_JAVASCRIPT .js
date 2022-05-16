/*
		Bucles:
    	-inicializacio	=>	fija los valores con los que ejecutamos el bucle
      -condicionde peranencia 
      -actualizacion	=>	de la variables que controla esa condicion
*/
//	while

function bucleWhile(num){
    let i = 0;
    while(i < num){
      console.log(i);
      i ++;
    }
  }
  
  bucleWhile(7);
  
  // do	-	while
  
  function doWhile(num){
    let i = 0;
    do{
      console.log(i);
      i ++;
    }while(i < num);
  }
  
  doWhile(7);
  
  //	for(inicializacion, condicion, actualizacion)
  
  function bucleFor(num){
    for(let i = 0; i < num; i ++){
      console.log(i);
    }
    console.timeEnd('bad');
  }
  
    
    bucleFor(7)
  
  const obj= {
    unArray: new Array(1000000)
  }
  
  function badPerformance(){
    console.time('bad');
    for(let i=0; i<obj.unArray.length; i++){
      obj.unArray[i] = 'Hola mundo';
    }
     console.timeEnd('bad');
  }
  
  function goodPerformance(){
    console.time('good');
    let array = obj.unArray;
    for(let i=0, long=array.length; i<long; i++ ){
      obj.unArray[i] = 'Hola mundo';
    }
    console.timeEnd('good');
  }
  
  badPerformance();
  goodPerformance();
  
  // forEach
  
  const miArray = [1, 2, 3, 4 ,5];
  
  miArray.forEach((item, index)=>{
    console.log(`El valor de la posicion ${index} es: ${item} `);
  })
  
  // forEach en un objeto
  
  const libros = {
    nombre: "Aprendiendo JavaScript",
    autor: "Carlos Azaustre",
    editorial: "javascript.es",
    numPaginas: "99",
    precio: "100",
  }
  
  const props = Object.getOwnPropertyNames(libros);
  props.forEach(name => {
    let valor = Object.getOwnPropertyDescriptor(libros, name).value
    console.log(`La propiedad ${name} contiene: ${libros[name]} `)
  })
  
  // for in
  
  for(let prop in libros){
    console.log(`La propiedad ${prop} contiene : ${libros[prop]} `);
  }