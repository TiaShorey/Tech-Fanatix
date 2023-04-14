var options = {
   enableHighAccuracy: true
};

var characterIcon = L.Icon.extend({
    options: {
        iconSize:     [190, 165],
        iconAnchor:   [95, 85], //scaling needs to fix btr, most likely experiment with 70-85
        popupAnchor:  [-2, -28]
    }
});

//making a pin for specific locations
var detectiveIcon = new characterIcon({iconUrl: 'pins/detective pin.png'}),
    labTechIcon = new characterIcon({iconUrl: 'pins/lab tech red.png'});

//replaces default icons with this
L.icon = function (options) {
    return new L.Icon(options);
};

//adds marker for locations on map
L.marker([10.639952054925809, -61.39909224685563], {icon: detectiveIcon}).addTo(map)
    .bindPopup('Library')
    .openPopup();

L.marker([10.638510907593904, -61.39854451597934], {icon: detectiveIcon}).addTo(map)
    .bindPopup('Lindas')
    .openPopup();

L.marker([10.638347342207258, -61.39690430689715], {icon:  detectiveIcon}).addTo(map)
    .bindPopup('Canada Hall')
    .openPopup();

L.marker([10.638715976984775, -61.399552122567], {icon:  detectiveIcon}).addTo(map)
    .bindPopup('Civil Engineering (MD3)')
    .openPopup();

L.marker([10.643298381493429, -61.39867183700302], {icon:  detectiveIcon}).addTo(map)
    .bindPopup('Daaga Auditorium')
    .openPopup();

L.marker([10.642284705636328, -61.40106875871964], {icon:  detectiveIcon}).addTo(map)
    .bindPopup('Chemistry Lab')
    .openPopup();

L.marker([10.639106346631966, -61.399749866443294], {icon:  detectiveIcon}).addTo(map)
    .bindPopup('Engineering Pond')
    .openPopup();

L.marker([10.640408921632218, -61.40091941318903], {icon:  detectiveIcon}).addTo(map)
    .bindPopup('Cariri')
    .openPopup();

// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
  
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 