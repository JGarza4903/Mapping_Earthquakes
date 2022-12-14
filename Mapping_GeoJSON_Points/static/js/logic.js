// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJson data
let sanFranAirport = {
    "type":"FeatureCollection",
    "features":[{
        "type":"Feature",
        "properties":{
            "id":"3469",
            "name":"San Francisco International Airport",
            "city":"San Francisco",
            "country":"United States",
            "faa":"SFO",
            "icao":"KSFO",
            "alt":"14",
            "tz-offset":"-8",
            "dst":"A",
            "tz":"America/Los_Angeles"},
            "geometry":{
                "type":"Point",
                "coordinates":[-122.375,37.61899948120117]
            }
        }
    ]
};

// // Grabbing the GEOJSON data layer.  (Option #1)
// L.geoJson(sanFranAirport, {
//     // we turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//         console.log(latlng);
//         return L.marker(latlng)
//         .bindPopup("<h2>"+feature.properties.name+"</h2><hr><h3>"+feature.properties.city+", "+feature.properties.country+"</h3>");
//     }
// }).addTo(map);

Grabbing the GEOJSON data layer. (Option #2)
L.geoJson(sanFranAirport, {
    // we turn each feature into a marker on the map.
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup("<h2>"+feature.properties.name+"</h2><hr><h3>"+feature.properties.city+", "+feature.properties.country+"</h3>");
    }
}).addTo(map);

/// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
    });



