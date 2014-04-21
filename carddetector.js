//Grab the element to change and store it, save us rescanning the DOM each time
var elem = document.getElementById('result');

//Function to parse the cardNumber and match it up to a card type
function getCreditCardType(cardNumber) {
    var result = 'unknown';
    
    //Mastercard
    if (/^5[1-5]/.test(cardNumber)) {
        result = 'mastercard';
    }
    
    //Visa
    else if (/^4/.test(cardNumber)) {
        result = 'visa';
    }
    
    //Amex
    else if (/^3[47]/.test(cardNumber)) {
        result = 'amex';
    }
    
    return result;
}

//Function to trigger the check when use enters a number or pastes it in to the field
function handleEvent(event) {
    var value = event.target.value,
        type = getCreditCardType(value);
    
    //Check if the card type is unknown
    if (type === 'unknown') {
        elem.src = "img/credit.png";
    } else {
        //Otherwise display the type. Could do this as an image?
        elem.src = "img/" + type + ".png";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var textbox = document.getElementById('former');
    //If user enters a key or pastes a value into the element, handleEvent!
    textbox.addEventListener('keyup', handleEvent, false);
    textbox.addEventListener('blur', handleEvent, false);
}, false);