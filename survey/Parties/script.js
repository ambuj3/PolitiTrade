// JavaScript for Parties Survey Form

document.getElementById('partiesSurveyForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    const partySupport = document.getElementById('partySupport').value;
    const partyLeader = document.getElementById('partyLeader').value;
    const partyStrength = document.getElementById('partyStrength').value;
    const partyTrending = document.getElementById('partyTrending').value;
    const partyIssues = document.getElementById('partyIssues').value;

    // Display the form response summary
    const responseDiv = document.getElementById('partiesResponse');
    responseDiv.innerHTML = `
        <h3>Survey Submitted Successfully!</h3>
        <p><strong>Party Supported:</strong> ${partySupport}</p>
        <p><strong>Party Leader:</strong> ${partyLeader}</p>
        <p><strong>Party Strength:</strong> ${partyStrength}</p>
        <p><strong>Trending Party:</strong> ${partyTrending}</p>
        <p><strong>Issues to Focus on:</strong> ${partyIssues}</p>
    `;
});
