
//Array o arreglos o matrices , son sinonimos
//los array tienen indices y empiezan en cero
//coleccion de tipos de datos agrupados dentro de una matriz en una variable
var nombre = "Pepe robles";
var nombres = ["Pepe robles", "Juan Lopez","Manolo Garcia", "Jose Martin", 52, true];
//                 0        ,      1       ,       2       ,    3      

var lenguajes = new Array("PHP", "Js","Go", "Java","c#","C","Pascal");

console.log(nombres);//muestra todos los elementos del array
console.log(lenguajes);
console.log(nombres[2]);


console.log(nombres.length);//para ver la cantidad/longitud de elementos del array

/*
var elemento = parseInt(prompt("Que elemento del Array quieres?",0));

if(elemento >= nombres.length ){
	alert("Introduce el numero correcto menor que "+ nombres.length);

}else{
	alert("El usuario seleccionado es: "+nombres[elemento]);
}*/
//******************************************
//Para mostrar todos los elementos del array 
document.write(`<h1>Lenguajes de programacion del 2018</h1>`);
document.write(`<ul>`);

for(let i = 0; i < lenguajes.length; i ++){
	document.write(`<li> ${lenguajes[i]}</li>`);
}
document.write(`</ul>`);

//******************************************
//Para mostrar todos los elementos del array usando forEach que recibe una funcion de callback
lenguajes.forEach((elemento, indice, array)=>{//el 2do y 3ro parametros son opciones
	//el 1ro parametro se crea para que al recorrer el array tome el valor de cada iteracion
	console.log(array);
	document.write(`<li> ${indice} ${elemento}</li>`);
});//conclusion el forEach nos itera/recorre todo el array es mas facil que usar un for

