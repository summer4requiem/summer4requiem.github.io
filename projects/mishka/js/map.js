function initMap(){var e={lat:59.938939,lng:30.323186},o=new google.maps.Map(document.getElementById("google-map"),{zoom:17,center:e});new google.maps.Marker({position:e,map:o,animation:google.maps.Animation.DROP,icon:{url:"./img/icon-map-pin.svg",scaledSize:new google.maps.Size(67,100)}})}function hideImageMap(){document.querySelector(".contacts__map_img").classList.toggle("map--offline")}window.onload=hideImageMap,window.addEventListener("load",initMap);