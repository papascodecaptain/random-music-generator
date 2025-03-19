const songs = [
    {
        artistName: "Kabul Dreams",
        song: "Air",
        spotifyId: "0vKCTsLm7qkuWDHhkQqwkS",
        genre: "Rock",
        country: "Afghanistan",
        city: "Kabul",
        lat: 34.5553,
        lng: 69.2075
    },
    {
        artistName: "The Bloody Foreigners",
        song: "Shoket e Mi",
        spotifyId: "4OoPCuemoxANYKAVbAMI47",
        genre: "Gypsy",
        country: "Albania",
        city: "Tirana",
        lat: 41.3275,
        lng: 19.8187
    },
    {
        artistName: "Khaled",
        song: "Aicha",
        spotifyId: "0cYX51Hneb8qIOx0tHm7ng",
        genre: "Folk",
        country: "Algeria",
        city: "Algiers",
        lat: 36.7538,
        lng: 3.0588
    },
    {
        artistName: "Susanne Georgi",
        song: "La Teva Decisio",
        spotifyId: "4JhfwIE45890EXAyEbpRPj",
        genre: "Pop",
        country: "Andorra",
        city: "Andorra la Vella",
        lat: 42.5063,
        lng: 1.5218
    },
    {
        artistName: "Aline Frazao",
        song: "Matacedo",
        spotifyId: "67wBtXxwXOh5pseldx92FT",
        genre: "Alternative",
        country: "Angola",
        city: "Luanda",
        lat: 8.8306,
        lng: 13.2451
    },
];


// Additional songs go here 




// DOM Elements
const generateBtn = document.getElementById('new-rec');
const spotifyPlayer = document.getElementById('spotify-player');
const mapElement = document.getElementById('map');

// Map and Marker Variables
let map;
let marker;

// Initialize the Map
function initMap(lat, lng) {
    if (map) {
        map.remove(); // Remove existing map if it exists
    }
    map = L.map('map').setView([lat, lng], 5); // Create a new map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    if (marker) {
        marker.remove(); // Remove existing marker if it exists
    }
    marker = L.marker([lat, lng]).addTo(map) // Add a marker
        .bindPopup(`<b>${songs[randomIndex].country}</b>`) // Add a popup with the country name
        .openPopup(); // Open the popup by default
}

// Generate a Random Recommendation
function generateRecommendation() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    const song = songs[randomIndex];

    // Update Spotify Embed
    spotifyPlayer.innerHTML = `
        <iframe src="https://open.spotify.com/embed/track/${song.spotifyId}" 
                width="300" 
                height="80" 
                frameborder="0" 
                allowtransparency="true" 
                allow="encrypted-media">
        </iframe>
    `;

    // Update the Map
    initMap(song.lat, song.lng);
}

// Event Listener for the Generate Button
generateBtn.addEventListener('click', generateRecommendation);

// Generate a Recommendation on Page Load (Optional)
generateRecommendation();