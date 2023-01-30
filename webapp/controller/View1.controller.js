sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"GithubSAP-UI5-Fiori-10_Formatter/utils/formatter"     //add dependancy
], function(Controller,formatter) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-10_Formatter.controller.View1", {
		
		formatter:formatter,               //Declare it globaly first fromatter is a key
		
			onInit : function() {
				var student = new sap.ui.model.json.JSONModel();
				
				student.loadData("model/studentData.json");
			
				this.getView().setModel(student);
			}

	});
});