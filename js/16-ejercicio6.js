
/*
hacer programa
Que nos diga si un numero es par o impar.
requisitos
1.Ventana prompt
2.Si no es valido que nos pida de nuevo el numero
*/

var number = parseInt(prompt("Ingrese un numero",0));

while(isNaN(number)){
	number = parseInt(prompt("Ingrese un numero",0));
}

if(number%2 == 0){
	alert("Es un numero par");
}else{
	alert("Es un numero impar");
}