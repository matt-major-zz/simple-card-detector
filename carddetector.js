//Function to parse the cardNumber and match it up to a card type
function getCreditCardType(cardNumber) {
    var result = 'unknown';
    
    //Mastercard
    if (/^5[1-5]/.test(cardNumber)) {
        result = 'MasterCard';
    }
    
    //Visa
    else if (/^4/.test(cardNumber)) {
        result = 'Visa';
    }
    
    //Amex
    else if (/^3[47]/.test(cardNumber)) {
        result = 'Amex';
    }
    
    return result;
}

//Function to trigger the check when use enters a number or pastes it in to the field
function handleEvent(event) {
    var value = event.target.value,
        type = getCreditCardType(value),
        elem = document.getElementById('result');
    
    //Check if the card type is unknown
    if (type === 'unknown') {
        elem.innerHTML = "Awaiting valid card number...";
    } else {
        //Otherwise display the type. Could do this as an image?
        elem.innerHTML = "The card type is " + type;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var textbox = document.getElementById('former');
    //If user enters a key or pastes a value into the element, handleEvent!
    textbox.addEventListener('keyup', handleEvent, false);
    textbox.addEventListener('blur', handleEvent, false);
}, false);