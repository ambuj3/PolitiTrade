// script.js

// Function to handle form submission
document.getElementById('surveyForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const age = document.getElementById('age').value;
    const region = document.getElementById('region').value;
    const profession = document.getElementById('profession').value;
    const easeOfUse = document.getElementById('easeOfUse').value;
    const featuresRating = document.getElementById('featuresRating').value;
    const improvement = document.getElementById('improvement').value;
    const politicalInterest = document.querySelector('input[name="politicalInterest"]:checked').value;
    const politicalParty = document.getElementById('politicalParty').value;
    const localLeaders = document.getElementById('localLeaders').checked ? 'Yes' : 'No';

    // Display the response summary
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `
        <h3>Survey Submitted Successfully!</h3>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Ease of Use:</strong> ${easeOfUse}</p>
        <p><strong>Features Rating:</strong> ${featuresRating}</p>
        <p><strong>Improvement Suggestions:</strong> ${improvement}</p>
        <p><strong>Political Interest:</strong> ${politicalInterest}</p>
        <p><strong>Preferred Party:</strong> ${politicalParty}</p>
        <p><strong>Interested in Local Leaders Trading:</strong> ${localLeaders}</p>
    `;
});



// JavaScript function to handle form submission
function submitSurvey(event) {
    // Prevent the default form submission behavior (page reload)
    event.preventDefault();

    // Here you can handle form data, send it to a server via AJAX, etc.
    // For now, we'll just show the success message.

    // Display the success message
    const successMessage = document.getElementById('response');
    successMessage.style.display = 'block';

    // Optionally, clear the form fields (if desired)
    document.getElementById('surveyForm').reset();

    // Optionally, hide the success message after a few seconds
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 5000); // 5 seconds

    return false; // Prevent form submission from reloading the page
}
