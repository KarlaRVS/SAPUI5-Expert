//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],

    /**
     * @param{typeof sap.ui.core.mvc.Controller} Controller
     * @param{typeof sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast) {
        return Controller.extend("dtt.SAPGUI5.controller.App", {
            onInit:function(){
               //var i18nModel = new ResourceModel({bundleName:"dtt.SAPUI5.i18n.i18n" });

               //this.getView().setModel(i18nModel,"i18n");
               //this.getView().setModel(Models.createRecipient()); 
              
            },
            onShowHello: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMSG = oBundle.getText("helloMsg",[sRecipient]);
                MessageToast.show("helloMsg");
            }
        }
        );
    });