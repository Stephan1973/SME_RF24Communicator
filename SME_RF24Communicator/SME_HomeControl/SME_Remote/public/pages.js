var Pages = {
	"livingroom":{
		"ID" : 1,
		"Buttons" : {
			"ThunderstormAnim_Liv_Aqua" : {
				"Name" : "ThunderstormAnim_Liv_Aqua",
				"Payload" : {"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Thunderstorm,
					"source" : Nodes.Aquarium.Sources.Relay_06,
					"index" : Nodes.Aquarium.Index.Unused,
					"values" : function (Control){
							return pad ($("#" + Control).val(), 4);
						}
				}
			}
		},
		"Refresh_Controls" : {
			"Refresh_Liv" : {
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Init,
					"source" : Nodes.Livingroom_Media.Sources.Unused,
					"index" : Nodes.Livingroom_Media.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Livingroom_Media.Unused_Value;
					}
				}
			},
			"Temperatur_Liv_Aqua" : {
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Init,
					"source" : Nodes.Livingroom_Media.Sources.Unused,
					"index" : Nodes.Livingroom_Media.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Livingroom_Media.Unused_Value;
					}
				}
			},
			"PH_Liv_Aqua": {
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Init,
					"source" : Nodes.Livingroom_Media.Sources.Unused,
					"index" : Nodes.Livingroom_Media.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Livingroom_Media.Unused_Value;
					}
				}
			},
			"Temperatur_Liv_Room" : {
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Init,
					"source" : Nodes.Livingroom_Media.Sources.Unused,
					"index" : Nodes.Livingroom_Media.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Livingroom_Media.Unused_Value;
					}
				}
			},
			"Humidity_Liv_Room" : {
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Init,
					"source" : Nodes.Livingroom_Media.Sources.Unused,
					"index" : Nodes.Livingroom_Media.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Livingroom_Media.Unused_Value;
					}
				}
			}
		},
		"Color_Controls" : {
			"Color_Control_Liv_Aqua" : {
				"Color_Control" : "Color_Control_Liv_Aqua",
				"Sources" : {
					"1" : "LED_Strip_Aqua"
				},
				"Private_Function" : function(Color){
					Nodes.Aquarium.Colours.LED_Strip_Aqua = Color;
				},
				"Payload" : {
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Color_Control,
					"source" : Nodes.Aquarium.Sources.Relay_02,
					"index" : Nodes.Aquarium.Index.Init.Init_Main,
					"values" : function (Control){
							return Nodes.Aquarium.Unused_Value;
						}
				}
			},
			"Color_Control_Liv_Room" : {
				"Color_Control" : "Color_Control_Liv_Room",
				"Sources" : {
					"1" : "LED_Strip"
				},
				"Private_Function" : function(Color){
					Nodes.Livingroom_Master.Colours.LED_Strip = Color;
				},
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Color_Control,
					"source" : Nodes.Livingroom_Master.Sources.LED_Strip_Red,
					"index" : Nodes.Livingroom_Master.Index.Init.Init_Main,
					"values" : function (Control){
							return Nodes.Livingroom_Master.Unused_Value;
						}
				}
			}
		},
		"Color_DefaultButtons" :{
			"Color_DefaultButton_Liv_Aqua_01" :{
				"Source" : {
						"1" : "rgb(000,000,255)",
						"Node" : Nodes.Aquarium
				},
				"Color_Control" : "Color_Control_Liv_Aqua",
				"Payload" : {
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Color_Default,
					"source" : Nodes.Aquarium.Sources.Relay_02,
					"index" : Nodes.Aquarium.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Aquarium.Unused_Value;
					}
				}
			},
			"Color_DefaultButton_Liv_Aqua_White" : {
				"Source" : {
						"1" : "rgb(255,255,255)",
						"Node" : Nodes.Aquarium
				},
				"Color_Control" : "Color_Control_Liv_Aqua",
				"Payload" : {
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Color_Default,
					"source" : Nodes.Aquarium.Sources.Relay_02,
					"index" : Nodes.Aquarium.Index.Unused,
					"values" : function (Control){
						return Nodes.Aquarium.Unused_Value;
					}
				}
			},
			"Color_DefaultButton_Liv_Room_White" :{
				"Source" : {
						"1" : "rgb(255,255,255)",
						"Node" : Nodes.Livingroom_Master
				},
				"Color_Control" : "Color_Control_Liv_Room",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Color_Default,
					"source" : Nodes.Livingroom_Master.Sources.LED_Strip_Red,
					"index" : Nodes.Livingroom_Master.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Livingroom_Master.Unused_Value;
					}
				}
			},
			"Color_DefaultButton_Liv_Room_01" :{
				"Source" : {
						"1" : "rgb(255,050,000)",
						"Node" : Nodes.Livingroom_Master
				},
				"Color_Control" : "Color_Control_Liv_Room",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Color_Default,
					"source" : Nodes.Livingroom_Master.Sources.LED_Strip_Red,
					"index" : Nodes.Livingroom_Master.Index.Unused,
					"values" : function (Control){
						return Nodes.Livingroom_Master.Unused_Value;
					}
				}
			}
			
		},
		"ToggleButtons" : {
			"ToggleButton_Relay_Liv_Aqua_4" : {
				"Name" : "ToggleButton_Relay_Liv_Aqua_4",
				"Payload" : {
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Power_Control,
					"source" : Nodes.Aquarium.Sources.Relay_04,
					"index" : Nodes.Aquarium.Index.Unused,
					"values" : function (Control){
							return pad ($("#" + Control).val(), 4);
						}
				}
			},
			"ToggleButton_Relay_Liv_Aqua_5" : {
				"Name" : "ToggleButton_Relay_Liv_Aqua_5",
				"Payload" : {
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Power_Control,
					"source" : Nodes.Aquarium.Sources.Relay_05,
					"index" : Nodes.Aquarium.Index.Unused,
					"values" : function (Control){
							return pad ($("#" + Control).val(), 4);
						}
				}
			},
			"ToggleButton_Relay_Liv_Media_7" : {
				"Name" : "ToggleButton_Relay_Liv_Media_7",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Power_Control,
					"source" : Nodes.Livingroom_Media.Sources.Relay_07,
					"index" : Nodes.Livingroom_Media.Index.Unused,
					"values" : function (Control){
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"ToggleButton_Relay_Liv_Media_8" : {
				"Name" : "ToggleButton_Relay_Liv_Media_8",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Power_Control,
					"source" : Nodes.Livingroom_Media.Sources.Relay_08,
					"index" : Nodes.Livingroom_Media.Index.Unused,
					"values" : function (Control){
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"ToggleButton_Relay_Liv_Room_2" : {
				"Name" : "ToggleButton_Relay_Liv_Room_2",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Power_Control,
					"source" : Nodes.Livingroom_Master.Sources.Relay_02,
					"index" : Nodes.Livingroom_Master.Index.Unused,
					"values" : function (Control){
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"ToggleButton_NightLight_Liv_Aqua" : {
				"Name" : "ToggleButton_NightLight_Liv_Aqua",
				"Payload" : {
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.NightLight,
					"source" : Nodes.Aquarium.Sources.Unused,
					"index" : Nodes.Aquarium.Index.Unused,
					"values" : function (Control){
							return pad ($("#" + Control).val(), 4) + pad ($("#AniTriggerTime").val(),4)
						}
				}
			},
		}, 
		"Addicted_ToggleButtons" : {
			"Addicted_ToggleButton_Relay_Liv_Aqua_1" : {
				"Name" : "Addicted_ToggleButton_Relay_Liv_Aqua_1",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Liv_Aqua_1,Addicted_ToggleButton_Relay_Liv_Aqua_2,Addicted_ToggleButton_Relay_Liv_Aqua_3",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Aqua_1_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Power_Control,
					"source" : Nodes.Aquarium.Sources.Relay_01,
					"index" : Nodes.Aquarium.Index.Unused,
					"values" : function (Control){
							var arrAddicted_ToggleButton = Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"].split(",");
							Send_disabled = 1;
							if ($("#" + arrAddicted_ToggleButton[0]).val() == "0" && $("#" + arrAddicted_ToggleButton[1]).val() == "0" && $("#" + arrAddicted_ToggleButton[2]).val() == "0"){
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "0"){
									
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("0").flipswitch("refresh");
								}
							}else{
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "1"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("1").flipswitch("refresh");
								}
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"Addicted_ToggleButton_Relay_Liv_Aqua_2" : {
				"Name" : "Addicted_ToggleButton_Relay_Liv_Aqua_2",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Liv_Aqua_1,Addicted_ToggleButton_Relay_Liv_Aqua_2,Addicted_ToggleButton_Relay_Liv_Aqua_3",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Aqua_1_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Power_Control,
					"source" : Nodes.Aquarium.Sources.Relay_02,
					"index" : Nodes.Aquarium.Index.Unused,
					"values" : function (Control){
							var arrAddicted_ToggleButton = Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"].split(",");
							Send_disabled = 1;
							if ($("#" + arrAddicted_ToggleButton[0]).val() == "0" && $("#" + arrAddicted_ToggleButton[1]).val() == "0" && $("#" + arrAddicted_ToggleButton[2]).val() == "0"){
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "0"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("0").flipswitch("refresh");
								}
							}else{
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "1"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("1").flipswitch("refresh");
								}
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"Addicted_ToggleButton_Relay_Liv_Aqua_3" : {
				"Name" : "Addicted_ToggleButton_Relay_Liv_Aqua_3",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Liv_Aqua_1,Addicted_ToggleButton_Relay_Liv_Aqua_2,Addicted_ToggleButton_Relay_Liv_Aqua_3",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Aqua_1_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Power_Control,
					"source" : Nodes.Aquarium.Sources.Relay_03,
					"index" : Nodes.Aquarium.Index.Unused,
					"values" : function (Control){
							var arrAddicted_ToggleButton = Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"].split(",");
							Send_disabled = 1;
							if ($("#" + arrAddicted_ToggleButton[0]).val() == "0" && $("#" + arrAddicted_ToggleButton[1]).val() == "0" && $("#" + arrAddicted_ToggleButton[2]).val() == "0"){
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "0"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("0").flipswitch("refresh");
								}
							}else{
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "1"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("1").flipswitch("refresh");
								}
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"Addicted_ToggleButton_Relay_Liv_Media_1" : {
				"Name" : "Addicted_ToggleButton_Relay_Liv_Media_1",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Liv_Media_1,Addicted_ToggleButton_Relay_Liv_Media_2,Addicted_ToggleButton_Relay_Liv_Media_3",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Media_1_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Power_Control,
					"source" : Nodes.Livingroom_Media.Sources.Relay_01,
					"index" : Nodes.Livingroom_Media.Index.Unused,
					"values" : function (Control){
							var arrAddicted_ToggleButton = Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"].split(",");
							Send_disabled = 1;
							if ($("#" + arrAddicted_ToggleButton[0]).val() == "0" && $("#" + arrAddicted_ToggleButton[1]).val() == "0" && $("#" + arrAddicted_ToggleButton[2]).val() == "0"){
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "0"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("0").flipswitch("refresh");
								}
							}else{
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "1"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("1").flipswitch("refresh");
								}
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"Addicted_ToggleButton_Relay_Liv_Media_2" : {
				"Name" : "Addicted_ToggleButton_Relay_Liv_Media_2",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Liv_Media_1,Addicted_ToggleButton_Relay_Liv_Media_2,Addicted_ToggleButton_Relay_Liv_Media_3",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Media_1_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Power_Control,
					"source" : Nodes.Livingroom_Media.Sources.Relay_02,
					"index" : Nodes.Livingroom_Media.Index.Unused,
					"values" : function (Control){
							Send_disabled = 1;
							var arrAddicted_ToggleButton = Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"].split(",");
							if ($("#" + arrAddicted_ToggleButton[0]).val() == "0" && $("#" + arrAddicted_ToggleButton[1]).val() == "0" && $("#" + arrAddicted_ToggleButton[2]).val() == "0"){
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "0"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("0").flipswitch("refresh");
								}
							}else{
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "1"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("1").flipswitch("refresh");
								}
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"Addicted_ToggleButton_Relay_Liv_Media_3" : {
				"Name" : "Addicted_ToggleButton_Relay_Liv_Media_3",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Liv_Media_1,Addicted_ToggleButton_Relay_Liv_Media_2,Addicted_ToggleButton_Relay_Liv_Media_3",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Media_1_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Power_Control,
					"source" : Nodes.Livingroom_Media.Sources.Relay_03,
					"index" : Nodes.Livingroom_Media.Index.Unused,
					"values" : function (Control){
							var arrAddicted_ToggleButton = Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"].split(",");
							Send_disabled = 1;
							if ($("#" + arrAddicted_ToggleButton[0]).val() == "0" && $("#" + arrAddicted_ToggleButton[1]).val() == "0" && $("#" + arrAddicted_ToggleButton[2]).val() == "0"){
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "0"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("0").flipswitch("refresh");
								}
							}else{
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val() != "1"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val("1").flipswitch("refresh");
								}
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"Addicted_ToggleButton_Relay_Liv_Media_4_Fav" : {
				"Name" : "Addicted_ToggleButton_Relay_Liv_Media_4_Fav",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Liv_Media_5",
				"Reference_ToggleButtons" : "Addicted_ToggleButton_Relay_Liv_Media_4,Addicted_ToggleButton_Relay_Liv_Media_6,Addicted_ToggleButton_Relay_Liv_Media_5_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" :  Nodes.Livingroom_Media.Actions.Power_Control,
					"source" : Nodes.Livingroom_Media.Sources.Relay_40,
					"index" : Nodes.Livingroom_Media.Index.Unused,
					"values" : function (Control){
							var arrReference_ToggleButtons = Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"].split(",");
							Send_disabled = 1;
							$("#" + arrReference_ToggleButtons[0]).val($("#" + Control).val()).flipswitch("refresh");
							if ($("#" + Control).val() == "1"){
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val() == "1"){
									$("#" + arrReference_ToggleButtons[1]).val($("#" + Control).val()).flipswitch("refresh");
								}
							}else{
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val() == "0"){
									$("#" + arrReference_ToggleButtons[2]).val($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val()).flipswitch("refresh");
								}
								$("#" + arrReference_ToggleButtons[1]).val($("#" + Control).val()).flipswitch("refresh");
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"Addicted_ToggleButton_Relay_Liv_Media_4" : {
				"Name" : "Addicted_ToggleButton_Relay_Liv_Media_4",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Liv_Media_6",
				"Reference_ToggleButtons" : "Addicted_ToggleButton_Relay_Liv_Media_4_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" :  Nodes.Livingroom_Media.Actions.Power_Control,
					"source" : Nodes.Livingroom_Media.Sources.Relay_04,
					"index" : Nodes.Livingroom_Media.Index.Unused,
					"values" : function (Control){
							Send_disabled = 1;
							if ($("#" + Control).val() == $("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val()){
								$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val($("#" + Control).val()).flipswitch("refresh");
							}else{
								if ($("#" + Control).val() == "1"){
									$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val($("#" + Control).val()).flipswitch("refresh");
								}
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"Addicted_ToggleButton_Relay_Liv_Media_5_Fav" : {
				"Name" : "Addicted_ToggleButton_Relay_Liv_Media_5_Fav",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Liv_Media_4",
				"Reference_ToggleButtons" : "Addicted_ToggleButton_Relay_Liv_Media_5,Addicted_ToggleButton_Relay_Liv_Media_6,Addicted_ToggleButton_Relay_Liv_Media_4_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" :  Nodes.Livingroom_Media.Actions.Power_Control,
					"source" : Nodes.Livingroom_Media.Sources.Relay_50,
					"index" : Nodes.Livingroom_Media.Index.Unused,
					"values" : function (Control){
							var arrReference_ToggleButtons = Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"].split(",");
							Send_disabled = 1;
							$("#" + arrReference_ToggleButtons[0]).val($("#" + Control).val()).flipswitch("refresh");
							if ($("#" + Control).val() == "1"){
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val() == "1"){
									$("#" + arrReference_ToggleButtons[1]).val($("#" + Control).val()).flipswitch("refresh");
								}
							}else{
								if ($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val() == "0"){
									$("#" + arrReference_ToggleButtons[2]).val($("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val()).flipswitch("refresh");
								}
								$("#" + arrReference_ToggleButtons[1]).val($("#" + Control).val()).flipswitch("refresh");
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4)
						}
				}
			},
			"Addicted_ToggleButton_Relay_Liv_Media_5" : {
				"Name" : "Addicted_ToggleButton_Relay_Liv_Media_5",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Liv_Media_6",
				"Reference_ToggleButtons" : "Addicted_ToggleButton_Relay_Liv_Media_5_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" :  Nodes.Livingroom_Media.Actions.Power_Control,
					"source" : Nodes.Livingroom_Media.Sources.Relay_05,
					"index" : Nodes.Livingroom_Media.Index.Unused,
					"values" : function (Control){
						Send_disabled = 1;
						if ($("#" + Control).val() == $("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val()){
							$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val($("#" + Control).val()).flipswitch("refresh");
						}else{
							if ($("#" + Control).val() == "1"){
								$("#" + Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val($("#" + Control).val()).flipswitch("refresh");
							}
						}
						Send_disabled = 0;
						return pad ($("#" + Control).val(), 4)
					}
				}
			},
			"Addicted_ToggleButton_Relay_Liv_Media_6" : {
				"Name" : "Addicted_ToggleButton_Relay_Liv_Media_6",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Liv_Media_4,Addicted_ToggleButton_Relay_Liv_Media_5",
				"Reference_ToggleButtons" : "Addicted_ToggleButton_Relay_Liv_Media_4_Fav,Addicted_ToggleButton_Relay_Liv_Media_5_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" :  Nodes.Livingroom_Media.Actions.Power_Control,
					"source" : Nodes.Livingroom_Media.Sources.Relay_06,
					"index" : Nodes.Livingroom_Media.Index.Unused,
					"values" : function (Control){
						var arrAddicted_ToggleButton = Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"].split(",");
						var arrReference_ToggleButtons = Pages["livingroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"].split(",");
						Send_disabled = 1;
						if ($("#" + Control).val() == "0"){
							if ($("#" + arrAddicted_ToggleButton[0]).val() == "0"){
								$("#" + arrReference_ToggleButtons[0]).val($("#" + arrAddicted_ToggleButton[0]).val()).flipswitch("refresh");
							}
							if ($("#" + arrAddicted_ToggleButton[1]).val() == "0"){
								$("#" + arrReference_ToggleButtons[1]).val($("#" + arrAddicted_ToggleButton[1]).val()).flipswitch("refresh");
							}
						}else{
							if ($("#" + arrAddicted_ToggleButton[0]).val() == "0"){
								$("#" + arrReference_ToggleButtons[0]).val($("#" + Control).val()).flipswitch("refresh");
							}
							if ($("#" + arrAddicted_ToggleButton[1]).val() == "0"){
								$("#" + arrReference_ToggleButtons[1]).val($("#" + Control).val()).flipswitch("refresh");
							}
						}
						Send_disabled = 0;
						return pad ($("#" + Control).val(), 4)
					}
				}
			}
		},
		"Combined_ToggleButtons" : {
			"Combined_ToggleButton_Relay_Liv_Aqua_1_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Liv_Aqua_1_Fav",
				"Reference_ToggleButtons" : "Addicted_ToggleButton_Relay_Liv_Aqua_1,Addicted_ToggleButton_Relay_Liv_Aqua_2,Addicted_ToggleButton_Relay_Liv_Aqua_3",
				"Payload" : {
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Power_Control,
					"source" : Nodes.Aquarium.Sources.Relay_10,
					"index" : Nodes.Aquarium.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
					}
				}
			},
			"Combined_ToggleButton_Relay_Liv_Media_1_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Liv_Media_1_Fav",
				"Reference_ToggleButtons" : "Addicted_ToggleButton_Relay_Liv_Media_1,Addicted_ToggleButton_Relay_Liv_Media_2,Addicted_ToggleButton_Relay_Liv_Media_3",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Power_Control,
					"source" : Nodes.Livingroom_Media.Sources.Relay_10,
					"index" : Nodes.Livingroom_Media.Index.Unused,
					"values" : function (Control){
							return pad ($("#" + Control).val(), 4);
					}
				}
			},
			"Combined_ToggleButton_Relay_Liv_Room_1_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Liv_Room_1_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Room_1",
				"Payload" : {
				"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Power_Control,
					"source" : Nodes.Livingroom_Master.Sources.Relay_01,
					"index" : Nodes.Livingroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Liv_Room_1" : {
				"Name" : "Combined_ToggleButton_Relay_Liv_Room_1",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Room_1_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Power_Control,
					"source" : Nodes.Livingroom_Master.Sources.Relay_01,
					"index" : Nodes.Livingroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Liv_Room_4_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Liv_Room_4_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Room_4",
				"Payload" : {
				"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Power_Control,
					"source" : Nodes.Livingroom_Master.Sources.Relay_04,
					"index" : Nodes.Livingroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Liv_Room_4" : {
				"Name" : "Combined_ToggleButton_Relay_Liv_Room_4",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Room_4_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Power_Control,
					"source" : Nodes.Livingroom_Master.Sources.Relay_04,
					"index" : Nodes.Livingroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Liv_Room_3_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Liv_Room_3_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Room_3",
				"Payload" : {
				"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Power_Control,
					"source" : Nodes.Livingroom_Master.Sources.Relay_03,
					"index" : Nodes.Livingroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Liv_Room_3" : {
				"Name" : "Combined_ToggleButton_Relay_Liv_Room_3",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Liv_Room_3_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Power_Control,
					"source" : Nodes.Livingroom_Master.Sources.Relay_03,
					"index" : Nodes.Livingroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			}
		},
		"Sliders" : {
			"Slider_Dim_LEDStipe_Liv_Aqua" : {
				"Name" : "Slider_Dim_LEDStipe_Liv_Aqua",
				"Payload" : {
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Dim_Control,
					"source" : Nodes.Aquarium.Sources.LED_Strip_Aquarium,
					"index" : Nodes.Aquarium.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Slider_Dim_LEDStipe_Liv_Room" : {
				"Name" : "Slider_Dim_LEDStipe_Liv_Room",
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Dim_Control,
					"source" : Nodes.Livingroom_Master.Sources.LED_Strip_Red,
					"index" : Nodes.Livingroom_Master.Index.Unused,
					"values" : function (Control){
						return pad($("#" + Control).val().toString(), 4)
					}
				}
			}
		},
		"Init" : {
			0 : {
				"Payload" : {
					"node_pipe" : Nodes.Livingroom_Media.Pipe,
					"action" : Nodes.Livingroom_Media.Actions.Init,
					"source" : Nodes.Livingroom_Media.Sources.Unused,
					"index" : Nodes.Livingroom_Media.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Livingroom_Media.Unused_Value;
					}							
				}
			},
			1 : {
				"Combined_ToggleButton_Relay_Liv_Media_1_Fav" : {
					"ControlType" : "Addicted_ToggleButton",
					"length" : 1,
					"Refresh_init" : false,
					"Private_Function" : function(data){
						Send_disabled = 1;
						if (data.substring(2,3) == "0" && data.substring(3,4) == "0" && data.substring(4,5) == "0"){
							$("#Combined_ToggleButton_Relay_Liv_Media_1_Fav").val("0").flipswitch("refresh");
						}else{
							$("#Combined_ToggleButton_Relay_Liv_Media_1_Fav").val("1").flipswitch("refresh");
						}
						Send_disabled = 0;
					}
				},
				"Addicted_ToggleButton_Relay_Liv_Media_4_Fav" : {
					"ControlType" : "Addicted_ToggleButton",
					"length" : 1,
					"Refresh_init" : false,
					"Private_Function" : function(data){
						Send_disabled = 1;
						if (data.substring(7,8) == "0"){
							if (data.substring(5,6) == "0"){
								$("#Addicted_ToggleButton_Relay_Liv_Media_4_Fav").val("0").flipswitch("refresh");
							}else{
								$("#Addicted_ToggleButton_Relay_Liv_Media_4_Fav").val("1").flipswitch("refresh");
							}
							if (data.substring(6,7) == "0"){
								$("#Addicted_ToggleButton_Relay_Liv_Media_5_Fav").val("0").flipswitch("refresh");
							}else{
								$("#Addicted_ToggleButton_Relay_Liv_Media_5_Fav").val("1").flipswitch("refresh");
							}
						}else{
							$("#Addicted_ToggleButton_Relay_Liv_Media_4_Fav").val("1").flipswitch("refresh");
							$("#Addicted_ToggleButton_Relay_Liv_Media_5_Fav").val("1").flipswitch("refresh");
						}
						Send_disabled = 0;
					}
				},
				"Addicted_ToggleButton_Relay_Liv_Media_1" : {
					"ControlType" : "ToggleButton",
					"length" : 1,
					"Refresh_init" : true,
					"Position" : "2,3",
					"Private_Function" : function(data){
						Send_disabled = 1;
						if (data.substring(2,3) == "0" && data.substring(3,4) == "0" && data.substring(4,5) == "0"){
							$("#Combined_ToggleButton_Relay_Liv_Media_1_Fav").val("0").flipswitch("refresh");
						}else{
							$("#Combined_ToggleButton_Relay_Liv_Media_1_Fav").val("1").flipswitch("refresh");
						}
						Send_disabled = 0;
					}
				},
				"Addicted_ToggleButton_Relay_Liv_Media_2" : {
					"ControlType" : "ToggleButton",
					"length" : 1,
					"Refresh_init" : true,
					"Position" : "3,4"
				},
				"Addicted_ToggleButton_Relay_Liv_Media_3" : {
					"ControlType" : "ToggleButton",
					"length" : 1,
					"Refresh_init" : true,
					"Position" : "4,5"
				},
				"Addicted_ToggleButton_Relay_Liv_Media_4" : {
					"ControlType" : "ToggleButton",
					"length" : 1,
					"Refresh_init" : true,
					"Position" : "5,6",
					"Private_Function" : function(data){
						Send_disabled = 1;
						if (data.substring(7,8) == "0"){
							if (data.substring(5,6) == "0"){
								$("#Addicted_ToggleButton_Relay_Liv_Media_4_Fav").val("0").flipswitch("refresh");
							}else{
								$("#Addicted_ToggleButton_Relay_Liv_Media_4_Fav").val("1").flipswitch("refresh");
							}
							if (data.substring(6,7) == "0"){
								$("#Addicted_ToggleButton_Relay_Liv_Media_5_Fav").val("0").flipswitch("refresh");
							}else{
								$("#Addicted_ToggleButton_Relay_Liv_Media_5_Fav").val("1").flipswitch("refresh");
							}
						}else{
							$("#Addicted_ToggleButton_Relay_Liv_Media_4_Fav").val("1").flipswitch("refresh");
							$("#Addicted_ToggleButton_Relay_Liv_Media_5_Fav").val("1").flipswitch("refresh");
						}
						Send_disabled = 0;
					}
				},
				"Addicted_ToggleButton_Relay_Liv_Media_5" : {
					"ControlType" : "ToggleButton",
					"length" : 1,
					"Refresh_init" : true,
					"Position" : "6,7"
				},
				"Addicted_ToggleButton_Relay_Liv_Media_6" : {
					"ControlType" : "ToggleButton",
					"length" : 1,
					"Refresh_init" : true,
					"Position" : "7,8"
				},
				"ToggleButton_Relay_Liv_Media_7" : {
					"ControlType" : "ToggleButton",
					"length" : 1,
					"Refresh_init" : true,
					"Position" : "8,9"
				},
				"ToggleButton_Relay_Liv_Media_8" : {
					"ControlType" : "ToggleButton",
					"length" : 1,
					"Refresh_init" : true,
					"Position" : "9,10"
				},
				"Payload" : {
					"node" : "Aquarium",
					"node_pipe" : Nodes.Aquarium.Pipe,
					"action" : Nodes.Aquarium.Actions.Init,
					"source" : Nodes.Aquarium.Sources.Unused,
					"index" : Nodes.Aquarium.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Aquarium.Unused_Value;
					}							
				}
			},
			2 : {
				"Combined_ToggleButton_Relay_Liv_Aqua_1_Fav" : {
					"ControlType" : "Addicted_ToggleButton",
					"length" : 1,
					"Refresh_init" : false,
					"Private_Function" : function(data){
						Send_disabled = 1;
						if (data.substring(2,3) == "0" && data.substring(3,4) == "0" && data.substring(4,5) == "0"){
							$("#Combined_ToggleButton_Relay_Liv_Aqua_1_Fav").val("0").flipswitch("refresh");
						}else{
							$("#Combined_ToggleButton_Relay_Liv_Aqua_1_Fav").val("1").flipswitch("refresh");
						}
						Send_disabled = 0;
					}
				},
				"Addicted_ToggleButton_Relay_Liv_Aqua_1" : {
					"ControlType" : "ToggleButton",
					"Position" : "2,3",
					"length" : 1,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						Send_disabled = 1;
						if (data.substring(2,3) == "0" && data.substring(3,4) == "0" && data.substring(4,5) == "0"){
							$("#Combined_ToggleButton_Relay_Liv_Aqua_1_Fav").val("0").flipswitch("refresh");
						}else{
							$("#Combined_ToggleButton_Relay_Liv_Aqua_1_Fav").val("1").flipswitch("refresh");
						}
						Send_disabled = 0;
					}
				},
				"Addicted_ToggleButton_Relay_Liv_Aqua_2" : {
					"ControlType" : "ToggleButton",
					"Position" : "3,4",
					"length" : 1,
					"Refresh_init" : true
				},
				"Addicted_ToggleButton_Relay_Liv_Aqua_3" : {
					"ControlType" : "ToggleButton",
					"Position" : "4,5",
					"length" : 1,
					"Refresh_init" : true
				},
				"ToggleButton_Relay_Liv_Aqua_4" : {
					"ControlType" : "ToggleButton",
					"Position" : "5,6",
					"length" : 1,
					"Refresh_init" : true
				},
				"ToggleButton_Relay_Liv_Aqua_5" : {
					"ControlType" : "ToggleButton",
					"Position" : "6,7",
					"length" : 1,
					"Refresh_init" : true
				},
				"Slider_Dim_LEDStipe_Liv_Aqua" : {
					"ControlType" : "Slider",
					"Position" : "7,11",
					"length" : 4,
					"Refresh_init" : true
				},
				"Temperatur_Liv_Aqua" : {
					"ControlType" : "Temperatur",
					"Text" : "Aquarium Temp. ",
					"Left_Position" : "11,13",
					"Right_Position" : "13,15",
					"length_left" : 2,
					"length_right" : 2,
					"Refresh_init" : true
				},
				"LED_Strip_Aqua" : {
					"ControlType" : "Color",
					"R_Position" : "15,18",
					"G_Position" : "18,21",
					"B_Position" : "21,24",
					"length_color" : 3,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						Send_disabled = 1;
						$("#Color_Control_Liv_Aqua").chromoselector("setColor", Nodes.Aquarium.Colours.LED_Strip_Aqua);
						Set_ControlsColor("livingroom", "Color_Controls", "Color_Control_Liv_Aqua", false, Nodes.Aquarium);
						Send_disabled = 0;
					},
					"Private_Refresh_Function" : function(){
						var colors = Nodes.Aquarium.Colours.LED_Strip_Aqua.substring(4,Nodes.Aquarium.Colours.LED_Strip_Aqua.length - 1).split(",");
						var refresh_Values = colors[0] + colors[1] + colors[2];
						return refresh_Values;
					}
					
				},
				"PH_Liv_Aqua" : {
					"ControlType" : "PH",
					"Text" : "Aquarium PH ",
					"length_left" : 2,
					"length_right" : 2,
					"Refresh_init" : true,
					"Left_Position" : function(data){
						var PH_First;
						if (data.substring(24,26) < 10){
							PH_First = data.substring(25,26);
						}else{
							PH_First = data.substring(24,26);
						}
						
						return PH_First;
					},
					"Right_Position" : "26,28",
				},
				"ToggleButton_NightLight_Liv_Aqua" : {
					"ControlType" : "ToggleButton",
					"Position" : "28,29",
					"length" : 1,
					"Refresh_init" : false,
					"Private_Function" : function(data){
						Send_disabled = 1;
						$("#AniTriggerTime").val(data.substring(29,33));
						Send_disabled = 0;
					}
				},
				"Payload" : {
					"node" : "Livingroom_Master",
					"node_pipe" : Nodes.Livingroom_Master.Pipe,
					"action" : Nodes.Livingroom_Master.Actions.Init,
					"source" : Nodes.Livingroom_Master.Sources.Unused,
					"index" : Nodes.Livingroom_Master.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Livingroom_Master.Unused_Value;
					}							
				}
			},
			3 : {
				"Combined_ToggleButton_Relay_Liv_Room_1_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "2,3",
					"length" : 1,
					"Refresh_init" : false
				},
				"Combined_ToggleButton_Relay_Liv_Room_1" : {
					"ControlType" : "ToggleButton",
					"Position" : "2,3",
					"length" : 1,
					"Refresh_init" : true
				},
				"ToggleButton_Relay_Liv_Room_2" : {
					"ControlType" : "ToggleButton",
					"Position" : "3,4",
					"length" : 1,
					"Refresh_init" : true
				},
				"Combined_ToggleButton_Relay_Liv_Room_3_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "4,5",
					"length" : 1,
					"Refresh_init" : false
				},
				"Combined_ToggleButton_Relay_Liv_Room_3" : {
					"ControlType" : "ToggleButton",
					"Position" : "4,5",
					"length" : 1,
					"Refresh_init" : true
				},
				"Combined_ToggleButton_Relay_Liv_Room_4_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "5,6",
					"length" : 1,
					"Refresh_init" : false
				},
				"Combined_ToggleButton_Relay_Liv_Room_4" : {
					"ControlType" : "ToggleButton",
					"Position" : "5,6",
					"length" : 1,
					"Refresh_init" : true
				},
				"Slider_Dim_LEDStipe_Liv_Room" : {
					"ControlType" : "Slider",
					"Position" : "6,10",
					"length" : 4,
					"Refresh_init" : true
				},
				"Temperatur_Liv_Room" : {
					"ControlType" : "Temperatur",
					"Text" : "Temperatur ",
					"Left_Position" : "10,12",
					"Right_Position" : "12,14",
					"length_left" : 2,
					"length_right" : 2,
					"Refresh_init" : true
				},
				"Humidity_Liv_Room" : {
					"ControlType" : "Humidity",
					"Text" : "Luftfeuchtigkeit ",
					"Left_Position" : "14,16",
					"Right_Position" : "16,18",
					"length_left" : 2,
					"length_right" : 2,
					"Refresh_init" : true
				},
				"LED_Strip" : {
					"ControlType" : "Color",
					"R_Position" : "18,21",
					"G_Position" : "21,24",
					"B_Position" : "24,27",
					"length_color" : 3,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						Send_disabled = 1;
						$("#Color_Control_Liv_Room").chromoselector("setColor", Nodes.Livingroom_Master.Colours.LED_Strip);
						Set_ControlsColor("livingroom", "Color_Controls", "Color_Control_Liv_Room", false, Nodes.Livingroom_Master);
						Send_disabled = 0;
					},
					"Private_Refresh_Function" : function(){
						var colors = Nodes.Livingroom_Master.Colours.LED_Strip.substring(4,Nodes.Livingroom_Master.Colours.LED_Strip.length - 1).split(",");
						var refresh_Values = colors[0] + colors[1] + colors[2];
						return refresh_Values;
					}
					
				},
				"Private_Function" : function(data){
					$("#Init_Liv").removeClass("ui-icon-alert").addClass("ui-icon-check");
					$("#Temperatur_Liv_Room").removeClass("ui-btn-active");
					$("#Humidity_Liv_Room").removeClass("ui-btn-active");
					$("#Temperatur_Liv_Aqua").removeClass("ui-btn-active");
					$("#PH_Liv_Aqua").removeClass("ui-btn-active");
				}
			}
		}
	},
	"bedroom":{
		"ToggleButtons" : {
			"ToggleButton_Relay_Bed_Bed_3" : {
				"Name" : "ToggleButton_Relay_Bed_Bed_3",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.Relay_03,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"ToggleButton_Relay_Bed_Bed_6" : {
				"Name" : "ToggleButton_Relay_Bed_Bed_6",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.Relay_06,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"ToggleButton_Relay_Bed_Bed_7" : {
				"Name" : "ToggleButton_Relay_Bed_Bed_7",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.Relay_07,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"ToggleButton_Relay_Bed_Media_4" : {
				"Name" : "ToggleButton_Relay_Bed_Media_4",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Relay.Pipe,
					"action" : Nodes.Bedroom_Relay.Actions.Power_Control,
					"source" : Nodes.Bedroom_Relay.Sources.Relay_04,
					"index" : Nodes.Bedroom_Relay.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			}	
		},
		"Addicted_ToggleButtons" : {
			"Addicted_ToggleButton_Relay_Bed_Bed_1_Fav" : {
				"Name" : "Addicted_ToggleButton_Relay_Bed_Bed_1_Fav",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Bed_Bed_2_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Bed_Bed_2",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Bed_Red,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							Send_disabled = 1;
							if ($("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val() == 1){
								$("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val($("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Name"]).val()).flipswitch("refresh");
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4);
						}
				}
			},
			"Addicted_ToggleButton_Relay_Bed_Bed_2_Fav" : {
				"Name" : "Addicted_ToggleButton_Relay_Bed_Bed_2_Fav",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Bed_Bed_1_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Bed_Bed_2",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Mirror,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							Send_disabled = 1;
							if ($("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val() == 1){
								$("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val($("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Name"]).val()).flipswitch("refresh");
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4);
						}
				}
			},
			"Addicted_ToggleButton_Relay_Bed_Bed_4" : {
				"Name" : "Addicted_ToggleButton_Relay_Bed_Bed_4",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Bed_Bed_8",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Bed_Bed_4_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.Relay_04,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							Send_disabled = 1;
							if ($("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val() == 0){
								$("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val($("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Name"]).val()).flipswitch("refresh");
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4);
						}
				}
			},
			"Addicted_ToggleButton_Relay_Bed_Bed_8" : {
				"Name" : "Addicted_ToggleButton_Relay_Bed_Bed_8",
				"Addicted_ToggleButton" : "Addicted_ToggleButton_Relay_Bed_Bed_4",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Bed_Bed_4_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.Relay_08,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							Send_disabled = 1;
							if ($("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Addicted_ToggleButton"]).val() == 0){
								$("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Reference_ToggleButtons"]).val($("#" + Pages["bedroom"]["Addicted_ToggleButtons"][Control]["Name"]).val()).flipswitch("refresh");
							}
							Send_disabled = 0;
							return pad ($("#" + Control).val(), 4);
						}
				}
			}
		},
		"Combined_ToggleButtons" : {
			"Combined_ToggleButton_Relay_Bed_Bed_1" : {
				"Name" : "Combined_ToggleButton_Relay_Bed_Bed_1",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Bed_Bed_1_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.Relay_01,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Combined_ToggleButton_Relay_Bed_Bed_1_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Bed_Bed_1_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Bed_Bed_1",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.Relay_01,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Combined_ToggleButton_Relay_Bed_Bed_2" : {
				"Name" : "Combined_ToggleButton_Relay_Bed_Bed_2",
				"Reference_ToggleButtons" : "Addicted_ToggleButton_Relay_Bed_Bed_1_Fav,Addicted_ToggleButton_Relay_Bed_Bed_2_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.Relay_02,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Combined_ToggleButton_Relay_Bed_Bed_4_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Bed_Bed_4_Fav",
				"Reference_ToggleButtons" : "Addicted_ToggleButton_Relay_Bed_Bed_4,Addicted_ToggleButton_Relay_Bed_Bed_8",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.Relay_40,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Combined_ToggleButton_Relay_Bed_Bed_5" : {
				"Name" : "Combined_ToggleButton_Relay_Bed_Bed_5",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Bed_Bed_5_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.Relay_05,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Combined_ToggleButton_Relay_Bed_Bed_5_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Bed_Bed_5_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Bed_Bed_5",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Power_Control,
					"source" : Nodes.Bedroom_Master.Sources.Relay_05,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Combined_ToggleButton_Relay_Bed_Media_1" : {
				"Name" : "Combined_ToggleButton_Relay_Bed_Media_1",
				"Reference_ToggleButtons" : "Favorite_ToggleButton_Relay_Bed_Media_1_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Relay.Pipe,
					"action" : Nodes.Bedroom_Relay.Actions.Power_Control,
					"source" : Nodes.Bedroom_Relay.Sources.Relay_01,
					"index" : Nodes.Bedroom_Relay.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Combined_ToggleButton_Relay_Bed_Media_2" : {
				"Name" : "Combined_ToggleButton_Relay_Bed_Media_2",
				"Reference_ToggleButtons" : "Favorite_ToggleButton_Relay_Bed_Media_2_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Relay.Pipe,
					"action" : Nodes.Bedroom_Relay.Actions.Power_Control,
					"source" : Nodes.Bedroom_Relay.Sources.Relay_02,
					"index" : Nodes.Bedroom_Relay.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Combined_ToggleButton_Relay_Bed_Media_3" : {
				"Name" : "Combined_ToggleButton_Relay_Bed_Media_3",
				"Reference_ToggleButtons" : "Favorite_ToggleButton_Relay_Bed_Media_3_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Relay.Pipe,
					"action" : Nodes.Bedroom_Relay.Actions.Power_Control,
					"source" : Nodes.Bedroom_Relay.Sources.Relay_03,
					"index" : Nodes.Bedroom_Relay.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			}
		},		
		"Favorite_ToggleButtons" : {
			"Favorite_ToggleButton_Relay_Bed_Media_1_Fav" : {
				"Name" : "Favorite_ToggleButton_Relay_Bed_Media_1_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Bed_Media_1",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Relay.Pipe,
					"action" : Nodes.Bedroom_Relay.Actions.Power_Control,
					"source" : Nodes.Bedroom_Relay.Sources.Relay_01,
					"index" : Nodes.Bedroom_Relay.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Favorite_ToggleButton_Relay_Bed_Media_2_Fav" : {
				"Name" : "Favorite_ToggleButton_Relay_Bed_Media_2_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Bed_Media_2",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Relay.Pipe,
					"action" : Nodes.Bedroom_Relay.Actions.Power_Control,
					"source" : Nodes.Bedroom_Relay.Sources.Relay_02,
					"index" : Nodes.Bedroom_Relay.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Favorite_ToggleButton_Relay_Bed_Media_3_Fav" : {
				"Name" : "Favorite_ToggleButton_Relay_Bed_Media_3_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Bed_Media_3",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Relay.Pipe,
					"action" : Nodes.Bedroom_Relay.Actions.Power_Control,
					"source" : Nodes.Bedroom_Relay.Sources.Relay_03,
					"index" : Nodes.Bedroom_Relay.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			}
		},
		"Sliders" : {
			"Sliders_Dim_LEDStipeBed_Bed_Bed" : {
				"Name" : "Sliders_Dim_LEDStipeBed_Bed_Bed",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Dim_Control,
					"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Bed_Red,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			},
			"Sliders_Dim_LEDStipeMirror_Bed_Bed" : {
				"Name" : "Sliders_Dim_LEDStipeMirror_Bed_Bed",
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Dim_Control,
					"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Mirror,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4);
						}
				}
			}
		},
		"Color_Sources" : {
			"Color_Source_Bed_Bed" : {
				"Color_Control" : "Color_Control_Bed_Bed",
				"Sources" : {
					"1" : "LED_Strip_Bed",
					"2" : "LED_Strip_Mirror",
					"3" : "LED_Strip_Mirror_Pic_01",
					"4" : "LED_Strip_Mirror_Pic_02",
					"Node" : Nodes.Bedroom_Master
				}
			}
		},
		"Color_Controls" : {
			"Color_Control_Bed_Bed" : {
				"Color_Control" : "Color_Source_Bed_Bed",
				"Sources" : {
					"LED_Strip_Bed" : {
						"Private_Function" : function(Color){
							Nodes.Bedroom_Master.Colours.LED_Strip_Bed = Color;
						},
						"Payload" : {
							"node_pipe" : Nodes.Bedroom_Master.Pipe,
							"action" : Nodes.Bedroom_Master.Actions.Color_Control,
							"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Bed_Red,
							"index" : Nodes.Bedroom_Master.Index.Init.Init_Main,
							"values" : function (Control){
								return Nodes.Bedroom_Master.Unused_Value;
							}
						}
					},
					"LED_Strip_Mirror" : {
						"Private_Function" : function(Color){
							Nodes.Bedroom_Master.Colours.LED_Strip_Mirror = Color;
						},
						"Payload" : {
							"node_pipe" : Nodes.Bedroom_Master.Pipe,
							"action" : Nodes.Bedroom_Master.Actions.Color_Control,
							"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Mirror,
							"index" : Nodes.Bedroom_Master.Index.Init.Init_Main,
							"values" : function (Control){
								return Nodes.Bedroom_Master.Unused_Value;
							}
						}
					},
					"LED_Strip_Mirror_Pic_01" : {
						"Private_Function" : function(Color){
							Nodes.Bedroom_Master.Colours.LED_Strip_Mirror_Pic_01 = Color;
						},
						"Payload" : {
							"node_pipe" : Nodes.Bedroom_Master.Pipe,
							"action" : Nodes.Bedroom_Master.Actions.Color_Control,
							"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Mirror,
							"index" : Nodes.Bedroom_Master.Index.Init.Init_Colors_1,
							"values" : function (Control){
								return Nodes.Bedroom_Master.Unused_Value;
							}
						}
					},
					"LED_Strip_Mirror_Pic_02" : {
						"Private_Function" : function(Color){
							Nodes.Bedroom_Master.Colours.LED_Strip_Mirror_Pic_02 = Color;
						},
						"Payload" : {
							"node_pipe" : Nodes.Bedroom_Master.Pipe,
							"action" : Nodes.Bedroom_Master.Actions.Color_Control,
							"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Mirror,
							"index" : Nodes.Bedroom_Master.Index.Init.Init_Colors_2,
							"values" : function (Control){
								return Nodes.Bedroom_Master.Unused_Value;
							}
						}
					}
				}
			}
		},
		"Color_DefaultButtons" :{
			"Color_DefaultButton_LEDStipeBed_Bed_Bed_1" :{
				"Color_Sources" : "Color_Source_Bed_Bed",
				"Source" : {
						"1" : "rgb(255,020,000)",
						"Node" : Nodes.Bedroom_Master
				},
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Color_Default,
					"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Bed_Red,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
						return Nodes.Bedroom_Master.Unused_Value;
					}
				}
			},
			"Color_DefaultButton_LEDStipeBed_Bed_Bed_White" : {
				"Color_Sources" : "Color_Source_Bed_Bed",
				"Source" : {
						"1" : "rgb(255,255,255)",
						"Node" : Nodes.Bedroom_Master
				},
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Color_Default,
					"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Bed_Red,
					"index" : Nodes.Bedroom_Master.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Bedroom_Master.Unused_Value;
					}
				}
			},
			"Color_DefaultButton_LEDStipeMirror_Bed_Bed_1" : {
				"Color_Sources" : "Color_Source_Bed_Bed",
				"Source" : {
						"2" : "rgb(235,255,000)",
						"3" : "rgb(035,035,000)",
						"4" : "rgb(255,255,000)",
						"Node" : Nodes.Bedroom_Master
				},
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Color_Default,
					"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Mirror,
					"index" : Nodes.Bedroom_Master.Index.Unused,
					"values" : function (Control){
						return Nodes.Bedroom_Master.Unused_Value;
					}
				}
			},
			"Color_DefaultButton_LEDStipeMirror_Bed_Bed_White" : {
				"Color_Sources" : "Color_Source_Bed_Bed",
				"Source" : {
						"2" : "rgb(255,255,255)",
						"3" : "rgb(255,255,255)",
						"4" : "rgb(255,255,255)",
						"Node" : Nodes.Bedroom_Master
				},
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Color_Default,
					"source" : Nodes.Bedroom_Master.Sources.LED_Strip_Mirror,
					"index" : Nodes.Bedroom_Master.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Bedroom_Master.Unused_Value;
					}
				}
			}
		},
		"Refresh_Controls" : {
			"Refresh_Bed" : {
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Init,
					"source" : Nodes.Bedroom_Master.Sources.Unused,
					"index" : Nodes.Bedroom_Master.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Bedroom_Master.Unused_Value;
					}
				}
			},
			"Temperatur_Bed_Bed" : {
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Init,
					"source" : Nodes.Bedroom_Master.Sources.Unused,
					"index" : Nodes.Bedroom_Master.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Bedroom_Master.Unused_Value;
					}
				}
			},
			"Humidity_Bed_Bed": {
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Init,
					"source" : Nodes.Bedroom_Master.Sources.Unused,
					"index" : Nodes.Bedroom_Master.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Bedroom_Master.Unused_Value;
					}
				}
			}
		},
		"Init" : {
			0 : {
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Init,
					"source" : Nodes.Bedroom_Master.Sources.Unused,
					"index" : Nodes.Bedroom_Master.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Bedroom_Master.Unused_Value;
					}							
				}
			},
			1 : {
				"Addicted_ToggleButton_Relay_Bed_Bed_1_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "2,3",
					"length" : 1,
					"Refresh_init" : true
				},
				"Addicted_ToggleButton_Relay_Bed_Bed_2_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "3,4",
					"length" : 1,
					"Refresh_init" : true
				},
				"Sliders_Dim_LEDStipeBed_Bed_Bed" : {
					"ControlType" : "Slider",
					"Position" : "4,8",
					"length" : 4,
					"Refresh_init" : true
				},
				"Sliders_Dim_LEDStipeMirror_Bed_Bed" : {
					"ControlType" : "Slider",
					"Position" : "8,12",
					"length" : 4,
					"Refresh_init" : true
				},
				"Temperatur_Bed_Bed" : {
					"ControlType" : "Temperatur",
					"Text" : "Temperatur ",
					"Left_Position" : "12,14",
					"Right_Position" : "14,16",
					"length_left" : 2,
					"length_right" : 2,
					"Refresh_init" : true
				},
				"Humidity_Bed_Bed" : {
					"ControlType" : "Humidity",
					"Text" : "Luftfeuchtigkeit ",
					"Left_Position" : "16,18",
					"Right_Position" : "18,20",
					"length_left" : 2,
					"length_right" : 2,
					"Refresh_init" : true
				},
				"Combined_ToggleButton_Relay_Bed_Bed_1_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "20,21",
					"length" : 1,
					"Refresh_init" : false
				},
				"Combined_ToggleButton_Relay_Bed_Bed_1" : {
					"ControlType" : "ToggleButton",
					"Position" : "20,21",
					"length" : 1,
					"Refresh_init" : true
				},
				"Combined_ToggleButton_Relay_Bed_Bed_2" : {
					"ControlType" : "ToggleButton",
					"Position" : "21,22",
					"length" : 1,
					"Refresh_init" : true
				},
				"ToggleButton_Relay_Bed_Bed_3" : {
					"ControlType" : "ToggleButton",
					"Position" : "22,23",
					"length" : 1,
					"Refresh_init" : true
				},
				"Addicted_ToggleButton_Relay_Bed_Bed_4" : {
					"ControlType" : "ToggleButton",
					"Position" : "23,24",
					"length" : 1,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						Send_disabled = 1;
						if (data.substring(23,24) == 0 && data.substring(27,28) == 0){
							$("#Combined_ToggleButton_Relay_Bed_Bed_4_Fav").val("0").flipswitch("refresh");
						}else{
							$("#Combined_ToggleButton_Relay_Bed_Bed_4_Fav").val("1").flipswitch("refresh");
						}
						Send_disabled = 0;
					}
				},
				"Combined_ToggleButton_Relay_Bed_Bed_4_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "23,24",
					"length" : 1,
					"Refresh_init" : false,
					"Private_Function" : function(data){
						Send_disabled = 1;
						if (data.substring(23,24) == 0 && data.substring(27,28) == 0){
							$("#Combined_ToggleButton_Relay_Bed_Bed_4_Fav").val("0").flipswitch("refresh");
						}else{
							$("#Combined_ToggleButton_Relay_Bed_Bed_4_Fav").val("1").flipswitch("refresh");
						}
						Send_disabled = 0;
					}
				},
				"Combined_ToggleButton_Relay_Bed_Bed_5_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "24,25",
					"length" : 1,
					"Refresh_init" : false
				},	
				"Combined_ToggleButton_Relay_Bed_Bed_5" : {
					"ControlType" : "ToggleButton",
					"Position" : "24,25",
					"length" : 1,
					"Refresh_init" : true
				},
				"ToggleButton_Relay_Bed_Bed_6" : {
					"ControlType" : "ToggleButton",
					"Position" : "25,26",
					"length" : 1,
					"Refresh_init" : true
				},
				"ToggleButton_Relay_Bed_Bed_7" : {
					"ControlType" : "ToggleButton",
					"Position" : "26,27",
					"length" : 1,
					"Refresh_init" : true
				},
				"Addicted_ToggleButton_Relay_Bed_Bed_8" : {
					"ControlType" : "ToggleButton",
					"Position" : "27,28",
					"length" : 1,
					"Refresh_init" : true
				},
				"Payload" : {
					"node_pipe" : Nodes.Bedroom_Relay.Pipe,
					"action" : Nodes.Bedroom_Relay.Actions.Init,
					"source" : Nodes.Bedroom_Relay.Sources.Unused,
					"index" : Nodes.Bedroom_Relay.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Bedroom_Relay.Unused_Value;
					}							
				}
			},
			2 : {
				"Combined_ToggleButton_Relay_Bed_Media_1" : {
					"ControlType" : "ToggleButton",
					"Position" : "2,3",
					"length" : 1,
					"Refresh_init" : true
				},
				"Favorite_ToggleButton_Relay_Bed_Media_1_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "2,3",
					"length" : 1,
					"Refresh_init" : false
				},
				"Combined_ToggleButton_Relay_Bed_Media_2" : {
					"ControlType" : "ToggleButton",
					"Position" : "3,4",
					"length" : 1,
					"Refresh_init" : true
				},
				"Favorite_ToggleButton_Relay_Bed_Media_2_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "3,4",
					"length" : 1,
					"Refresh_init" : false
				},
				"Combined_ToggleButton_Relay_Bed_Media_3" :  {
					"ControlType" : "ToggleButton",
					"Position" : "4,5",
					"length" : 1,
					"Refresh_init" : true
				},
				"Favorite_ToggleButton_Relay_Bed_Media_3_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "4,5",
					"length" : 1,
					"Refresh_init" : false
				},
				"ToggleButton_Relay_Bed_Media_4" : {
					"ControlType" : "ToggleButton",
					"Position" : "5,6",
					"length" : 1,
					"Refresh_init" : true
				},
				"Payload" : {
					"node" : "Bedroom_Master",
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Init,
					"source" : Nodes.Bedroom_Master.Sources.Unused,
					"index" : Nodes.Bedroom_Master.Index.Init.Init_Colors_1,
					"values" : function (Control){
						return Nodes.Bedroom_Master.Unused_Value;
					}							
				}
			},
			3 : {
				"LED_Strip_Bed" : {
					"ControlType" : "Color",
					"R_Position" : "2,5",
					"G_Position" : "5,8",
					"B_Position" : "8,11",
					"length_color" : 3,
					"Refresh_init" : true
				},
				"LED_Strip_Mirror" : {
					"ControlType" : "Color",
					"R_Position" : "11,14",
					"G_Position" : "14,17",
					"B_Position" : "17,20",
					"length_color" : 3,
					"Refresh_init" : true,
					"Private_Refresh_Function" : function(){
						var colors = Nodes.Bedroom_Master.Colours.LED_Strip_Bed.substring(4,Nodes.Bedroom_Master.Colours.LED_Strip_Bed.length - 1).split(",");
						var refresh_Values = colors[0] + colors[1] + colors[2];
						colors = Nodes.Bedroom_Master.Colours.LED_Strip_Mirror.substring(4,Nodes.Bedroom_Master.Colours.LED_Strip_Mirror.length - 1).split(",");
						refresh_Values += colors[0] + colors[1] + colors[2];
						colors = "";
						return refresh_Values;
					}
				},
				"Payload" : {
					"node" : "Bedroom_Master",
					"node_pipe" : Nodes.Bedroom_Master.Pipe,
					"action" : Nodes.Bedroom_Master.Actions.Init,
					"source" : Nodes.Bedroom_Master.Sources.Unused,
					"index" : Nodes.Bedroom_Master.Index.Init.Init_Colors_2,
					"values" : function (Control){
						return Nodes.Bedroom_Master.Unused_Value;
					}							
				}
			},	
			4 : {
				"LED_Strip_Mirror_Pic_01" : {
					"ControlType" : "Color",
					"R_Position" : "2,5",
					"G_Position" : "5,8",
					"B_Position" : "8,11",
					"length_color" : 3,
					"Refresh_init" : true
				},
				"LED_Strip_Mirror_Pic_02" : {
					"ControlType" : "Color",
					"R_Position" : "11,14",
					"G_Position" : "14,17",
					"B_Position" : "17,20",
					"length_color" : 3,
					"Refresh_init" : true,
					"Private_Refresh_Function" : function(){
						//alert("color 4");
						var colors = Nodes.Bedroom_Master.Colours.LED_Strip_Mirror_Pic_01.substring(4,Nodes.Bedroom_Master.Colours.LED_Strip_Mirror_Pic_01.length - 1).split(",");
						var refresh_Values = colors[0] + colors[1] + colors[2];
						colors = Nodes.Bedroom_Master.Colours.LED_Strip_Mirror_Pic_02.substring(4,Nodes.Bedroom_Master.Colours.LED_Strip_Mirror_Pic_02.length - 1).split(",");
						refresh_Values += colors[0] + colors[1] + colors[2];
						colors = "";
						return refresh_Values;
					}
				},
				"Private_Function" : function(data){
					switch ($("#Color_Source_Bed_Bed").val()){
						case "1":
							$("#Color_Control_Bed_Bed").chromoselector("setColor", Nodes.Bedroom_Master.Colours.LED_Strip_Bed);
							Set_ControlsColor("bedroom", "Color_Sources", "Color_Source_Bed_Bed", false, Nodes.Bedroom_Master);
							break;
						case "2":
							$("#Color_Control_Bed_Bed").chromoselector("setColor", Nodes.Bedroom_Master.Colours.LED_Strip_Mirror);
							Set_ControlsColor("bedroom", "Color_Sources", "Color_Source_Bed_Bed", false, Nodes.Bedroom_Master);
							break;
						case "3":
							$("#Color_Control_Bed_Bed").chromoselector("setColor", Nodes.Bedroom_Master.Colours.LED_Strip_Mirror_Pic_01);
							Set_ControlsColor("bedroom", "Color_Sources", "Color_Source_Bed_Bed", false, Nodes.Bedroom_Master);
							break;
						case "4":
							$("#Color_Control_Bed_Bed").chromoselector("setColor", Nodes.Bedroom_Master.Colours.LED_Strip_Mirror_Pic_02);
							Set_ControlsColor("bedroom", "Color_Sources", "Color_Source_Bed_Bed", false, Nodes.Bedroom_Master);
							break;
					}
					$("#Init_Bed").removeClass("ui-icon-alert").addClass("ui-icon-check");
					$("#Temperatur_Bed_Bed").removeClass("ui-btn-active");
					$("#Humidity_Bed_Bed").removeClass("ui-btn-active");
				}
			}
		}
	},
	"floor" : {
		"Refresh_Controls" : {
			"Refresh_Floor" : {
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Init,
					"source" : Nodes.Floor.Sources.Unused,
					"index" : Nodes.Floor.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Floor.Unused_Value;
					}
				}
			},
			"Temperatur_Floor_Room" : {
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Init,
					"source" : Nodes.Floor.Sources.Unused,
					"index" : Nodes.Floor.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Floor.Unused_Value;
					}
				}
			},
			"Humidity_Floor_Room": {
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Init,
					"source" : Nodes.Floor.Sources.Unused,
					"index" : Nodes.Floor.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Floor.Unused_Value;
					}
				}
			}
		},
		"Color_DefaultButtons" :{
			"Color_DefaultButton_LEDStipe_Floor_Room_White" :{
				"Source" : {
						"1" : "rgb(255,255,255)",
						"Node" : Nodes.Floor
				},
				"Color_Control" : "Color_Control_Floor_Room",
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Color_Default,
					"source" : Nodes.Floor.Sources.LED_Strip_Red,
					"index" : Nodes.Floor.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Floor.Unused_Value;
					}
				}
			},
			"Color_DefaultButton_LEDStipe_Floor_Room_1" :{
				"Source" : {
						"1" : "rgb(255,020,000)",
						"Node" : Nodes.Floor
				},
				"Color_Control" : "Color_Control_Floor_Room",
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Color_Default,
					"source" : Nodes.Floor.Sources.LED_Strip_Red,
					"index" : Nodes.Floor.Index.Unused,
					"values" : function (Control){
						return Nodes.Floor.Unused_Value;
					}
				}
			}
		},
		"Color_Controls" : {
			"Color_Control_Floor_Room" : {
				"Color_Control" : "Color_Control_Floor_Room",
				"Sources" : {
					"1" : "LED_Strip"
				},
				"Private_Function" : function(Color){
					Nodes.Floor.Colours.LED_Strip = Color;
				},
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Color_Control,
					"source" : Nodes.Floor.Sources.LED_Strip_Red,
					"index" : Nodes.Floor.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Floor.Unused_Value;
					}
				}
			}
		},
		"Combined_ToggleButtons" : {
			"Combined_ToggleButton_Relay_Floor_Room_1_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Floor_Room_1_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Floor_Room_1",
				"Payload" : {
				"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Power_Control,
					"source" : Nodes.Floor.Sources.Relay_01,
					"index" : Nodes.Floor.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Floor_Room_1" : {
				"Name" : "Combined_ToggleButton_Relay_Floor_Room_1",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Floor_Room_1_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Power_Control,
					"source" : Nodes.Floor.Sources.Relay_01,
					"index" : Nodes.Floor.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Floor_Room_2_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Floor_Room_2_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Floor_Room_2",
				"Payload" : {
				"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Power_Control,
					"source" : Nodes.Floor.Sources.Relay_02,
					"index" : Nodes.Floor.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Floor_Room_2" : {
				"Name" : "Combined_ToggleButton_Relay_Floor_Room_2",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Floor_Room_2_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Power_Control,
					"source" : Nodes.Floor.Sources.Relay_02,
					"index" : Nodes.Floor.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Floor_Room_3_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Floor_Room_3_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Floor_Room_3",
				"Payload" : {
				"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Power_Control,
					"source" : Nodes.Floor.Sources.Relay_03,
					"index" : Nodes.Floor.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Floor_Room_3" : {
				"Name" : "Combined_ToggleButton_Relay_Floor_Room_3",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Floor_Room_3_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Power_Control,
					"source" : Nodes.Floor.Sources.Relay_03,
					"index" : Nodes.Floor.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Floor_Room_4_Fav" : {
				"Name" : "Combined_ToggleButton_Relay_Floor_Room_4_Fav",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Floor_Room_4",
				"Payload" : {
				"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Power_Control,
					"source" : Nodes.Floor.Sources.Relay_04,
					"index" : Nodes.Floor.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			},
			"Combined_ToggleButton_Relay_Floor_Room_4" : {
				"Name" : "Combined_ToggleButton_Relay_Floor_Room_4",
				"Reference_ToggleButtons" : "Combined_ToggleButton_Relay_Floor_Room_4_Fav",
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Power_Control,
					"source" : Nodes.Floor.Sources.Relay_04,
					"index" : Nodes.Floor.Index.Unused,
					"values" : function (Control){
							return pad($("#" + Control).val().toString(), 4)
					}
				}
			}
		},
		"Sliders" : {
			"Slider_Dim_LEDStipe_Floor_Room" : {
				"Name" : "Slider_Dim_LEDStipe_Floor_Room",
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Dim_Control,
					"source" : Nodes.Floor.Sources.LED_Strip_Red,
					"index" : Nodes.Floor.Index.Unused,
					"values" : function (Control){
						return pad($("#" + Control).val().toString(), 4)
					}
				}
			}
		},
		"Init" : {
			0 : {
				"Payload" : {
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Init,
					"source" : Nodes.Floor.Sources.Unused,
					"index" : Nodes.Floor.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Floor.Unused_Value;
					}							
				}
			},
			1 : {
				"Combined_ToggleButton_Relay_Floor_Room_1_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "2,3",
					"length" : 1,
					"Refresh_init" : true
				},
				"Combined_ToggleButton_Relay_Floor_Room_1" : {
					"ControlType" : "ToggleButton",
					"Position" : "2,3",
					"length" : 1,
					"Refresh_init" : false
				},
				"Combined_ToggleButton_Relay_Floor_Room_2_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "3,4",
					"length" : 1,
					"Refresh_init" : true
				},
				"Combined_ToggleButton_Relay_Floor_Room_2" : {
					"ControlType" : "ToggleButton",
					"Position" : "3,4",
					"length" : 1,
					"Refresh_init" : false
				},
				"Combined_ToggleButton_Relay_Floor_Room_3_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "4,5",
					"length" : 1,
					"Refresh_init" : true
				},
				"Combined_ToggleButton_Relay_Floor_Room_3" : {
					"ControlType" : "ToggleButton",
					"Position" : "4,5",
					"length" : 1,
					"Refresh_init" : false
				},
				"Combined_ToggleButton_Relay_Floor_Room_4_Fav" : {
					"ControlType" : "ToggleButton",
					"Position" : "5,6",
					"length" : 1,
					"Refresh_init" : true
				},
				"Combined_ToggleButton_Relay_Floor_Room_4" : {
					"ControlType" : "ToggleButton",
					"Position" : "5,6",
					"length" : 1,
					"Refresh_init" : false
				},
				"Slider_Dim_LEDStipe_Floor_Room" : {
					"ControlType" : "Slider",
					"Position" : "6,10",
					"length" : 4,
					"Refresh_init" : true
				},
				"Temperatur_Floor_Room" : {
					"ControlType" : "Temperatur",
					"Text" : "Temperatur ",
					"Left_Position" : "10,12",
					"Right_Position" : "12,14",
					"length_left" : 2,
					"length_right" : 2,
					"Refresh_init" : true
				},
				"Humidity_Floor_Room" : {
					"ControlType" : "Humidity",
					"Text" : "Luftfeuchtigkeit ", 
					"Left_Position" : "14,16",
					"Right_Position" : "16,18",
					"length_left" : 2,
					"length_right" : 2,
					"Refresh_init" : true
				},
				"Payload" : {
					"node" : "Floor",
					"node_pipe" : Nodes.Floor.Pipe,
					"action" : Nodes.Floor.Actions.Init,
					"source" : Nodes.Floor.Sources.Unused,
					"index" : Nodes.Floor.Index.Init.Init_Colors,
					"values" : function (Control){
						return Nodes.Floor.Unused_Value;
					}							
				}
			},
			2 : {
				"LED_Strip" : {
					"ControlType" : "Color",
					"R_Position" : "2,5",
					"G_Position" : "5,8",
					"B_Position" : "8,11",
					"length_color" : 3,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						Send_disabled = 1;
						$("#Color_Control_Floor_Room").chromoselector("setColor", Nodes.Floor.Colours.LED_Strip);
						Set_ControlsColor("floor", "Color_Controls", "Color_Control_Floor_Room", false, Nodes.Floor);
						Send_disabled = 0;
					},
					"Private_Refresh_Function" : function(){
						var colors = Nodes.Floor.Colours.LED_Strip.substring(4,Nodes.Floor.Colours.LED_Strip.length - 1).split(",");
						var refresh_Values = colors[0] + colors[1] + colors[2];
						return refresh_Values;
					}
				},
				"Private_Function" : function(data){
					$("#Init_Floor").removeClass("ui-icon-alert").addClass("ui-icon-check");
					$("#Temperatur_Floor_Room").removeClass("ui-btn-active");
					$("#Humidity_Floor_Room").removeClass("ui-btn-active");
				}
			}
		}
	},
	"vibcontrol" : {
		"ToggleButtons" : {
			"ToggleButton_VibPower_Vib" : {
				"Name" : "ToggleButton_VibPower_Vib",
				"Private_Function" : function(){
					handle_VibAnimation("speed_up");
				},
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Power_Control,
					"source" : "",
					"index" : Nodes.Vib_Control.Index.Unused,
					"values" : function (Control){
							switch ($("#" + Pages["vibcontrol"]["Selectmenus"]["Selectmenu_VibSources_Vib"]["name"]).val()){
								case "1":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_01
									break;
								case "2":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_02
									break;
								case "3":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_03_Motor
									break;
								case "5":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_04_Motor_1
									break;
							}
							return pad($("#" + Control).val().toString(), 4)
						}
				}
			}
		},
		"Refresh_Controls" : {
			"Refresh_Vib" : {
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Init,
					"source" : "",
					"index" : Nodes.Vib_Control.Index.Init.Init_Main,
					"values" : function (Control){
						switch ($("#" + Pages["vibcontrol"]["Selectmenus"]["Selectmenu_VibSources_Vib"]["name"]).val()){
							case "1":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_01
								break;
							case "2":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_02
								break;
							case "3":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_03_Motor
								break;
							case "5":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_04_Motor_1
								break;
						}
						return Nodes.Vib_Control.Unused_Value
					}
				}
			}
		},
		"Selectmenus" : {
			"Selectmenu_VibSources_Vib" : {
				"name" : "Selectmenu_VibSources_Vib",
				"Private_Function" : function(){
					Send_disabled = 1;
					$("#ToggleButton_VibPower_Vib").val(0).flipswitch("refresh");
					Send_disabled = 0;
					Set_VibratorLayout();
					handle_VibAnimation("speed_up");
					init = true;
					initloop = 0;
				},
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Init,
					"source" : "",
					"index" : Nodes.Vib_Control.Index.Init.Change_Source,
					"values" : function (Control){
						switch ($("#" + Pages["vibcontrol"]["Selectmenus"]["Selectmenu_VibSources_Vib"]["name"]).val()){
							case "1":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_01
								break;
							case "2":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_02
								break;
							case "3":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_03_Motor
								break;
							case "5":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_04_Motor_1
								break;
						}
						return Nodes.Vib_Control.State_Value
					}
				}
			},
			"Selectmenu_VibProgramms_Vib" : {
				"name" : "Selectmenu_VibProgramms_Vib",
				"Private_Function" : function(){
					Set_VibratorLayout();
					handle_VibAnimation("speed_up");
				},
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Set_Values,
					"source" : "",
					"index" : Nodes.Vib_Control.Index.Set_Values.Vib_Programm,
					"values" : function (Control){
						switch ($("#" + Pages["vibcontrol"]["Selectmenus"]["Selectmenu_VibSources_Vib"]["name"]).val()){
							case "1":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_01
								break;
							case "2":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_02
								break;
							case "3":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_03_Motor
								break;
							case "5":
								payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_04_Motor_1
								break;
						}
						return pad($("#" + Control).val().toString(), 4)
					}
				}
			}
		},
		"Sliders" : {
			"Slider_MaxPower_Vib" : {
				"Name" : "Slider_MaxPower_Vib",
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Set_Values,
					"source" : "",
					"index" : Nodes.Vib_Control.Index.Set_Values.Max_Power,
					"values" : function (Control){
							switch ($("#" + Pages["vibcontrol"]["Selectmenus"]["Selectmenu_VibSources_Vib"]["name"]).val()){
								case "1":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_01
									break;
								case "2":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_02
									break;
								case "3":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_03_Motor
									break;
								case "5":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_04_Motor_1
									break;
							}
							return pad($("#" + Control).val().toString(), 4)
						}
				}
			},
			"Slider_MinPower_Vib" : {
				"Name" : "Slider_MinPower_Vib",
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Set_Values,
					"source" : "",
					"index" : Nodes.Vib_Control.Index.Set_Values.Min_Power,
					"values" : function (Control){
							switch ($("#" + Pages["vibcontrol"]["Selectmenus"]["Selectmenu_VibSources_Vib"]["name"]).val()){
								case "1":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_01
									break;
								case "2":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_02
									break;
								case "3":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_03_Motor
									break;
								case "5":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_04_Motor_1
									break;
							}
							return pad($("#" + Control).val().toString(), 4)
						}
				}
			},
			"Slider_PumpLevel_Vib" : {
				"Name" : "Slider_PumpLevel_Vib",
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Set_Values,
					"source" : "",
					"index" : Nodes.Vib_Control.Index.Set_Values.Vibrator_03_Pump,
					"values" : function (Control){
							switch ($("#" + Pages["vibcontrol"]["Selectmenus"]["Selectmenu_VibSources_Vib"]["name"]).val()){
								case "1":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_01
									break;
								case "2":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_02
									break;
								case "3":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_03_Motor
									break;
								case "5":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_04_Motor_1
									break;
							}
							return pad($("#" + Control).val().toString(), 4)
						}
				}
			},
			"Slider_DelayUp_Vib" : {
				"Name" : "Slider_DelayUp_Vib",
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Set_Values,
					"source" : "",
					"index" : Nodes.Vib_Control.Index.Set_Values.Delay_Timp_Up,
					"values" : function (Control){
							switch ($("#" + Pages["vibcontrol"]["Selectmenus"]["Selectmenu_VibSources_Vib"]["name"]).val()){
								case "1":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_01
									break;
								case "2":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_02
									break;
								case "3":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_03_Motor
									break;
								case "5":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_04_Motor_1
									break;
							}
							return pad(($("#" + Control).val() * 1000).toString(), 4)
						}
				}
			},
			"Slider_DelayDown_Vib" : {
				"Name" : "Slider_DelayDown_Vib",
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Set_Values,
					"source" : "",
					"index" : Nodes.Vib_Control.Index.Set_Values.Delay_Timp_Down,
					"values" : function (Control){
							switch ($("#" + Pages["vibcontrol"]["Selectmenus"]["Selectmenu_VibSources_Vib"]["name"]).val()){
								case "1":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_01
									break;
								case "2":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_02
									break;
								case "3":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_03_Motor
									break;
								case "5":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_04_Motor_1
									break;
							}
							return pad(($("#" + Control).val() * 1000).toString(), 4)
						}
				}
			},
			"Slider_RampUp_Vib" : {
				"Name" : "Slider_RampUp_Vib",
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Set_Values,
					"source" : "",
					"index" : Nodes.Vib_Control.Index.Set_Values.Ramp_Timp_Up,
					"values" : function (Control){
							switch ($("#" + Pages["vibcontrol"]["Selectmenus"]["Selectmenu_VibSources_Vib"]["name"]).val()){
								case "1":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_01
									break;
								case "2":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_02
									break;
								case "3":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_03_Motor
									break;
								case "5":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_04_Motor_1
									break;
							}
							return pad(($("#" + Control).val() * 1000).toString(), 4)
						}
				}
			},
			"Slider_RampDown_Vib" : {
				"Name" : "Slider_RampDown_Vib",
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Set_Values,
					"source" : "",
					"index" : Nodes.Vib_Control.Index.Set_Values.Ramp_Timp_Down,
					"values" : function (Control){
							switch ($("#" + Pages["vibcontrol"]["Selectmenus"]["Selectmenu_VibSources_Vib"]["name"]).val()){
								case "1":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_01
									break;
								case "2":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_02
									break;
								case "3":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_03_Motor
									break;
								case "5":
									payload_default["source"] = Nodes.Vib_Control.Sources.Vibrator_04_Motor_1
									break;
							}
							return pad(($("#" + Control).val() * 1000).toString(), 4)
						}
				}
			}
		},
		"Init" : {
			0 : {
				"Payload" : {
					"node_pipe" : Nodes.Vib_Control.Pipe,
					"action" : Nodes.Vib_Control.Actions.Init,
					"source" : Nodes.Vib_Control.Sources.Vibrator_01,
					"index" : Nodes.Vib_Control.Index.Init.Init_Main,
					"values" : function (Control){
						return Nodes.Vib_Control.Unused_Value;
					}							
				}
			},
			1 : {
				"Selectmenu_VibProgramms_Vib" : {
					"ControlType" : "Selectmenus",
					"Position" : "2,3",
					"length" : 1,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						Set_VibratorLayout();
					}
				},
				"Selectmenu_VibSources_Vib" : {
					"ControlType" : "Selectmenus",
					"Position" : "3,4",
					"length" : 1,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						Set_VibratorLayout();
					}
				},
				"ToggleButton_VibPower_Vib" : {
					"ControlType" : "ToggleButton",
					"Position" : "4,5",
					"length" : 1,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						handle_VibAnimation("speed_up");
					}
				},
				"Slider_MaxPower_Vib" : {
					"ControlType" : "Slider",
					"Position" : "5,8",
					"length" : 3,
					"Refresh_init" : true
				},
				"Slider_MinPower_Vib" : {
					"ControlType" : "Slider",
					"Position" : "8,11",
					"length" : 3,
					"Refresh_init" : true
				},
				"Slider_DelayUp_Vib" : {
					"ControlType" : "Slider",
					"Position" : "11,15",
					"length" : 4,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						$("#Slider_DelayUp_Vib").val(data.substring(Pages.vibcontrol.Init[1].Slider_DelayUp_Vib.Position.split(",")[0], 
							Pages.vibcontrol.Init[1].Slider_DelayUp_Vib.Position.split(",")[1]) / 1000).slider("refresh");
					},
					"Private_Refresh_Function" : function(data, pad_length){
						var value = pad(data * 1000, pad_length);
						return value;
					}
				},
				"Slider_DelayDown_Vib" : {
					"ControlType" : "Slider",
					"Position" : "15,19",
					"length" : 4,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						$("#Slider_DelayDown_Vib").val(data.substring(Pages.vibcontrol.Init[1].Slider_DelayDown_Vib.Position.split(",")[0], 
							Pages.vibcontrol.Init[1].Slider_DelayDown_Vib.Position.split(",")[1]) / 1000).slider("refresh");
					},
					"Private_Refresh_Function" : function(data, pad_length){
						var value = pad(data * 1000, pad_length);
						return value;
					}
				},
				"Slider_RampUp_Vib" : {
					"ControlType" : "Slider",
					"Position" : "19,23",
					"length" : 4,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						$("#Slider_RampUp_Vib").val(data.substring(Pages.vibcontrol.Init[1].Slider_RampUp_Vib.Position.split(",")[0], 
							Pages.vibcontrol.Init[1].Slider_RampUp_Vib.Position.split(",")[1]) / 1000).slider("refresh");
					},
					"Private_Refresh_Function" : function(data, pad_length){
						var value = pad(data * 1000, pad_length);
						return value;
					}
				},
				"Slider_RampDown_Vib" : {
					"ControlType" : "Slider",
					"Position" : "23,27",
					"length" : 4,
					"Refresh_init" : true,
					"Private_Function" : function(data){
						$("#Slider_RampDown_Vib").val(data.substring(Pages.vibcontrol.Init[1].Slider_RampDown_Vib.Position.split(",")[0], 
							Pages.vibcontrol.Init[1].Slider_RampDown_Vib.Position.split(",")[1]) / 1000).slider("refresh");
					},
					"Private_Refresh_Function" : function(data, pad_length){
						var value = pad(data * 1000, pad_length);
						return value;
					}
				},
				"Slider_PumpLevel_Vib" : {
					"ControlType" : "Slider",
					"Position" : "27,29",
					"length" : 2,
					"Refresh_init" : true
				},
				"Private_Function" : function(data){
					if (init){
						Get_RefreshValues("vibcontrol", 0, "ControlName");
						init = false;
					}
					$("#Init_Vib").removeClass("ui-icon-alert").addClass("ui-icon-check");
				}
			}
		}				
	}
}

