//Flickr - kuvagalleria
(function() {
    
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    $.getJSON( flickerAPI, {
      tags: "joywave",
      tagmode: "any",
      format: "json"
    })
      .done(function( data ) {
        $.each( data.items, function( i, item ) {
          $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
          if ( i === 15 ) {
            return false;
          }
        });
      });
  })();



//google maps
function initMap() {
  var helsinki = {lat: 60.2022527, lng: 24.9348471};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: helsinki
  });
  var marker = new google.maps.Marker({
    position: helsinki,
    map: map
  });
}

