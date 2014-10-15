(function($){
	"use strict";
	$.fn.inputNumerico = function(){
		return this.on("input", function(event){
			var regex = /\D/g;
			if(regex.test(this.value)){
				this.value = this.value.replace(regex, "");
			}
		});
	};
})(jQuery);
