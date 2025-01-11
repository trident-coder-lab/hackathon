document.getElementById('analyzeButton').addEventListener('click', async function() {
    const statusMessageDiv = document.getElementById('statusMessage');
    statusMessageDiv.innerHTML = ""; // Clear previous messages
    const loadingIndicator = document.createElement('span');
    loadingIndicator.innerHTML = "Analyzing...";
    statusMessageDiv.appendChild(loadingIndicator); // Show loading message

    try {
        // Simulating the response with dummy data for testing
        // In real scenario, this would be replaced with the fetch call to your Flask backend
        const response = {
            ok: true,
            json: async () => ({ message: "Average vehicle density: 25.78 vehicles per frame" })
        };

        // Check if the response is OK (status in the range 200-299)
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Unknown error occurred');
        }

        const data = await response.json(); // Parse the JSON response

        // Handle the response from Flask backend (or dummy data here)
        if (data.error) {
            statusMessageDiv.innerHTML = 'Error: ' + data.error; // Display error message
            statusMessageDiv.style.color = 'red'; // Change text color to red for errors
        } else {
            statusMessageDiv.innerHTML = 'Traffic analysis result: ' + data.message; // Display success message
            statusMessageDiv.style.color = 'green'; // Change text color to green for success
        }
    } catch (error) {
        console.error('Error:', error);
        statusMessageDiv.innerHTML = 'Error: ' + error.message; // Display error message
        statusMessageDiv.style.color = 'red'; // Change text color to red for errors
    }
});
