(function () {
    // Main function
    async function main() {
        const elements = getHtmlElements(); 
        clickAllButtons(elements);
       
        await sleep(250); // Wait a few seconds to allow page loading

        selectSuccessRadio();
        clickAllButtons(elements);
        
        scrollToBottom();
    }

    // Function to get HTML elements
    function getHtmlElements() {
		// Select all elements with the specific classes
		return document.querySelectorAll(
			'.px-4.pb-8.lg\\:px-8.lg\\:pb-6.card.mb-4.lg\\:mb-6, .button-outline-default-large.hidden.min-w-48.mr-6.lg\\:flex.lg\\:items-center'
    );
}


    function clickAllButtons(elements) {
		// For each selected element, find and click the button
		elements.forEach((element, index) => {
			// Check if the element itself is a button
			if (element.tagName.toLowerCase() === 'button') {
				console.log(`Element ${index + 1} is a button, simulating click.`);
				element.click(); // Simulate a button click if the element itself is a button
				return; // Exit early to avoid further checks
			}

			// Look for a button inside the element
			const button = element.querySelector('button'); // Select button inside the element

			if (button) {
				console.log(`Button found inside element ${index + 1}, simulating click.`);
				button.click(); // Simulate a button click
			} else {
				console.log(`No button found for element ${index + 1}.`);
				console.log(element);
        }
    });
}

    // Function to select radio buttons with the class bg-success-05
    function selectSuccessRadio() {
        // Select all elements with the class "bg-success-05"
        const successElements = document.querySelectorAll('.bg-success-05');

        // Debug log: Show all found elements
        //console.log(`Number of elements found with class 'bg-success-05': ${successElements.length}`);
        successElements.forEach((element, index) => {
            //console.log(`Element ${index + 1} found:`, element);

            // Find the radio input inside each element
            const radio = element.querySelector('input[type="radio"]');

            if (radio) {
                radio.click(); // Simulate a radio button click
                console.log(`Radio button clicked for element ${index + 1}.`);
            } else {
                console.log(`No radio button found for element ${index + 1}.`);
            }
        });
    }

    // Function to pause (sleep) for a given time
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Function to scroll to the bottom of the page
    function scrollToBottom() {
        //console.log('Scrolling to the bottom of the page...');
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'auto'
        });
    }

    // Execute the main function
    main();
})();
