// Action  Source  Index    Value		Values
// 10-99   01-99   1-9    0001-9999		  ""
	
/* ToDo: = stichwort (für Aufgaben die noch zu erledigen sind.)
- Implement Error Handle (Reinit Control)

Aquarium:
 - Color auswahl führt zum absturz
 - Temperatur-Kompensation in PH messung einbinden
 
System:
 - Timeout für Transmit Loader (bei seitenfehler kann keine aktion mehr ausgeführt werden)
 - Default Colors sollen nicht mehr im Arduino sondern in Server-Config abgelegt werden (Sync mit Arduino on Server Start und in Arduino Memory speichern) 
 - ColorWheel Button in Textfeld plazieren (gibr hierfür eine Property) und update bei änderung
 */

 // Init System vars
var socket;
var init = true;
var initloop = 1;
var color_trigger = 0;
var receive_Color = false;
var ColorPicker_Defaults;

// ********* Objects Definition ****************************************************************************************************
// Default Payload structure
var payload_default = {
	'split_source': {'node_pipe':5, 'action': 2, 'source': 2,'index': 1, 'values': 0},
	'node_pipe': "",
	'action': 0, 
	'source': 0,
	'index': 0,
	'values': ""
};

// Tasks Object (Object filled in with Socket.IO Init on $(document).on("mobileinit"))
// ToDo: Create Page to Add, Edit and Delete Tasks
var Tasks;
// ********* END Object Definition ****************************************************************************************************


// ********* Controls Definition ****************************************************************************************************
// Define all Global Control Options
function Init_Control_Options(){
	// For ColorPicker ChromoSelector
	ColorPicker_Defaults = {
		preview: true,
        width: 250,
		ringwidth: 23,
		effect: 'fade',
		icon: '/images/palette.png',
		iconpos: 'left',
		color2str: function (color) {
			return color.getRgbString();
        },
		show: function () {
			receive_Color = true;
        },
		beforeHide: updatePreview_Color,
		hide: function () {
			receive_Color = false;
        },
		create: function () {
			var color = $(this).chromoselector('getColor');
			var colors = Get_ColorValues(color);
			var set_Color = "rgb(" + pad(colors[0], 3) + "," + pad(colors[1], 3)  + "," + pad(colors[2], 3) + ")";
		
			// needed for the ColorPIcker Input Field to Update Color
			$(this).css({
				'background-color': color.getRgbString(),
				'color': color.getTextColor().getRgbString(),
				'text-shadow': '0 1px 0 ' + color.getTextColor().getTextColor().getRgbString()
			});
			receive_Color = false;
        },
		update: updatePreview_Color
    }
};
// ********* END Controls Definition ****************************************************************************************************


// ********* Client Source ****************************************************************************************************
// Send the Payload
function Send_Payload(payload, showTransmit){
	// Check Optional Parameter if is set
	if(showTransmit==null)showTransmit = true;
	
	// Handle Show Transmit Loader 
	if (showTransmit){
		showTransmitting(true, "Transmitting");
	}
	// Send the Payload
	socket.emit('send', { message: payload });
}

// Set and Send Payload from the selected Control
function Set_Payload(Page, Type, Control){
	var Control_Values = Pages[Page][Type][Control];
	
	// Set Payload
	payload_default.node_pipe = Control_Values.Payload.node_pipe;
	payload_default.action = Control_Values.Payload.action;
	payload_default.index = Control_Values.Payload.index;
	payload_default.source = Control_Values.Payload.source;
	payload_default.values = Control_Values.Payload.values(Control);
	
	// Send Payload
	Send_Payload(payload_default);
}

// Set Payload with Color from Color-Wheel (Chromoselector) to the selected Node 
function Set_Payload_updatePreview_Color(Page, Type, control_Name, colors, Color){
	var Payload_Source;			
	var Control_Values = Pages[Page][Type][control_Name];
	
	// Check if Source availble and set Payload_Source Path
	try{
		if (Pages[Page].Color_Sources[Control_Values.Color_Control].Sources[$("#" + Control_Values.Color_Control).val()]){
			Payload_Source = Control_Values.Sources[Pages[Page].Color_Sources[Control_Values.Color_Control].Sources[$("#" + Control_Values.Color_Control).val()]];
		}
	}catch(err){
		Payload_Source = Control_Values;
	}
	
	// Set Payload
	payload_default.node_pipe = Payload_Source.Payload.node_pipe;
	payload_default.action = Payload_Source.Payload.action;
	payload_default.index = Payload_Source.Payload.index;
	payload_default.source = Payload_Source.Payload.source;
	payload_default.values = Payload_Source.Payload.values(control_Name) + pad(colors[0], 3) + pad(colors[1], 3) + pad(colors[2], 3);
	if (Payload_Source.Private_Function){
		Payload_Source.Private_Function(Color)
	}
	
	// Send Payload
	Send_Payload(payload_default, false);
}

// Show/Hide the Transmit Loader
function showTransmitting(show, context){
	if (show){
		// Disable body
		$("body").addClass('ui-disabled');
		
		// Show the Loader
		$.mobile.loading( "show", {
			text: context,
			textVisible: true,
			textonly: false
		});
	}else{
		// Hide the Loader
		$.mobile.loading( "hide" );
		// Enable Body
		$("body").removeClass('ui-disabled');			
	}
}

// Build Refresh Action String and Send it to all Connected Clients (Broadcast)
function Get_RefreshValues(pageContainer, initloop, ControlName){
	var refresh_Values = "IR";
	
	// Loop all Controls in Pages.Page.Init
	$.each(Pages[pageContainer].Init, function(key, value) {
		$.each(Pages[pageContainer].Init[key], function(Control, Values) {
			if (Values.Refresh_init == true){
				// No Splitting needed
				if (Values.length){
					if (Values.Private_Refresh_Function){
						refresh_Values += Values.Private_Refresh_Function($("#" + Control).val(), Values.length);
					}else{
						refresh_Values +=  pad($("#" + Control).val(), Values.length);
					}
				// Splitting for Temperature, Humidity and PH
				}else if (Values.length_left){
					refresh_Values +=  	pad($("#" + Control).attr('value').split(".")[0], Values.length_left) + 
										pad($("#" + Control).attr('value').split(".")[1], Values.length_right);
				// Splitting for RGB Color
				}else if (Values.length_color){
					if (Values.Private_Refresh_Function){
						refresh_Values += Values.Private_Refresh_Function();
					}
				}
			}
		});

		// Send Broadcast
		socket.emit('RefreshClients', { 
			page_Contaner: $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' ), 
			refreshValues: refresh_Values,
			init_loop: initloop
		});
		
		refresh_Values = "IR";
		// Set Initloop var to next loop
		initloop ++;
	});
	
	initloop = 0;
}

// Refresh all Controls from pageContainer -> Initloop -> data string (Executed from socket.on('Refresh')) 
function Refresh_ControlValues(pageContainer, data, initloop){
	var Page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	var Type = 'Init';
	var Init_Values = Pages[Page][Type][initloop];
	
	// Check if current Page musr refresh
	if (Page == pageContainer){
		$.each(Init_Values, function(Control, Values) {
			Send_disabled = 1;
			switch (Values.ControlType){
				case "Selectmenus":
					$("#" + Control).val(data.substring(Values.Position.split(",")[0], Values.Position.split(",")[1])).selectmenu('refresh');
					break;
				case "ToggleButton":
					$("#" + Control).val(data.substring(Values.Position.split(",")[0], Values.Position.split(",")[1])).flipswitch('refresh');
					break;
				case "Addicted_ToggleButton":
					// Addicted_ToggleButton will ever refresh with Private_Function
					break;
				case "Slider":
					if (!Values.Private_Function){
						$("#" + Control).val(data.substring(Values.Position.split(",")[0], Values.Position.split(",")[1])).slider("refresh");
					}
					break;
				case "Temperatur":
					$("#" + Control).text(Values.Text + data.substring(Values.Left_Position.split(",")[0], Values.Left_Position.split(",")[1]) + "." + 
						data.substring(Values.Right_Position.split(",")[0], Values.Right_Position.split(",")[1]) + " °C");
					$("#" + Control).attr({'value':data.substring(Values.Left_Position.split(",")[0], Values.Left_Position.split(",")[1]) + "." + 
						data.substring(Values.Right_Position.split(",")[0], Values.Right_Position.split(",")[1])});
					break;
				case "Humidity":
					$("#" + Control).text(Values.Text + data.substring(Values.Left_Position.split(",")[0], Values.Left_Position.split(",")[1]) + "." + 
						data.substring(Values.Right_Position.split(",")[0], Values.Right_Position.split(",")[1]) + " %");
					$("#" + Control).attr({'value':data.substring(Values.Left_Position.split(",")[0], Values.Left_Position.split(",")[1]) + "." + 
					data.substring(Values.Right_Position.split(",")[0], Values.Right_Position.split(",")[1])});
					break;
				case "PH":
					$("#" + Control).text(Values.Text + Values.Left_Position(data) + "."  + 
						data.substring(Values.Right_Position.split(",")[0], Values.Right_Position.split(",")[1]));
					break;
				case "Color":
					Nodes[Pages[Page][Type][initloop - 1]['Payload']['node']].Colours[Control] = "rgb(" + 
						data.substring(Values.R_Position.split(",")[0], Values.R_Position.split(",")[1]) + "," + 
						data.substring(Values.G_Position.split(",")[0], Values.G_Position.split(",")[1])  + "," + 
						data.substring(Values.B_Position.split(",")[0], Values.B_Position.split(",")[1]) + ")";
					break;
			}
			
			// Check for Private Control Function
			if (Values.Private_Function){
				Values.Private_Function(data);
			}
		});

		// Check Private Initloop Function
		if (Init_Values.Private_Function){
			Init_Values.Private_Function(data);
		}
	}
	
	Send_disabled = 0;
}

// Init Function to initialize the defined controls from Payload
function Init_ControlValues(data){
	var Page = $.mobile.pageContainer.pagecontainer('getActivePage').attr( 'id' );
	var Type = 'Init';
	var Init_Values = Pages[Page][Type][initloop];
	
	$.each(Init_Values, function(Control, Values) {
		switch (Values.ControlType){
			case "Selectmenus":
				$("#" + Control).val(data.substring(Values.Position.split(",")[0], Values.Position.split(",")[1])).selectmenu('refresh');
				break;
			case "ToggleButton":
				$("#" + Control).val(data.substring(Values.Position.split(",")[0], Values.Position.split(",")[1])).flipswitch('refresh');
				break;
			case "Addicted_ToggleButton":
				// Addicted_ToggleButton will ever initialize with Private_Function
				break;
			case "Slider":
				if (Control == "Slider_DelayUp_Vib" || Control == "Slider_DelayDown_Vib" || Control == "Slider_RampUp_Vib" || Control == "Slider_RampDown_Vib"){
					$("#" + Control).val(data.substring(Values.Position.split(",")[0], Values.Position.split(",")[1]) / 1000).slider("refresh");
				}else{
					
					$("#" + Control).val(data.substring(Values.Position.split(",")[0], Values.Position.split(",")[1])).slider("refresh");
				}
				break;
			case "Temperatur":
				$("#" + Control).text(Values.Text + data.substring(Values.Left_Position.split(",")[0], Values.Left_Position.split(",")[1]) + "." + 
					data.substring(Values.Right_Position.split(",")[0], Values.Right_Position.split(",")[1]) + " °C");
				$("#" + Control).attr({'value': data.substring(Values.Left_Position.split(",")[0], Values.Left_Position.split(",")[1]) + "." + 
					data.substring(Values.Right_Position.split(",")[0], Values.Right_Position.split(",")[1])});
				break;
			case "Humidity":
				$("#" + Control).text(Values.Text + data.substring(Values.Left_Position.split(",")[0], Values.Left_Position.split(",")[1]) + "." + 
					data.substring(Values.Right_Position.split(",")[0], Values.Right_Position.split(",")[1]) + " %");
				$("#" + Control).attr({'value':data.substring(Values.Left_Position.split(",")[0], Values.Left_Position.split(",")[1]) + "." + 
				data.substring(Values.Right_Position.split(",")[0], Values.Right_Position.split(",")[1])});
				break;
			case "PH":
				$("#" + Control).text(Values.Text + Values.Left_Position(data) + "."  + 
					data.substring(Values.Right_Position.split(",")[0], Values.Right_Position.split(",")[1]));
				$("#" + Control).attr({'value': Values.Left_Position(data) + "."  + 
					data.substring(Values.Right_Position.split(",")[0], Values.Right_Position.split(",")[1])});
				break;
			case "Color":
				Nodes[Pages[Page][Type][initloop - 1].Payload.node].Colours[Control] = "rgb(" + 
					data.substring(Values.R_Position.split(",")[0], Values.R_Position.split(",")[1]) + "," + 
					data.substring(Values.G_Position.split(",")[0], Values.G_Position.split(",")[1])  + "," + 
					data.substring(Values.B_Position.split(",")[0], Values.B_Position.split(",")[1]) + ")";
				break;
		}
		
		// Check for Private Control Function
		if (Values.Private_Function){
			Values.Private_Function(data);
		}
	});

	// Check Private Initloop Function
	if (Init_Values.Private_Function){
		Init_Values.Private_Function(data);
	}
	
	// Check if Payload for next Initloop available
	if (Init_Values.Payload){
		initloop ++;
		// Set Payload
		Set_Payload(Page, Type, initloop -1);
	}else{
		initloop = 1;
		init = false;
		showTransmitting(false, "");
	}
}

// Set and Send Payload for Buttons
function Set_Button(Page, Type, Button){
	var Toggle_Values = Pages[Page][Type][Button];
	
	// Set Payload
	Set_Payload(Page, Type, Button);
}

// Set and Send Payload for Addicted_ToggleButtons
function Set_FavoriteAddicted_ToggleButton(Page, ToggleButton){
	var Toggle_Values = Pages[Page].Addicted_ToggleButtons[ToggleButton];
	
	// Set Payload
	Set_Payload(Page, "Addicted_ToggleButtons", ToggleButton);
}

// Set and Send Payload for ToggleButtons
function Set_ToggleButton(Page, Type, ToggleButton){
	var Toggle_Values = Pages[Page][Type][ToggleButton];
	
	// Set Payload
	Set_Payload(Page, Type, ToggleButton);
	
	// switch Reference_ToggleButtons
	if(Toggle_Values.Reference_ToggleButtons){
		var arrReference_ToggleButtons = Toggle_Values.Reference_ToggleButtons.split(",");
		$.each(arrReference_ToggleButtons, function( key, Reference_ToggleButton ) {
			Send_disabled = 1;
			$("#" + Reference_ToggleButton).val($("#" + Toggle_Values.Name).val()).flipswitch('refresh');
		});
	}
	
	// Check for Private Control Function
	if (Toggle_Values.Private_Function){
		Toggle_Values.Private_Function();
	}
			
	Send_disabled = 0;
}

// Set and Send Payload for SelectMenus
function Set_SelectMenu(Page, Type, SelectMenu, Send_Payload){
	var SelectMenus = Pages[Page][Type][SelectMenu];
	
	Set_Payload(Page, Type, SelectMenu); 
	
	// Check for Private Control Function
	if (SelectMenus.Private_Function){
		SelectMenus.Private_Function();
	}
}

// Sends the Preview-Color
var updatePreview_Color = function (){
	
	// Send the Payload if init = false and receive_Color = true
	// receive_Color validates the ColorPicker selection (to disable execution if color is set manual)
	if (!init && receive_Color){
		
		// Get Color Values
		var color = $(this).chromoselector('getColor');
		var colors = Get_ColorValues(color);
		var set_Color = "rgb(" + pad(colors[0], 3) + "," + pad(colors[1], 3)  + "," + pad(colors[2], 3) + ")";
		control_Name = $(this)[0].name;
		
		// needed for the ColorPIcker Input Field to Update Color
		$(this).css({
			'background-color': color.getRgbString(),
			'color': color.getTextColor().getRgbString(),
			'text-shadow': '0 1px 0 ' + color.getTextColor().getTextColor().getRgbString()
		});
	
		// color_trigger handles the send interval to the Node (chromoselector update triggers every 100ms)
		if (color_trigger == 1){
			// Set the Payload
			Set_Payload_updatePreview_Color($.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' ),"Color_Controls", control_Name, colors, set_Color);
			color_trigger = 0;
		}else{
			color_trigger ++;
		}
	}
};

// Set ColorControls (includes Default_Color_Buttons)					
function Set_ControlsColor(Page, Type, SourceName, SetDefaultColor, Node){
	var Source_Values;
	var Color_Control;
	var Color_Source_Value;
	var color;
	var Default_Button_Sources;
	var Set_Color_Control = false;
	var Color_Picker_Val;
	var Set_Color_Picker_Val;
	var Source_Control_Available = false;
	var Source_Name;
	
	// if color IS NOT SET from a Default_ColorButton
	if (SetDefaultColor == false){
		Source_Values = Pages[Page][Type][SourceName];
		
		// if Color_Source Control (ComboBox to select solor source) IS DEFINED 
		if (Node.Colours[Source_Values.Sources[$("#" + SourceName).val()]]){
			Source_Values = Pages[Page][Type][SourceName];
			Color_Control = Source_Values.Color_Control;
			Color_Picker_Val = Node.Colours[Source_Values.Sources[$("#" + SourceName).val()]];
			// Set Color on Node Object and in ColorPicker
			Node.Colours[Source_Values.Sources[$("#" + SourceName).val()]] = Get_ColorRGBString(Color_Picker_Val);
			$("#" + Color_Control).chromoselector('setColor', Color_Picker_Val);
			color = $("#" + Color_Control).chromoselector('getColor');
		// if Color_Source Control (ComboBox to select solor source) is NOT DEFINED 
		}else{
			Source_Values = Pages[Page][Type];
			Color_Control = Pages[Page].Color_Controls[SourceName].Color_Control;
			// Loop all Control Sources (only one is allowed) to get the first entry
			$.each(Pages[Page].Color_Controls[Color_Control].Sources, function( key, value ) {
				if (key != 'Node'){
					Color_Source_Value = key;
				}
			});
			Color_Picker_Val = Source_Values[SourceName].Sources[Color_Source_Value];
			Source_Name = Pages[Page].Color_Controls[Color_Control].Sources[parseInt(Color_Source_Value)]
			// Set Color on Node Object and in ColorPicker
			Node.Colours[Source_Name] = Get_ColorRGBString(Node.Colours[Color_Picker_Val]);;
			$("#" + Color_Control).chromoselector('setColor', Node.Colours[Color_Picker_Val]);
			color = $("#" + Color_Control).chromoselector('getColor');
		}
		$("#" + Color_Control).css({
			'background-color': color.getRgbString(),
			'color': color.getTextColor().getRgbString(),
			'text-shadow': '0 1px 0 ' + color.getTextColor().getTextColor().getRgbString()
		});
	// if color IS SET from a Default_ColorButton
	}else{
		Source_Values = Pages[Page][Type];
			
		// Check if Color_Source Control (ComboBox to select solor source) IS DEFINED and set value in Source_Control_Available
		if (Pages[Page].Color_Sources){
			Source_Control_Available = true;
		}else{
			Source_Control_Available = false;
		}
		
		// if Color_Source Control (ComboBox to select solor source) IS DEFINED 
		if (Source_Control_Available){
			Color_Control = Pages[Page].Color_Sources[Pages[Page].Color_DefaultButtons[SourceName].Color_Sources].Color_Control;
			Color_Source_Value = $("#" + Pages[Page].Color_DefaultButtons[SourceName].Color_Sources).val();
			
			// Loop all Control Sources (only one is allowed) to get the first entry
			$.each(Pages[Page].Color_DefaultButtons[SourceName].Source, function( key, value ) {
				if (key != 'Node'){
					Default_Button_Source = key;
				}
			});
			
			// Loop all Control Sources (only one is allowed) to get the first entry
			$.each(Pages[Page][Type][SourceName].Source, function( key, value ) {
				if (key != 'Node'){
					Color_Picker_Val = Source_Values[SourceName].Source[key];
					Source_Name = Pages[Page].Color_Sources[Pages[Page].Color_DefaultButtons[SourceName].Color_Sources].Sources[key];
					
					if (Color_Source_Value == key){
						// Set Color on Node Object and in ColorPicker
						Node.Colours[Source_Name] = Get_ColorRGBString(Color_Picker_Val);
						$("#" + Color_Control).chromoselector('setColor', Color_Picker_Val);
						color = $("#" + Color_Control).chromoselector('getColor');
						$("#" + Color_Control).css({
							'background-color': color.getRgbString(),
							'color': color.getTextColor().getRgbString(),
							'text-shadow': '0 1px 0 ' + color.getTextColor().getTextColor().getRgbString()
						});
					}else{
						// Set Node Color
						Node.Colours[Source_Name] = Get_ColorRGBString(Color_Picker_Val);
					}
				}
			});
		// if Color_Source Control (ComboBox to select solor source) is NOT DEFINED 
		}else{
			Color_Source_Value = $("#" + Pages[Page].Color_DefaultButtons[SourceName].Color_Sources).val();
			// Loop all Control Sources (only one is allowed) to get the first entry
			$.each(Pages[Page].Color_DefaultButtons[SourceName].Source, function( key, value ) {
				if (key != 'Node'){
					Color_Source_Value = key;
				}
			});

			Color_Control = Pages[Page].Color_DefaultButtons[SourceName].Color_Control;
			Color_Picker_Val = Source_Values[SourceName].Source[Color_Source_Value];
			Source_Name = Pages[Page].Color_Controls[Color_Control].Sources[parseInt(Color_Source_Value)]
			
			// Set Color on Node Object and in ColorPicker
			Node.Colours[Source_Name] = Get_ColorRGBString(Color_Picker_Val);;
			$("#" + Color_Control).chromoselector('setColor', Color_Picker_Val);
			color = $("#" + Color_Control).chromoselector('getColor');
			$("#" + Color_Control).css({
				'background-color': color.getRgbString(),
				'color': color.getTextColor().getRgbString(),
				'text-shadow': '0 1px 0 ' + color.getTextColor().getTextColor().getRgbString()
			});
		}
	}
}
// ********* END Client Source ****************************************************************************************************

/*
// ********* Own Functions ****************************************************************************************************
// Custom Dialog for PH Calibration
function doCustomDialog(text1, button1, button2, callback) {
    $("#customDialog .customDialogDesc").text(text1);

    $("#customDialog .customDialogOption1").text(button1).one("click.customDialog", function () {
        callback("Calibrate");
    });

    $("#customDialog .customDialogOption2").text(button2).one("click.customDialog", function () {
        callback("Cancel");
    });
	
    $("#customDialog").popup("open");
}
$(document).on("popupafterclose", "#customDialog", function () {
    $('#customDialog a').off('click');
});

// Set Vibrator Layout from selected Source
function Set_VibratorLayout(){		
	switch ($('#Selectmenu_VibSources_Vib').val()){
		case "1": case "2": case "5":
			switch ($('#Selectmenu_VibProgramms_Vib').val()){
				// Programm Continious
				case "1":
					$('#VibPump').hide();
					$('#VibDelay').hide();
					$('#VibRamp').hide();
					break;
				// Programm Pulse
				case "2":
					$('#VibPump').hide();
					$('#VibDelay').show();
					$('#VibRamp').hide();
					break;
				// Programm Fade
				case "3":
					$('#VibPump').hide();
					$('#VibDelay').show();
					$('#VibRamp').show();
					break;

			}
			break;
		case "3":
			switch ($('#Selectmenu_VibProgramms_Vib').val()){
				// Programm Continious
				case "1":
					$('#VibMinPower_Container').hide();
					$('#VibPump').show();
					$('#VibDelay').hide();
					$('#VibRamp').hide();
					break;
				// Programm Pulse
				case "2":
					$('#VibMinPower_Container').show();
					$('#VibPump').show();
					$('#VibDelay').show();
					$('#VibRamp').hide();
					break;
				// Programm Fade
				case "3":
					$('#VibMinPower_Container').show();
					$('#VibPump').show();
					$('#VibDelay').show();
					$('#VibRamp').show();
					break;
				
			}
			break;
	}
}

// Start/Stop the Vibrator Animation
function handle_VibAnimation(animation_state){
	if (!loop_VibAnimation){
		loop_VibAnimation = true;
		VibratorAnimation(animation_state);
	}
}

// Vibrator Animation for the selected Programm
function VibratorAnimation(animation_state){
	// check to stop loop from var loop_VibAnimation (need to exit function an start new animation)
	if (!loop_VibAnimation){
		animation_state = 'stop';
	}
	
	// stop animation and set to 0 
	if ($('#ToggleButton_VibPower_Vib').val() == 0){
		$(".VibAnimation > span")
			.stop( true, true)
			.width('0%')
			.animate({width: '0%'}, 500);
		loop_VibAnimation = false;
	}else{
		switch ($('#Selectmenu_VibProgramms_Vib').val()){
			// continous
			case '1':
				$(".VibAnimation > span")
					.width('0%')
					.animate({width: (Math.round(($('#Slider_MaxPower_Vib').val() / 255) * 100) + '%')}, 500);
				loop_VibAnimation = false;
				break;
			case '2':
				switch (animation_state){
					case 'stop':
						$(".VibAnimation > span")
							.stop( true, true)
							.width('0%')
							.animate({width: '0%'}, 500);
						loop_VibAnimation = false;
						break;
					case 'speed_up':
						$(".VibAnimation > span")
							.width((Math.round(($('#Slider_MinPower_Vib').val() / 255) * 100) + '%'))
							.animate({width: (Math.round(($('#Slider_MaxPower_Vib').val() / 255) * 100) + '%')}, 0, function(){ VibratorAnimation('speed_down') }) 
							.delay($('#Slider_DelayUp_Vib').val() * 1000);
						break;
					case 'speed_down':
						$(".VibAnimation > span") 
							.width((Math.round(($('#Slider_MaxPower_Vib').val() / 255) * 100) + '%'))
							.animate({width: (Math.round(($('#Slider_MinPower_Vib').val() / 255) * 100) + '%')}, 0, function(){ VibratorAnimation('speed_up') })
							.delay($('#Slider_DelayDown_Vib').val() * 1000);
						break;
				}
				break;
			case '3':
				switch (animation_state){
					case 'stop':
						$(".VibAnimation > span")
							.stop( true, true)
							.width('0%')
							.animate({width: '0%'}, 500);
						loop_VibAnimation = false;
						break;
					case 'speed_up':
						$(".VibAnimation > span")
							.width((Math.round(($('#Slider_MinPower_Vib').val() / 255) * 100) + '%'))
							.animate({width: (Math.round(($('#Slider_MaxPower_Vib').val() / 255) * 100) + '%')}, $('#Slider_RampUp_Vib').val() * 1000, function(){ VibratorAnimation('speed_down') })
							.delay($('#Slider_DelayUp_Vib').val() * 1000)
						break;
					case 'speed_down':
						$(".VibAnimation > span") 
							.width((Math.round(($('#Slider_MaxPower_Vib').val() / 255) * 100) + '%'))
							.animate({width: (Math.round(($('#Slider_MinPower_Vib').val() / 255) * 100) + '%')}, $('#Slider_RampDown_Vib').val() * 1000, function(){ VibratorAnimation('speed_up') })
							.delay($('#Slider_DelayDown_Vib').val() * 1000)
						break;
				}
				break;
		}
	}
}
// ********* END User Source ****************************************************************************************************
*/

// ********* Helpers ****************************************************************************************************
// fill up a string with additional "0"'s
function pad (str, max) {
	if (str == "0"){
		switch (max){
			case 1:
				return "0";
				break;
			case 2:
				return "00";
				break;
			case 3:
				return "000";
				break;
			case 4:
				return "0000";
				break;
			case 5:
				return "00000";
				break;
		}
	}else{
		str = str.toString();
		return str.length < max ? pad("0" + str, max) : str;
	}
}

// Get all Controls from Page and build JQuery String
function Get_Controls(Page, Type){
	var result;
	if (Pages[Page][Type]){
		$.each(Pages[Page][Type], function( key, value ) {
			if (!result){
				result = "#" + key;
			}else{
				result += ", #" + key;	
			}
		});
	}
	return result;
}

// Get all Controls from Page and build JQuery String
function Get_ControlsfromType(Type){
	var result
	$.each(Pages, function( PageId, Controls ) {
		if (Controls[Type]){
			$.each(Controls[Type], function( Control, Values ) {
				if (!result){
					result = "#" + Control;
				}else{
					result += ", #" + Control;	
				}
			});
		}
	});
	return result;
}

// Get all Pages and build JQuery String
function Get_Pages(){
	var result;
	
	$.each(Pages, function( key, value ) {
		if (!result){
			result = "#" + key;
		}else{
			result += ", #" + key;	
		}
	});

	return result;
}

// Get Color Values from RGB Formated String
function Get_ColorValues(color){
	var colors_temp = color.getRgbString().substring(4,color.getRgbString().length);
	colors_temp = colors_temp.substring(0,colors_temp.length-1);
	return colors_temp.split(',');
}

// Format RGB Color Values with padding
function Get_ColorRGBString(color){
	var colors_temp = color.substring(4,color.length);
	colors_temp = colors_temp.substring(0,colors_temp.length-1);
	colors_temp = colors_temp.split(',');
	return "rgb(" + pad(colors_temp[0], 3) + "," + pad(colors_temp[1], 3)  + "," + pad(colors_temp[2], 3) + ")";
}
// ********* END Helpers ****************************************************************************************************


// ********* JQuery Mobile ****************************************************************************************************
// On Application init
$(document).on("mobileinit", function() {
	// Connect Client to Socket.Io
	socket = io.connect('http://' + document.domain + ':3800'); //192.168.178.99:3800');
	
	// Get Init Objects
	socket.emit('init', {});
	
	socket.on('init', function (data) {
		Tasks = data.Tasks;
	});

	Init_Control_Options();
	
	// Define Sockets
	socket.on('Refresh', function(data){
		Send_disabled = 1;
		Refresh_ControlValues(data.page_Contaner, data.refreshValues, data.init_loop);
	});
				
	socket.on("callbackButton", function(data){
		if (init == true || initloop > 1){
			Init_ControlValues(data.state);
		}else if (init == false){
			showTransmitting(false, "");
			// ToDo: Change Refresh to all or to Control (Require Include ControlType, Control Name); in next Version Update
			Get_RefreshValues($.mobile.pageContainer.pagecontainer( 'getActivePage' ).attr( 'id' ), 0, "ControlName");
		}
	}); 
	
	socket.on("callbackError", function(data){
		showTransmitting(false, "");
		alert ("Error: " + data.error);
		initloop = 1;
		init = false;
	});
	
	socket.on('callbackAlert', function(data){
		switch (data.state.substring(5,8)){
			case "x01":
				switch (data.state.substring(8,10)){
					// Aquarium Calibration Step 2
					case "01":
						showTransmitting(false, "");
						doCustomDialog("Vor dem bestätigen muss die PH-Elektrode in die PH-4 Pufferlösung gestellt werden.", "Calibrate", "Cancel",
						function (returned) {
							//Do things depending on the clicked button
							switch (returned){
								case "Calibrate":
									init = false;
									showTransmitting(true, "Kalibrierung PH-4 wird durchgeführt. Bitte warten...");
					
									// Switch to Aquarium relay and Set Payload
									payload_default['node_pipe'] = Nodes.Aquarium.Pipe;
									payload_default['action'] = Nodes.Aquarium.Actions.Calibration;
									payload_default['source'] = Nodes.Aquarium.Sources.Unused;
									payload_default['index'] = Nodes.Aquarium.Index.Calibration.PH_4;
									payload_default['values'] = Nodes.Aquarium.Unused_Value;
					
									// send payload
									Send_Payload(payload_default, false);
					
									// Switch to Livingroom
									payload_default['node_pipe'] = Nodes.Livingroom_Media.Pipe;
									break
								case "Cancel":
									break
							}
						});
						break;
					// Aquarium Calibration successfull
					case "02":
						showTransmitting(false, "");
						$("#SuccessCalibration").popup("open");
						break;
					case "03":
						showTransmitting(false, "");
						$("#FailCalibration").popup("open");
						break;	
				}
				break;
			case "x03":
				switch (data.state.substring(8,10)){
					// Gestue Up =  LED Stripe An
					case "01":
						showTransmitting(false, "");
						Send_disabled = 1;
						$("#Combined_ToggleButton_Relay_Liv_Room_1_Fav").val("0").flipswitch('refresh');
						break
					// Gestue Down = =  LED Stripe Aus
					case "02":
						showTransmitting(false, "");
						Send_disabled = 1;
						$("#Combined_ToggleButton_Relay_Liv_Room_1_Fav").val("1").flipswitch('refresh');
						break
					// Gesture Left = Media Aus
					case "03":
						showTransmitting(false, "");
						Send_disabled = 1;
						$("#Combined_ToggleButton_Relay_Liv_Media_1_Fav").val("1").flipswitch('refresh');
						break
					// Gesture Right = Media An
					case "04":
						showTransmitting(false, "");
						Send_disabled = 1;
						$("#Combined_ToggleButton_Relay_Liv_Media_1_Fav").val("0").flipswitch('refresh');
						break
					// Gesture Near = Aquarium An
					case "05":
						showTransmitting(false, "");
						Send_disabled = 1;
						$("#Combined_ToggleButton_Relay_Liv_Aqua_1_Fav").val("0").flipswitch('refresh');
						break
					// Gesture Far = Aquarium Aus
					case "06":
						showTransmitting(false, "");
						Send_disabled = 1;
						$("#Combined_ToggleButton_Relay_Liv_Aqua_1_Fav").val("1").flipswitch('refresh');
						break
				}
		}
	});

});

// On Page show
$(document).on('pageshow', Get_Pages() ,function(){
	init = true;
	initloop = 0;
	Set_Payload($(this)[0].id, "Init", initloop);

	$("#confirm").click(function () {
        doCustomDialog("Vor dem bestätigen muss die PH-Elektrode in die PH-7 Pufferlösung gestellt werden.<br>Bereiten Sie auch die PH-4 Pufferlösung für den nächsten Schritt vor.", "Calibrate", "Cancel",

        function (returned) {
            //Do things depending on the button clicked, for now just display which button was clicked 
			switch (returned){
				// Aquarium Calibration Step 1
				case "Calibrate":
					init = false;
					showTransmitting(true, "Kalibrierung PH-7 wird durchgeführt. Bitte warten...");
					
					// Switch to Aquarium relay
					payload_default['node_pipe'] = Nodes.Aquarium.Pipe;
					payload_default['action'] = Nodes.Aquarium.Actions.Calibration;
					payload_default['source'] = Nodes.Aquarium.Sources.Unused;
					payload_default['index'] = Nodes.Aquarium.Index.Calibration.PH_7;
					payload_default['values'] = Nodes.Aquarium.Unused_Value;
					
					// send payload
					Send_Payload(payload_default, false);
					
					// Switch to Livingroom
					payload_default['node_pipe'] = Nodes.Livingroom_Media.Pipe;
					break
				case "Cancel":
					break
			}
        });
    });	
});

// On Page init
$(document).on('pageinit', Get_Pages() ,function(){
	// Action  Source  Index    Value
	// 10-99   01-99   1-9    0001-9999
	
	var Page_Name = $(this)[0].id;
	// Aktivate send requests 
	Send_disabled = 0;
	
	// Init ColorPicker with default Options (default Options init in Function Init_Control_Options())
	$(Get_Controls(Page_Name, "Color_Controls")).chromoselector(ColorPicker_Defaults);
	
	// Init Color Sources
	$(document).on('change', Get_ControlsfromType("Color_Sources"), function(e) {
		if (!init){
			Set_ControlsColor(Page_Name, "Color_Sources", this.name, false, Pages[Page_Name].Color_Sources[this.name].Sources.Node); 
		}
	});
	
	// Init Refresh-Controls
	$(Get_ControlsfromType("Refresh_Controls")).on('click', function() {
		// Set Init-State true
		init = true;
		// Set the Payload
		Set_Payload(Page_Name, "Refresh_Controls", this.name);
	});
	
	// Init Buttons
	$(Get_ControlsfromType("Buttons")).on('change', function() {
		if (!init){
			if (Send_disabled == 0){
				Set_Button(Page_Name, "Buttons", this.name);
			}
		}
	});
	
	// Init Toggle Buttons
	$(Get_ControlsfromType("ToggleButtons")).on('change', function() {
		if (!init){
			if (Send_disabled == 0){
				Set_ToggleButton(Page_Name, "ToggleButtons", this.name);
			}
		}
	});
	
	// Init Combined Toggle Buttons
	$(Get_ControlsfromType("Combined_ToggleButtons")).on('change', function() {
		if (!init){
			if (Send_disabled == 0){
				Set_ToggleButton(Page_Name, "Combined_ToggleButtons", this.name);
			}
		}
	});
	
	// Init Addicted Toggle Buttons
	$(Get_ControlsfromType("Addicted_ToggleButtons")).on('change', function() {
		if (!init){
			if (Send_disabled == 0){
				Set_FavoriteAddicted_ToggleButton(Page_Name, this.name);
			}
		}
	});
	
	// Init Favorite Toggle Buttons
	$(Get_ControlsfromType("Favorite_ToggleButtons")).on('change', function() {
		if (!init){
			if (Send_disabled == 0){
				Set_ToggleButton(Page_Name, "Favorite_ToggleButtons", this.name);
			}
		}
	});
	
	// Init Default Color Buttons
	$(Get_ControlsfromType("Color_DefaultButtons")).on('click', function(){
		if (!init){
			showTransmitting(true, "");
			// Set Payload
			Set_Payload(Page_Name, "Color_DefaultButtons", this.name);
			Set_ControlsColor(Page_Name, "Color_DefaultButtons", this.name, true, Pages[Page_Name].Color_DefaultButtons[this.name].Source.Node);
		}
	});
	
	// Init Sliders
	$(Get_ControlsfromType("Sliders")).on('slidestop', function( event ) {
		if (!init){
			if (Send_disabled == 0){
				// Send Payload
				Set_Payload(Page_Name, "Sliders", this.name);
			}
		}
	});
	
	// Init Selectmenus
	$(document).on('change', Get_ControlsfromType("Selectmenus"), function(e) {
		if (!init){
			if (Send_disabled == 0){
				Set_SelectMenu(Page_Name, "Selectmenus", this.name, true);
			}
		}
	});

});
// ********* END JQuery Mobile ****************************************************************************************************