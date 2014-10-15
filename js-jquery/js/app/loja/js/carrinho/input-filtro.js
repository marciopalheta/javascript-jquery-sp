(function(){
	var inputs = document.querySelectorAll("#carrinho input");
	for(var i=0; i<inputs.length; i++){
		inputs[i].addEventListener("input", function(){
			var regex = /[^0-9]/;
			if(regex.test(this.value)){
				this.value = this.value.replace(regex, "");
			}
		});
	}
})();
