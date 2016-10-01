// Private Vars
var loop_VibAnimation = false;

// ********* Private Functions ****************************************************************************************************
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
// ********* END Private Functions ****************************************************************************************************
