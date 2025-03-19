const songs = [
    {
        spotifyId: "4HpFU6eMThgW6Cael5AwYy", // Spotify track ID for "La Vie En Rose"
        country: "United States",
        lat: 48.8566, // Latitude for Paris, France
        lng: 2.3522   // Longitude for Paris, France
    },
    {
        spotifyId: "7C5Ria90yxc4a0REG1D23U", // Spotify track ID for "Sukiyaki"
        country: "Australia",
        lat: 35.6895, // Latitude for Tokyo, Japan
        lng: 139.6917 // Longitude for Tokyo, Japan
    },
    {
        spotifyId: "5QYgMbHrZR0J6N0vH8Z1kF", // Spotify track ID for "Mas Que Nada"
        country: "South Africa",
        lat: -22.9068, // Latitude for Rio de Janeiro, Brazil
        lng: -43.1729  // Longitude for Rio de Janeiro, Brazil
    }, {
        spotifyId: "4rDxUHTSSRzYmYgzYOSRCr", // Spotify track ID for "Mas Que Nada"
        country: "Akbil,Alegria",
        lat: -22.9068, // Latitude for Rio de Janeiro, Brazil
        lng: -43.1729  // Longitude for Rio de Janeiro, Brazil
    },


    // Add more songs here
];



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