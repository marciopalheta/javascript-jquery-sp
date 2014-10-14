$("input[type=button]").click(function(event){
	var inputSugestao = $("input[type=text]");
	var sugestao = inputSugestao.val();
	
	if(sugestao == ""){
		return false;
	}
	
	var nomeSugestao = $("<span>").addClass("sugestao").text(sugestao);
	var votos = $("<span>").addClass("votos").text("1 voto");
	
	$("<li>").append(nomeSugestao).append(votos).appendTo(".sugestoes").addClass("nova");
	inputSugestao.val("").focus();
});

$(".sugestoes").on("dblclick", "li", function(event){
	$(this).remove();
});

$("input[type=text]").keyup(function(event){
	if(event.which == 13){
		$("input[type=button]").click();
	}
});
