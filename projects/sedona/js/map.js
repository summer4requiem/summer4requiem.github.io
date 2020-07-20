function initMap() {
    var coords = {lat: 59.938939, lng: 30.323186};
    var map = new google.maps.Map(document.getElementById("information__map"), {
      zoom: 17,
      center: coords
    });
    var marker = new google.maps.Marker({
      position: coords,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: {
        url: "./img/map-marker.svg",
        scaledSize: new google.maps.Size(100, 100)
      }
    });
  }
  
  window.addEventListener("load", initMap);