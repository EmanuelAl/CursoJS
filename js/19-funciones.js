
//Funciones
//Una funcion es una agrupacion reutilizable de
// un conjunto de instrucciones

//asi se define la funcion
function calculadora(){
	//conjunto de instrucciones a ejecutar
	console.log("hola soy la calculadora");
	console.log("Si soy yo");

	return "valor que devuelve";
}

//invocar o llamar a la funcion
calculadora();
//tambien lo que devuelva la funcion se puede 
//asignar a una variable
var resultado = calculadora();
console.log(resultado);//mostrara "valor que devuelve"
