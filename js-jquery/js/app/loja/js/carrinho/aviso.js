var aviso = document.querySelector(".aviso");
//var botao = document.querySelector("#botaoAviso");
var botao = document.createElement("button");
botao.id = "botaoAviso";
botao.textContent = "Esconder"
aviso.parentNode.insertBefore(botao, aviso);

botao.addEventListener("click", function(){
	aviso.classList.toggle("invisivel");
	if(aviso.classList.contains("invisivel")){
		this.textContent = "Aviso";
	}else{
		this.textContent = "Esconder";
	}
});

