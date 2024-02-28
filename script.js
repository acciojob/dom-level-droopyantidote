// Get the element with the id "level"
var targetElement = document.getElementById('level');

// Initialize a variable to count the DOM level
var domLevel = 0;

// Traverse through the parent elements until reaching the root html element
while (targetElement !== null && targetElement.tagName !== 'HTML') {
    // Move to the parent element
    targetElement = targetElement.parentElement;
    // Increment the DOM level
    domLevel++;
}

// Display the DOM level using alert
alert("The level of the element is: " + domLevel);
