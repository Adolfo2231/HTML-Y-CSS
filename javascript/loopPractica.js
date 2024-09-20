
function validateCard(cardNumber) {


        let total = 0
        let numDigitos = cardNumber.length
    console.log(numDigitos)
    
    for (let i = 0; i < cardNumber.length; i++){

        total = cardNumber.map(parseInt(cardNumber[i]))
        console.log(total)

    }
    
}

// Example usage:
validateCard(378282246310005);  // Should print AMEX
validateCard("5105105105105100"); // Should print MASTERCARD
validateCard("123456789012345");  // Should print INVALID

