// JavaScript for Politician Survey Form

document.getElementById('politicianSurveyForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const politicianName = document.getElementById('politicianName').value;
    const politicianParty = document.getElementById('politicianParty').value;
    const politicianInfluence = document.getElementById('politicianInfluence').value;
    const politicianImage = document.querySelector('input[name="politicianImage"]:checked').value;
    const politicianFuture = document.getElementById('politicianFuture').value;

    // Display the form response summary
    const responseDiv = document.getElementById('politicianResponse');
    responseDiv.innerHTML = `
        <h3>Survey Submitted Successfully!</h3>
        <p><strong>Trending Politician:</strong> ${politicianName}</p>
        <p><strong>Party:</strong> ${politicianParty}</p>
        <p><strong>Influence Rating:</strong> ${politicianInfluence}</p>
        <p><strong>Public Image:</strong> ${politicianImage}</p>
        <p><strong>Future in Politics:</strong> ${politicianFuture}</p>
    `;
});
