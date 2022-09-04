// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction
import wixLocation from 'wix-location';
import wixData from 'wix-data';

// const accountSid = 'AC065f2299affad494047036013f681b1a'; 
// const authToken = '[AuthToken]'; 
// const client = require('twilio')(accountSid, authToken); 
 


let url = wixLocation.url;

$w.onReady(function () {
	$w('#button2').disable()
	$w('#box3').hide()
	$w("#repeater1").forEachItem(($item, itemData, index) => {
		let id = itemData._id;
		console.log($w("#text8").html)
	});
});

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/ 

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/

export function button1_click_1(event) {
	wixLocation.to('/rooms');
}

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function input1_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#button2').enable();
}

export function input2_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#button2').enable();
}

export function input3_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#button2').enable();
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button2_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	let nm = $w('#input4').value;
	let tc  = $w('#input1').value;
	let tt  = $w('#input2').value;
	let cc  = $w('#input3').value;
	let toSave = {
			"title": tt,
			"name": nm,
			"teacher":tc,
			"comment": cc, 
            "response": "No response" //HEY TEACH! YOU CANT DO THAT TEACH!
		}
    wixData.save("comments", toSave)
	wixLocation.to("/rooms");
	// client.messages 
    //   .create({ 
    //      body: 'A message has been added to your discussion board',       
	// 	 messagingServiceSid: 'Sm376512x65652139hwt673', 
    //      to: '+16692643117' 
    //    }) 
    //   .then(message => console.log(message.sid)) 
    //   .done();

}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button3_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#dataset1').setSort(wixData.sort().ascending("comment"))
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function container1_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: 
	$w('#box3').show()
	
}

/**
*	Adds an event handler that runs when the element is clicked.
	[Read more](https://www.wix.com/corvid/reference/$w.ClickableMixin.html#onClick)
*	 @param {$w.MouseEvent} event
*/
export function button4_click(event) {
	// This function was added from the Properties & Events panel. To learn more, visit http://wix.to/UcBnC-4
	// Add your code for this event here: \
	$w("#text9").text = $w('#input5').value;
	$w('#box3').hide();
}