function Sacola(){
	"use strict";
	var total = 0;
	
	this.obterTotal = function(){
		return total;
	};
	
	this.incrementaTotal = function(){
		total ++;
	};
}
