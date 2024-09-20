
function validateCard(cardNumber) {
    function luhnAlgorithm(cardNumber) {
        let total = 0;
        let numDigits = cardNumber.length;
        console.log(numDigits)
        let oddeven = numDigits % 2;
        console.log(oddeven)

        for (let i = 0; i < numDigits; i++) {
            let digit = parseInt(cardNumber[i]);
            console.log(cardNumber[i])

            if ((i % 2) === oddeven) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9;
                }
            }

            total += digit;
        }

        return (total % 10) === 0;
    }

    // Check if the card number is valid using Luhn's Algorithm
    if (!luhnAlgorithm(cardNumber)) {
        console.log("INVALID");
        return;
    }

    // Check the length and starting digits for AMEX and MasterCard
    if (cardNumber.length === 15 && (cardNumber.startsWith("34") || cardNumber.startsWith("37"))) {
        console.log("AMEX");
    } else if (cardNumber.length === 16 && ["51", "52", "53", "54", "55"].includes(cardNumber.substring(0, 2))) {
        console.log("MASTERCARD");
    } else {
        console.log("INVALID");
    }
}

// Example usage:
validateCard("378282246310005");  // Should print AMEX
validateCard("5105105105105100"); // Should print MASTERCARD
validateCard("123456789012345");  // Should print INVALID
