let marker;
function initMap (){
    var uluru = {lat:10.786596,lng:106.666103}
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:19,
        center:uluru,
        mapTypeId: google.maps.MapTypeId.HYBRID
    });
    marker = new google.maps.Marker({
        map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: { lat: 10.786598, lng: 106.666101 },
    });
    marker.addListener("click", toggleBounce);
}
function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}