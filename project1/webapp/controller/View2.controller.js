sap.ui.define([
    'sap/m/MessageToast',
    'sap/ui/core/Fragment',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'sap/ui/model/json/JSONModel',
    "sap/ui/core/syncStyleClass",
    "sap/ui/model/Sorter"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (MessageToast, Fragment, Controller, Filter, FilterOperator, JSONModel, syncStyleClass, Sorter) {
        "use strict";

        let props_to_remove = ["__metadata", "ExternalNumber", "StartPoint", "EndPoint", "ClassNumber", "LinearLength", "LinearUnit"]
        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                this.getRouter().getRoute("Step_3").attachPatternMatched(this._onObjectMatched, this);
                this.tempArray = []


            },
            _onObjectMatched: function (oEvent) {
                this.readData()
            },
            getRouter: function () {
                return this.getOwnerComponent().getRouter();
            },
            Step_3: function () {
                this.getRouter().navTo("Step_3");
            },
            
            // onSave: function (oEvent) {
            //     let ModelloSalva = this.getView().getModel("Modello1")
            //     let chartochar = []
            //     let chartonum = []
            //     ModelloSalva.map((item) => {
            //         for (ModelloSalva == "ValueTo" && ModelloSalva == "CharactDescr") {
                        
            //         }
                   

            //     })
            //     let that = this;
            //     let oModel = this.getView().getModel()
            //     oModel.read("/sedeSet(" + "'"+ sedetolinchar[0]?.ExternalNumber + "'" + ")", {
            //         urlParameters: {
            //             "$expand": "sedetochar,sedetolin,StartEndPointSet,sedetochar/chartochar,sedetochar/chartocurr,sedetochar/chartonum,sedetolin/sedetolinchar,sedetolin/sedetolincurr,sedetolin/sedetolinnum,StartEndPointSet/CharStartEndPointValueSet",
            //         },
            //         method: "GET",
            //         success: function (oData) {
            //             var msg = 'Operazione Riuscita!';
            //             MessageToast.show(msg);
            //             // create JSON model
            //             var oODataJSONModel = new sap.ui.model.json.JSONModel(oData);
            //             that.getView().setModel(oODataJSONModel, "ModelloSalvaOData");
                         

                         
            //         }})
                    
            //        let ModelloCreate = that.getView().getModel("ModelloSalvaOData").oData;
            //         ModelloCreate.sedetolin.results[0].sedetolinchar = sedetolinchar

            //         oModel.create("/sedeSet",{
            //             DataGeneral: ModelloCreate.DataGeneral,
            //             DataGeneralX: ModelloCreate.DataGeneralX,
            //             DataSpecific: ModelloCreate.DataSpecific,
            //             DataSpecificX: ModelloCreate.DataSpecificX,
            //             ExternalNumber: ModelloCreate.ExternalNumber,
            //             Return: ModelloCreate.Return,
            //             StartEndPointSet: ModelloCreate.StartEndPointSet,
            //             sedetochar: ModelloCreate.sedetochar,
            //             sedetolin: ModelloCreate.sedetolin, 
            //         }, 
            //         {
    
            //             success: function (oData, oRes) {
            //                 var msg2 = 'Modificato!';
            //                 MessageToast.show(msg2);
            //             },
            //             error: function (oErr) { console.log("error") }
            //         }
            //         )
                    
            // },







            readData: function (oEvent) {
                var oModel = this.getView().getModel();
                var that = this;
                var ExternalNumber = "'TEST_STE'"
                oModel.read("/sedeSet(" + ExternalNumber + ")", {
                    urlParameters: {
                        "$expand": "sedetochar,sedetolin,StartEndPointSet,sedetochar/chartochar,sedetochar/chartocurr,sedetochar/chartonum,sedetolin/sedetolinchar,sedetolin/sedetolincurr,sedetolin/sedetolinnum,StartEndPointSet/CharStartEndPointValueSet",
                    },
                    method: "GET",
                    success: function (oData) {
                        var msg = 'Operazione Riuscita!';
                        MessageToast.show(msg);
                        // create JSON model
                        var ModelloLoop = []
                        var oODataJSONModel = new sap.ui.model.json.JSONModel(oData.sedetochar.results[0].chartochar.results);
                        for (var i = 0; i < oData.sedetochar.results.length ; i++) {
                            
                           
                              for (let a = 0; a < oData.sedetochar.results[i].chartochar.results.length ; a++) {
                            
                              
                                  ModelloLoop.push(oData.sedetochar.results[i].chartochar.results[a])
                            }
                            for (let a = 0; a < oData.sedetochar.results[i].chartonum.results.length ; a++) {
                            
                                
                                  ModelloLoop.push(oData.sedetochar.results[i].chartonum.results[a])
                            }
                        }
                        var oModel = new JSONModel(ModelloLoop);
                        that.getView().setModel(oModel,"Modello1")

                    },
                    
                    error: function (e) {
                        var msg = 'Operazione non Riuscita!';
                        MessageToast.show(msg);
                    },
                });
            },

            // array = that.getView().getModel("Modello1").getData()
            // array.filter(function(o){ return o.ValueChar != undefined})
            // array.filter(function(o){ return o.ValueFrom != undefined})





        });
    });
