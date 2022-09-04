// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import {returnHashedObject} from 'backend/handleCreation'
import {saveDB} from 'backend/handleCreation'
import {createRoom} from 'backend/handleCreation'
import wixLocation from 'wix-location';

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button2_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	if($w('#input1').value.length > 0 && $w('#input3').value.length > 0 && $w('#input4').value.length > 0 && $w('#input2').value.length > 0 && $w('#dropdown1').value.length > 0 && $w('#input5').value.length > 0 ) {
		returnHashedObject($w('#input1').value, $w('#input3').value, $w('#input4').value, $w('#input2').value, $w('#dropdown1').value, $w('#input5').value).then(item =>{
			saveDB(item);	
			if( $w('#dropdown1').value == "Teacher") {
				createRoom(($w('#input1').value+" "+$w('#input3').value+"'s Room"));
			}
		});
		wixLocation.to("/")
	}
}

$w.onReady(function () {
	
});

/**
*	Adds an event handler that runs when an input element's value
 is changed.
	[Read more](https://www.wix.com/corvid/reference/$w.ValueMixin.html#onChange)
*	 @param {$w.Event} event
*/
export function dropdown1_change(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	if($w('#dropdown1').value == "Teacher") {
		$w('#input5').disable()
		$w('#input5').value = "None";
	}		
	else{
		$w('#input5').enable()	
	}
}