var Nodes = {
	"NanoTest":{
		"Pipe" : "00006", 
		"Actions" : {
			"Init" : "10"
		}
	},
	"Livingroom_Media":{
		"Pipe" : "00011",
		"Unused_Value" : "0000",
		"Actions" : {
			"Init" : "10",
			"Power_Control" : "11"
		},
		"Sources" : {
			"Unused" : "00",
			"LED Pin 13" : "00",
			"Relay_01" : "01",
			"Relay_02" : "02",
			"Relay_03" : "03",
			"Relay_04" : "04",
			"Relay_05" : "05",
			"Relay_06" : "06",
			"Relay_07" : "07",
			"Relay_08" : "08",
			"Relay_10" : "10",
			"Relay_40" : "40",
			"Relay_50" : "50"
		},
		"Index" : {
			"Unused" : "0",
			"Init" : {
				"Init_Main" : "1"
			}
		}
	},
	"Aquarium":{
		"Pipe" : "00021",
		"Unused_Value" : "0000",
		"Actions" : {
			"Init" : "10",
			"Power_Control" : "11",
			"Dim_Control" : "12",
			"Color_Control" : "13",
			"Color_Default" : "14",
			"Thunderstorm" : "15",
			"Calibration" : "16",
			"NightLight" : "18"
		},
		"Sources" : {
			"Unused" : "00",
			"LED Pin 13" : "00",
			"LED_Strip_Aquarium" : "01",
			"PH" : "02",
			"EC" : "03",
			"Temp" : "04",
			"Relay_01" : "05",
			"Relay_02" : "06",
			"Relay_03" : "07",
			"Relay_04" : "08",
			"Relay_05" : "09",
			"Relay_10" : "10"
		},
		"Colours" : {
			"LED_Strip_Aqua" : "rgb(255,255,255)"
		},
		"Index" : {
			"Unused" : "0",
			"Init" : {
				"Init_Main" : "1",
				"Init_Colors_1" : "2"
			},
			"ColorDefault" : {
				"LED_Strip_Aqua" : "rgb(000,000,255)"
			},
			"ColorControl" : {
				"LED_Strip_Aqua" : "1"
			},
			"Calibration" : {
				"PH_7" : "1",
				"PH_4" : "2"
			}
		}
	},
	"Livingroom_Master":{
		"Pipe" : "00001",
		"Unused_Value" : "0000",
		"Actions" : {
			"Init" : "10",
			"Power_Control" : "11",
			"Dim_Control" : "12",
			"Color_Control" : "13",
			"Color_Default" : "14"
		},
		"Sources" : {
			"Unused" : "00",
			"LED Pin 13" : "00",
			"LED_Strip_Red" : "01",
			"LED_Strip_Green" : "02",
			"LED_Strip_Blue" : "03",
			"DHT11" : "04",
			"Relay_01" : "05",
			"Relay_02" : "06",
			"Relay_03" : "07",
			"Relay_04" : "08"
		},
		"Colours" : {
			"LED_Strip" : "rgb(255,020,000)"
		},
		"Index" : {
			"Unused" : "0",
			"Init" : {
				"Init_Main" : "1",
				"Init_Colors" : "2"
			},
			"ColorDefault" : {
				"LED_Strip" : "rgb(255,020,000)"
			},
			"ColorControl" : {
				"LED_Strip" : "1"
			}
		}
	},
	"Bedroom_Relay":{
		"Pipe" : "00002",
		"Unused_Value" : "0000",
		"Actions" : {
			"Init" : "10",
			"Power_Control" : "11"
		},
		"Sources" : {
			"Unused" : "00",
			"LED Pin 13" : "00",
			"Relay_01" : "01",
			"Relay_02" : "02",
			"Relay_03" : "03",
			"Relay_04" : "04"
		},
		"Index" : {
			"Unused" : "0",
			"Init" : {
				"Init_Main" : "1"
			}
		}
	},
	"Bedroom_Master":{
		"Pipe" : "00012",
		"Unused_Value" : "0000",
		"Actions" : {
			"Init" : "10",
			"Power_Control" : "11",
			"Dim_Control" : "12",
			"Color_Control" : "13",
			"Color_Default" : "14"
		},
		"Sources" : {
			"Unused" : "00",
			"LED Pin 13" : "00",
			"LED_Strip_Bed_Red" : "01",
			"LED_Strip_Bed_Green" : "02",
			"LED_Strip_Bed_Blue" : "03",
			"LED_Strip_Mirror" : "04",
			"DHT22" : "05",
			"Relay_01" : "06",
			"Relay_02" : "07",
			"Relay_03" : "08",
			"Relay_04" : "09",
			"Relay_05" : "10",
			"Relay_06" : "11",
			"Relay_07" : "12",
			"Relay_08" : "13",
			"Relay_40" : "40"
		},
		"Colours" : {
			"LED_Strip_Bed" : "rgb(255,020,000)",
			"LED_Strip_Mirror" : "rgb(235,255,000)",
			"LED_Strip_Mirror_Pic_01" : "rgb(035,035,000)",
			"LED_Strip_Mirror_Pic_02" : "rgb(255,255,000)"
		},
		"Index" : {
			"Unused" : "0",
			"Init" : {
				"Init_Main" : "1",
				"Init_Colors_1" : "2",
				"Init_Colors_2" : "3"
			},
			"ColorDefault" : {
				"LED_Strip_Bed" : "rgb(255,020,000)",
				"LED_Strip_Mirror" : "rgb(235,255,000)",
				"LED_Strip_Mirror_Pic_01" : "rgb(035,035,000)",
				"LED_Strip_Mirror_Pic_02" : "rgb(255,255,000)"
			},
			"ColorControl" : {
				"LED_Strip_Mirror" : "1",
				"LED_Strip_Mirror_Pic_01" : "2",
				"LED_Strip_Mirror_Pic_02" : "3"
			}
		}
	},
	"Floor":{
		"Pipe" : "00005",
		"Unused_Value" : "0000",
		"Actions" : {
			"Init" : "10",
			"Power_Control" : "11",
			"Dim_Control" : "12",
			"Color_Control" : "13",
			"Color_Default" : "14"
		},
		"Sources" : {
			"Unused" : "00",
			"LED Pin 13" : "00",
			"LED_Strip_Red" : "01",
			"LED_Strip_Green" : "02",
			"LED_Strip_Blue" : "03",
			"DHT11" : "04",
			"Relay_01" : "05",
			"Relay_02" : "06",
			"Relay_03" : "07",
			"Relay_04" : "08"
		},
		"Colours" : {
			"LED_Strip" : "rgb(255,020,000)"
		},
		"Index" : {
			"Unused" : "0",
			"Init" : {
				"Init_Main" : "1",
				"Init_Colors" : "2"
			},
			"ColorDefault" : {
				"LED_Strip" : "rgb(255,020,000)"
			},
			"ColorControl" : {
				"LED_Strip" : "1"
			}
		}
	},
	"Vib_Control":{
		"Pipe" : "00022", 
		"Unused_Value" : "0000",
		"State_Value" : "0001",
		"Actions" : {
			"Init" : "10",
			"Power_Control" : "11",
			"Set_Values" : "12"
		},
		"Sources" : {
			"Unused" : "00",
			"LED Pin 13" : "00",
			"Vibrator_01" : "01",
			"Vibrator_02" : "02",
			"Vibrator_03_Motor" : "03",
			"Vibrator_03_Pump" : "04",
			"Vibrator_04_Motor_1" : "05",
			"Vibrator_04_Motor_2" : "06",
			"Vibrator_04_Motor_3" : "07"
		},
		"Index" : {
			"Unused" : "0",
			"Init" : {
				"Init_Main" : "1",
				"Change_Source" : "2"
			},
			"Set_Values" : {
				"Max_Power" : "1",
				"Min_Power" : "2",
				"Delay_Timp_Up" : "3",
				"Delay_Timp_Down" : "4",
				"Ramp_Timp_Up" : "5",
				"Ramp_Timp_Down" : "6",
				"Vib_Programm" : "7"
			}
		}
	}
}