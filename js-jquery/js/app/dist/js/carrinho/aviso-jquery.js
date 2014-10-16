$("<button>").attr("id", "botaoAviso")
	.text("Esconder")
	.prependTo("#principal")
	.click(function(event){
		var div = $(this).next();
		div.toggle();
		
		if(div.is(":visible")){
			$(this).text("Esconder");
		}else{
			$(this).text("Avisos");
		}
	});
