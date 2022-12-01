function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15.5,
      center: { lat: 41.833000, lng: -87.626808},
    });
    var marker = new google.maps.Marker({
      position: { lat: 41.833000, lng: -87.624210},
      map: map,
    });
    var infowindow = new google.maps.InfoWindow({
      content:"Phi Kappa Sigma Chapter Alpha Epsilon"
    });
    infowindow.open(map, marker);
  }
  window.initMap = initMap;