function obterNumerosDaString(frase){
	var padrao = /\d+/g;
	return frase.match(padrao); 
}

function soma(frase){
	var numeros = obterNumerosDaString(frase);
	var soma = 0;
	for(var i=0; i<numeros.length; i++){
		soma+=parseInt(numeros[i]);
	}
	console.log("numeros: "+numeros);
	console.log("soma: "+soma);
	return soma;
}
