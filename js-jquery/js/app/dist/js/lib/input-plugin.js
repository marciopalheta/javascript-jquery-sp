(function($){
	"use strict";
	$.fn.inputNumerico = function(selector){
		return this.on("input", selector, function(event){
			var regex = /\D/g;
			if(regex.test(this.value)){
				this.value = this.value.replace(regex, "");
				$(this).trigger('input');
			}
		});
	};
})(jQuery);
