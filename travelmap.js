//latitude of 9.1450° N and a longitude of 40.4897° E. T
//12.03167° N latitude and 39.04111° E longitude
//12.6074° N, 37.4700° E
//14.132222° N and 38.719722° E
var coordinates = [9.1450, 40.4897];
var place1 = [12.03167, 39.04111];
var place2 = [12.6074, 37.4700];
var place3 = [14.132222, 38.719722];
var map = L.map('map').setView(coordinates, 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var marker = L.marker(coordinates).bindPopup("<p>Hello, from Ethiopia!</p>").addTo(map);
var marker1 = L.circle(place1,{color: "black", fillColor: "#c96979", radius: 130}).bindPopup("<p>Hello, from Lalibela!</p>").addTo(map);
var marker2 = L.circle(place2,{color: "black", fillColor: "#73b2d1", radius: 130}).bindPopup("<p>Hello, from Fasilides!</p>").addTo(map);
var marker3 = L.circle(place3,{color: "black", fillColor: "#d9b077", radius: 130}).bindPopup("<p>Hello, from Aksum!</p>").addTo(map);
