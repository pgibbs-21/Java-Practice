function calculatePriceDifference() {
    // Get values from the input boxes
    let ourPrice = parseFloat(document.getElementById("ourPrice").value);
    let competitorPrice = parseFloat(document.getElementById("competitorPrice").value);

    // Check if both inputs are valid numbers
    if (!isNaN(ourPrice) && !isNaN(competitorPrice)) {
        // Calculate the price difference
        let beat1 = competitorPrice * 0.95; // 95% of competitor's price
        let difference = ourPrice - beat1;

        // Display the result on the webpage
        document.getElementById("result").innerText = "Subtract from List Price: " + difference.toFixed(2);
    } else {
        // Display an error message if inputs are invalid
        document.getElementById("result").innerText = "Please enter valid prices.";
    }
}