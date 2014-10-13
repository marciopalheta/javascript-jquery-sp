var formatado = numberParaReal(9.9);
var numero = realParaNumber("R$ 120,35");

if (formatado == "R$ 9,90"){
	console.log(formatado+" é o valor esperado");
}else{
	console.log(formatado+" NÃO é o valor esperado");
}
console.log(numero);
var frase = "Quanto é 10 + 20? ";
var soma = soma(frase);
console.log(frase + soma);

var ancora = document.querySelector("#a1");
ancora.addEventListener("click", function(event){
	alert("Rolou o click - "+this.text);
	event.preventDefault;
});
