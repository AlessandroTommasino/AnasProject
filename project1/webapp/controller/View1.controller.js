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

        let props_to_remove = ["__metadata", "ExternalNumber", "StartPoint", "EndPoint", "ClassNumber", "LinearLength", "LinearUnit", "atfor"]
        let props_to_remove_num = ["__metadata"]
        return Controller.extend("project1.controller.View1", {
            onInit: function () {
                this.getRouter().getRoute("Step_2").attachPatternMatched(this._onObjectMatched, this);
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
            onSave: function (oEvent) {
                let ModelloSalva = this.getView().getModel("lagpModel").oData
                let sedetolinchar = []
                let sedetolinnum = []
                let chartochar = []
                let chartonum = []
                ModelloSalva.map((item) => {
                    let characteristic_names = Object.keys(item).filter(p => !props_to_remove.some(ptr => ptr === p))
                    characteristic_names = characteristic_names.filter(p => p.indexOf("ValueChar")<0)
                    for (const c_name of characteristic_names) {
                                let OEntry = {
                                    StartPoint: item.StartPoint,
                                    EndPoint: item.EndPoint,
                                    LinearLength: item.LinearLength,
                                    LinearUnit: item.LinearUnit,
                                    ExternalNumber: item.ExternalNumber,
                                    Charact: c_name,
                                    CharactDescr: item[c_name],
                                    ValueChar: item[c_name+"ValueChar"],
                                    ValueCharLong: item[c_name+"ValueChar"],
                                    ValueNeutral: item[c_name+"ValueChar"],
                                    ValueNeutralLong: item[c_name+"ValueChar"],
                                    atfor: item[c_name+"atfor"],
                                }
                                let sedetolinnum_oentry = {
                                    ExternalNumber : item.ExternalNumber,
                                    Charact :  c_name,
                                    ValueFrom :  item[c_name+"ValueChar"],  //Da cambiare
                                    ValueTo : item.ValueTo,
                                    ValueRelation : item.ValueRelation,
                                    UnitFrom : item.UnitFrom,
                                    UnitTo : item.UnitTo,
                                    UnitFromIso : item.UnitFromIso,
                                    UnitToIso : item.UnitToIso,
                                    CharactDescr : item[c_name],
                                    Counter : item.Counter,
                                    StartPoint: item.StartPoint,       
                                    EndPoint: item.EndPoint,            
                                    LinearLength : item.LinearLength,            
                                    LinearUnit : item.LinearUnit,
                                    LinearUnitIso :item.LinearUnitIso,
                                    ValueChar : item.ValueChar,
                                    ValueRelation : "1",
                                    atfor: item[c_name+"atfor"]
                                }
                                let chartochar_oentry = {
                                    ExternalNumber : item.ExternalNumber,
                                    ClassType : item.ClassType,
                                    ClassNumber : item.ClassNumber,
                                    Charact : c_name,
                                    ValueChar : item[c_name+"ValueChar"],
                                    ValueNeutral : item[c_name+"ValueChar"],
                                    CharactDescr : item[c_name],
                                    ValueCharLong : item[c_name+"ValueChar"],
                                    ValueNeutralLong : item[c_name+"ValueChar"],
                                    atfor : item[c_name+"atfor"],
                                }
                                let chartonum_oentry = {
                                    ExternalNumber : item.ExternalNumber,
                                    ClassType : item.ClassType,
                                    ClassNumber : item.ClassNumber,
                                    Charact : c_name,
                                    ValueFrom : item[c_name+"ValueChar"],
                                    CharactDescr : item[c_name],
                                    atfor :  item[c_name+"atfor"],
                                    ValueRelation : "1",
                                    ValueChar : item[c_name+"ValueChar"],
                                    }
                                if (item[c_name+"atfor"] == "CHAR") {
                                    sedetolinchar.push(OEntry)
                                    chartochar.push(chartochar_oentry)
                                } else if (item[c_name+"atfor"] == "NUM" || item[c_name+"atfor"] == "DATE") {
                                    sedetolinnum.push(sedetolinnum_oentry)
                                    chartonum.push(chartonum_oentry)
                                }   
                                let DataGeneral = {
                                    "__metadata" : {

                                        "type" : "ZCREA_ST_SRV.DataGeneral"
              
                                      },
              
                                      "Authgrp" : "",
              
                                      "Objecttype" : "", // Eqart - Tipo oggetto
              
                                      "Inventory" : "",
              
                                      "ObjSize" : "",
              
                                      "ObjWeight" : " ",
              
                                      "UnitOfWt" : "",
              
                                      "UnitIso" : "",
              
                                      "Acqdate" : "",
              
                                      "Acquisval" : "",
              
                                      "Currency" : "",
              
                                      "CurrIso" : "",
              
                                      "Manfacture" : "",
              
                                      "Mancountry" : "",
              
                                      "CountrIso" : "",
              
                                      "Manserno" : "",
              
                                      "Manmodel" : "",
              
                                      "Constyear" : "",
              
                                      "Constmonth" : "",
              
                                      "StartFrom" : "",
              
                                      "Planplant" : "",
              
                                      "Consttype" : "",
              
                                      "Manparno" : "",
              
                                      "Plangroup" : "",
              
                                      "Catprofile" : "",
              
                                      "WorkCtr" : "",
              
                                      "Descript" : "", // Descrizione opera / strada
              
                                      "Abcindic" : "",
              
                                      "Sortfield" : "",
              
                                      "Maintplant" : "",
              
                                      "Maintloc" : "",
              
                                      "Maintroom" : "",
              
                                      "Plsectn" : "",
              
                                      "PpWkctr" : "",
              
                                      "BusArea" : "",
              
                                      "Costcenter" : "",
              
                                      "WbsElem" : "",
              
                                      "CompCode" : "",
              
                                      "AssetNo" : "",
              
                                      "SubNumber" : "",
              
                                      "Standorder" : "",
              
                                      "Settlorder" : "",
              
                                      "SalesOrg" : "",
              
                                      "DistrChan" : "",
              
                                      "Division" : "",
              
                                      "SalesOff" : "",
              
                                      "SalesGrp" : "",
              
                                      "ReadCrdat" : "",
              
                                      "ReadCrnam" : "",
              
                                      "ReadChdat" : "",
              
                                      "ReadChnam" : "",
              
                                      "ReadAdrnr" : "",
              
                                      "ConsttypeExternal" : "",
              
                                      "ConsttypeGuid" : "",
              
                                      "ConsttypeVersion" : "",
              
                                      "ReadObjnr" : "",
              
                                      "ShiftReportType" : "",
              
                                      "ShiftNoteNotificationType" : "",
              
                                      "StartPoint" : "", // Punto iniziale
              
                                      "EndPoint" : "", // Punto finale
              
                                      "LinearLength" : "",
              
                                      "LinearUnit" : "", // Unità di misura
              
                                      "FirstOffsetTypeCode" : "",
              
                                      "FirstOffsetValue" : "",
              
                                      "FirstOffsetUnit" : "",
              
                                      "SecondOffsetTypeCode" : "",
              
                                      "SecondOffsetValue" : "",
              
                                      "SecondOffsetUnit" : "",
              
                                      "SecondOffsetUnitIso" : "",
              
                                      "LinearUnitIso" : "",
              
                                      "FirstOffsetUnitIso" : "",
              
                                      "LinearReferencePattern" : "", // Modello Riferimento Lineare
              
                                      "MarkerStartPoint" : "",
              
                                      "MarkerDistanceStartPoint" : "",
              
                                      "MarkerEndPoint" : "",
              
                                      "MarkerDistanceEndPoint" : "",
              
                                      "MarkerDistanceUnit" : "",
              
                                      "MarkerDistanceUnitIso" : "",
              
                                      "ConsttypeLong" : "",
              
                                      "Zzlatitude_start" : "", // Latitudine iniziale
              
                                      "Zzlatitude_end" : "", // Latitudine finale
              
                                      "Zzlongitude_start" : "", // Longitudine iniziale
              
                                      "Zzlongitude_end" : "", // Longitudine finale
              
                                      "Zziflot" : "",
              
                                      "Zziflotdescr" : "",
              
                                      "Zzstradeint" : "",
              
                                      "Zzstradeext" : "",
              
                                      "Zzsoaweext" : "",
              
                                      "Zzns" : "",
              
                                      "Zznsint" : "",
              
                                      "Zzsoaweold" : "",
              
                                      "Zznprotocods" : "",
              
                                      "Zzdataods" : "",
              
                                      "Zzkm" : "",
              
                                      "Zzkmda" : "",
              
                                      "Zzkma" : "",
              
                                      "Zzestesa" : "",
              
                                      "testo" : "", // Note
              
                                      "tipostrada" : "", // Tipo strada
              
                                      "codicesubstrada" : "", // Codice sub strada
              
                                      "numerostrada" : "", // Numero strada
              
                                      "suffisso" : "", // Suffisso strada
              
                                      "livello": "", // Livello opera
              
                                      "operazione": "",
              
                                      "Zprefcodop": "", // Prefisso codice opera
              
                                      "Zprefcodpop": "",
              
                                      "Zprefcodele": "",
              
                                      "statoutente": "", // Stato utente
              
                                      "statosistema": "" // Stato sistema
                                    } 
                    }
                })
                let that = this;
                let oModel = this.getView().getModel()
                oModel.read("/sedeSet(" + "'"+ sedetolinchar[0]?.ExternalNumber + "'" + ")", {
                    urlParameters: {
                        "$expand": "sedetochar,sedetolin,StartEndPointSet,sedetochar/chartochar,sedetochar/chartocurr,sedetochar/chartonum,sedetolin/sedetolinchar,sedetolin/sedetolincurr,sedetolin/sedetolinnum,StartEndPointSet/CharStartEndPointValueSet",
                    },
                    method: "GET",
                    success: function (oData) {
                        var msg = 'Operazione Riuscita!';
                        // create JSON model
                        var oODataJSONModel = new sap.ui.model.json.JSONModel(oData);
                        that.getView().setModel(oODataJSONModel, "ModelloSalvaOData");
                    }})
                    
                   let ModelloCreate = that.getView().getModel("ModelloSalvaOData").oData;
                    ModelloCreate.sedetolin.results[0].sedetolinchar = sedetolinchar
                    ModelloCreate.sedetolin.results[0].sedetolinnum = sedetolinnum
                    ModelloCreate.sedetochar.results[0].chartonum = chartonum
                    ModelloCreate.sedetochar.results[0].chartochar = chartochar
                    oModel.create("/sedeSet",{
                        DataGeneral: ModelloCreate.DataGeneral,
                        DataGeneralX: ModelloCreate.DataGeneralX,
                        DataSpecific: ModelloCreate.DataSpecific,
                        DataSpecificX: ModelloCreate.DataSpecificX,
                        ExternalNumber: ModelloCreate.ExternalNumber,
                        Return: ModelloCreate.Return,
                        StartEndPointSet: ModelloCreate.StartEndPointSet,
                        sedetochar: ModelloCreate.sedetochar,
                        sedetolin: ModelloCreate.sedetolin, 
                    }, 
                    {
                        success: function (oData, oRes) {
                            var msg2 = oRes.data.Return.Message;
                            MessageToast.show(msg2);
                        },
                        error: function (oErr) { console.log("error") }
                    }
                    )
                    
            },

            


            Step_2_Button: function () {
                this.getRouter().navTo("Step_2");
            },
            Aggiungi: function () {
                var oView = this.getView();

                if (!this._pValueHelpDialog) {
                    this._pValueHelpDialog = Fragment.load({
                        name: "project1.view.ModaleRow",
                        controller: this
                    }).then(function (oValueHelpDialog) {
                        oView.addDependent(oValueHelpDialog);
                        return oValueHelpDialog;
                    });
                }
                this._pValueHelpDialog.then(function (oValueHelpDialog) {
                    oValueHelpDialog.open();
                }.bind(this));
            },
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
                        var msg = 'Operazione in corso';
                        MessageToast.show(msg);
                        //Create Json Model for table
                        var oODataJSONModel = new sap.ui.model.json.JSONModel();
                        // create JSON model for label input 
                        var ModelloInputModel = new sap.ui.model.json.JSONModel();
                        ModelloInputModel.setData(oData);
                        that.getView().setModel(ModelloInputModel, "ModelloInput");
                        //-------------------------------------------------------------------------------------------------
                        var result = oData.StartEndPointSet;
                        var array = [];


                        _.forEach(result.results, function (o) {
                            array = array.concat(o.CharStartEndPointValueSet.results)
                        })


                        var colonneTab = [];
                        _.forEach(array, function (o) {
                            var nomeColonnaKey = o.Charact;
                            var nomeColonna = o.ValueChar;
                            var oggetto = {
                                "nomeColonnaKey": nomeColonnaKey
                            };
                            oggetto[o.Charact] = o.Charact;
                            oggetto[o.Charact + "CharactDescr"] = o.CharactDescr;
                            colonneTab.push(oggetto)
                        })


                        colonneTab = colonneTab.filter((value, index, self) =>
                            index === self.findIndex((t) => (
                                t.nomeColonnaKey === value.nomeColonnaKey)))
                        _.forEach(colonneTab, function (o) {
                            delete o.nomeColonnaKey
                        });



                        var arraycolonne = [];
                        _.forEach(array, function (o) {
                            var oggetto = {};
                            for (var prop in o) {
                                if (prop == "Charact") {
                                    oggetto[o[prop]] = o["CharactDescr"];
                                    var propr = o["Charact"] + "ValueChar";
                                    oggetto[propr] = o["ValueChar"];
                                    var propratfor = o["Charact"] + "atfor";
                                    oggetto[propratfor] = o["atfor"];
                                } else if (prop != "ValueChar" && prop !== "CharactDescr" && prop !== "atfor") {
                                    oggetto[prop] = o[prop];
                                }
                            }
                            arraycolonne.push(oggetto)
                        })


                        //Tabella Dinamica


                        var oTable = that.getView().byId("TabellaPrincipale")

                        var TestColonne = [
                        ]
                        for (var i = 0; i < colonneTab.length; i++) {
                            var obj = colonneTab[i];
                            for (var prop in obj) {
                                if (prop.indexOf("Charact") > 0) {
                                    var test = obj[prop]
                                }
                            }
                            TestColonne.push(test)
                        }



                        //creo intestazioni colonne


                        for (var i = 0; i < TestColonne.length; i++) {
                            var oColumn = new sap.m.Column("col" + i, {
                                width: "auto",
                                header: new sap.m.Label({
                                    text: TestColonne[i],

                                }),

                            });
                            oTable.addColumn(oColumn);
                        }


                        var array2 = array.filter((value, index, self) =>
                            index === self.findIndex((t) => (
                                t.EndPoint === value.EndPoint && t.StartPoint === value.StartPoint
                            )));

                        var array3 = []
                        _.forEach(array2, function (o) {
                            var founded = _.filter(arraycolonne, function (s) { return o.EndPoint === s.EndPoint && o.StartPoint === s.StartPoint })
                            var reduced = founded.reduce(function (result, current) {
                                return Object.assign(result, current);
                            }, {});
                            array3.push(reduced)
                        })

                        oODataJSONModel.setSizeLimit(array3.length + 10);
                        oODataJSONModel.setData(array3);
                        that.getView().setModel(oODataJSONModel, "lagpModel");



                        //aggiungere le celle ciclo tutti gli items e aggiungo le celle in base alle chiavi


                        var items = oTable.getAggregation("items");
                        _.forEach(items, function (o) {
                            for (var i = 0; i < colonneTab.length; i++) {
                                var colonna = colonneTab[i];
                                for (var prop in colonna) {
                                    if (prop.indexOf("Charact") < 0) {
                                        var cell = new sap.m.Input({
                                            value: '{lagpModel>' + prop + 'ValueChar}', submit: function (oEvent) {
                                                that.onSubmitChange(oEvent)
                                            }
                                        });
                                        o.addCell(cell)
                                    }
                                }


                            }


                        })
                    },

                    error: function (e) {
                        var msg = 'Operazione non Riuscita!';
                        MessageToast.show(msg);
                    },
                });
            },


            onSubmitChange: function (oEvent) {
                var source = oEvent.getSource();
                var mioOggetto = source.getBindingContext("lagpModel").getObject();
                //mi cerco tutti gli oggetti con StartPoint e EndPoint
                var founded = _.filter("miaTabella", function (o) {
                    if (o.StartPoint === mioOggetto.StartPoint && o.EndPoint === mioOggetto.EndPoint) {
                        return o;
                    }
                });

                _.forEach(founded, function (o) {
                    let entitySet = o.CharStartEndPointValueSet.results;
                    // console.log(o)

                    _.forEach(entitySet, function (z) {
                        for (var prop in miooggetto) {
                            if (prop.startsWith("Z_T_")) {
                                var miaKey = prop.substr(0, prop.indexOf("ValueChar"));

                                // console.log("z ",z)
                                if (z.Charact === miaKey) {
                                    // console.log(z[miaKey])
                                    z.ValueChar = miooggetto[prop];
                                }
                            }
                        }
                    })
                })



            },




        });
    });
