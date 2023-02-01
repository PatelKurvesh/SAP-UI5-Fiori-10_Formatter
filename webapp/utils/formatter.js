sap.ui.define([], 

	function() {
		return {
		
		mackItUpperCase : function(inpVal){
			if(inpVal){
				return inpVal.toUpperCase();
			}
		},
		// This function use for double binding
		total : function(val,mrk){
			return val + ' ' + '/' + ' ' + mrk;
		}
	};
	
});