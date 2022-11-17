//EJERCICIOS 1

/*var n1=5;
var n2=4;
var n3=3;
var n4=8;

var suma=n1+n2;
var resta=n4-n3;
var resulSuma=suma;
var resulResta=resta;
var multi=resulSuma*resulResta;
var resultadoFinal=multi;

document.write('El resultado de la suma es: '+resulSuma+'<br>')
document.write('El resultado de la resta es: '+resulResta+'<br>')
document.write('El resultado final es: '+resultadoFinal+'<br>')*/

/*----------INCREMENTO-----------------------*/
var numero = 20;
numero++;
document.write("Incremento en 1: "+numero+"<BR>");

/*----------DECREMENTO-----------------------*/
var numero = 20;
numero--;
document.write("Incremento en 1: "+numero+"<BR>");

/*----------EXPONENCIACION-----------------------*/
var numeroExpo = 20;
exponenciacion=numeroExpo**2;
document.write("Exponenciacion: "+exponenciacion+"<BR>");
/*----------EXPONENCIACION-----------------------*/
let n1 = 5;
let n2 = 6;
let n3 = 3;

resultados = ((n1*n2)-(n2/n3))**2;
document.write("Resultado operacion combinada: "+resultados+"<BR>");

/*----------BOLEANS-----------------------*/
let x = 20;
let y = 20;
let z = 30;
document.write("X es igual a Y: "+(x==y)+" y Y es igual a Z: "+(y==z)+"<BR>");

/*----------ARRAY-----------------------*/
var arrayDe12 = [1,2,5,6,8,7,4,2,6,9,11,12];
document.write("Array: "+arrayDe12+"<br>");

/*----------FUNCIONES-----------------------*/

function suma(num1,num2) {
    return num1+num2;    
}
document.write("La suma de la funcion es: "+suma(50,30))