// Sample data for political parties and candidates
const parties = [
    {
        name: "Bharatiya Janata Party (BJP)",
        description: "A right-wing political party in India, associated with the RSS.",
        data: {
            popularity: "78%",
            votes: "105 Million",
            constituency: "Pan-India"
        },
        image: "images/bjp-logo.png",
        color: "#FF9900"  // Party color
    },
    {
        name: "Indian National Congress (INC)",
        description: "A centrist political party and one of the oldest in India.",
        data: {
            popularity: "55%",
            votes: "60 Million",
            constituency: "Pan-India"
        },
        image: "images/inc-logo.png",
        color: "#003366"  // Party color
    },
    {
        name: "Aam Aadmi Party (AAP)",
        description: "Aam Aadmi Party led by Arvind Kejriwal, focused on clean politics.",
        data: {
            popularity: "65%",
            votes: "25 Million",
            constituency: "Delhi"
        },
        image: "images/aap-logo.png",
        color: "#0066CC"  // Party color
    }
];

const candidates = [
    {
        name: "Arvind Kejriwal",
        description: "Chief Minister of Delhi, leading Aam Aadmi Party.",
        data: {
            popularity: "85%",
            votes: "15 Million",
            constituency: "Delhi"
        },
        image: "images/kejriwal.jpg",
        color: "#0066CC"  // Candidate's associated party color
    },
    {
        name: "Narendra Modi",
        description: "Prime Minister of India, leader of BJP.",
        data: {
            popularity: "80%",
            votes: "100 Million",
            constituency: "Varanasi"
        },
        image: "images/modi.jpg",
        color: "#FF9900"  // Candidate's associated party color
    }
];

// Function to generate the party cards dynamically
function generateCards(containerId, data) {
    const container = document.getElementById(containerId);
    
    data.forEach(item => {
        // Create the card element
        const card = document.createElement("div");
        card.classList.add("card");

        // Add the header with party/candidate name and background color
        const header = document.createElement("div");
        header.classList.add("card-header");
        header.style.backgroundColor = item.color;
        header.innerHTML = `<h2>${item.name}</h2>`;
        card.appendChild(header);

        // Add the body with description and data
        const body = document.createElement("div");
        body.classList.add("card-body");
        body.innerHTML = `
            <p><strong>Description:</strong> ${item.description}</p>
            <p><strong>Popularity:</strong> ${item.data.popularity}</p>
            <p><strong>Votes:</strong> ${item.data.votes}</p>
            <p><strong>Constituency:</strong> ${item.data.constituency}</p>
        `;
        card.appendChild(body);

        // Add footer with a "More Info" button
        const footer = document.createElement("div");
        footer.classList.add("card-footer");
        const button = document.createElement("button");
        button.innerText = "More Info";
        footer.appendChild(button);
        card.appendChild(footer);

        // Append the card to the container
        container.appendChild(card);
    });
}

// Generate cards for both parties and candidates
window.onload = () => {
    generateCards('party-cards', parties);
    generateCards('candidate-cards', candidates);
};
