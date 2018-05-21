//Firebase ostoskori
var config = {
    apiKey: "APIKEY",
    authDomain: "lopputehtava-76b3d.firebaseapp.com",
    databaseURL: "https://lopputehtava-76b3d.firebaseio.com",
    projectId: "lopputehtava-76b3d",
    storageBucket: "lopputehtava-76b3d.appspot.com",
    messagingSenderId: "596098601643"
  };
  firebase.initializeApp(config);
  
  var myFirebase = firebase.database().ref();
  var ostoskori = myFirebase.child("ostoskori");
  
  
  function submitClick(){
    var k_id = document.getElementById("tilaajaid").value;
    var teksti = document.getElementById("tuote").value;
    var k_maara = document.getElementById("maara").value;
     
  
  ostoskori.push().set({
  id: k_id,
  tuote: teksti,
  maara: k_maara,
  });  
  };
  
  
  ostoskori.on('child_added', function(snapshot) {
    var d = snapshot.val();
    var items = [];
    items.push( d.id + " " + d.maara + " " + d.tuote);
    
  $( "<table/>", {
   html: items.join( "" )
    }).appendTo( "#ostoskori" );
  });
  