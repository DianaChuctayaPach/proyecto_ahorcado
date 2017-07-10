//++++++++++++++++++++EJERCICIO 2+++++++++++++++++++++++++
function potencia (base, exponente){
    var  potencia;
  potencia=1;
  while(exponente>0){
  potencia = potencia*base;
  exponente--;
  }
  document.write('La Potencia es: ' + potencia);

}
//potencia(2,3);
//+++++++++++++ EJERCICIO 4+++++++++++++++++++
function NumeroLetras (frase){
  //var frase = "El mundo es tan cruel";
var vacio = frase.split (" ");

console.log("La frase tiene " + vacio.length + " caracteres.")

}
//NumeroLetras("El mundo es tan cruel")
//+++++++++++++++++++++++++EJERCICIO 6++++++++++++++++++++++++++++++++++++++++
function Vocales (f1 ){
      //f1 = "abcdefghij"
    if (a == a )
      console.log (f1)
}
//Vocales ("a")           --------------------no funciona -------------------
//+++++++++++++++++++++EJERCICIO 9 ++++++++++++++++++++++++++++++++++++++++++
function Reverso (frase){

  var x = frase.length;
  var cadenaInvertida = "";

  while (x>=0) {
    cadenaInvertida = cadenaInvertida + frase.charAt(x);
    x--;
  }
  console.log (cadenaInvertida);
}

    Reverso ('roma');
