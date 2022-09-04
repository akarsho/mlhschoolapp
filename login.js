// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixLocation from 'wix-location';
import wixData from 'wix-data';
import {sha1Encrypt} from 'backend/handleCreation'

$w.onReady(function () {

});

export function button2_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	wixLocation.to("/register")
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button1_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	if($w('#input1').value.length > 0 && $w('#input2').value.length > 0){
		wixData.query('accountinfo')
		.contains("name",$w('#input1').value)
		.find()
		.then((results) => {
			if(results.items.length > 0){
				let item = results.items[0];
				sha1Encrypt($w('#input2').value).then((ogPass) => {
					if(item.hashedpass == ogPass) {
						console.log("Match found!");
						wixLocation.to("/rooms")
					}
				});
			}else{
				console.log("Not found!");
			}
		})
	}
}