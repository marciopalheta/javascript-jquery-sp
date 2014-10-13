function numberParaReal(numero){
	return "R$ "+numero.toFixed(2).replace(".", ",");
}

function realParaNumber(texto){
	return valor = parseFloat(texto.replace("R$", "").replace(" ", "").replace(",", "."));
}
