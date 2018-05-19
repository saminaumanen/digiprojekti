//palautelomake
var config = {
    apiKey: "AIzaSyApIMxnXztETwIx7aolYQKLwPXNxuaQImQ",
    authDomain: "fir-harjoitus2.firebaseapp.com",
    databaseURL: "https://fir-harjoitus2.firebaseio.com",
    projectId: "fir-harjoitus2",
    storageBucket: "fir-harjoitus2.appspot.com",
    messagingSenderId: "537053761052"
  };
  firebase.initializeApp(config);
    var myFirebase = firebase.database().ref();
    var kysymykset = myFirebase.child("kysymykset");

    
    function submitClick(){
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("text").value;
        alert("Kiitos viestistäsi!");
    
    kysymykset.push().set({
    id: name,
    email: email,
    type: message
    });  
    };
    
  
    kysymykset.on('child_added', function(snapshot) {
        var d = snapshot.val();
        var items = [];
        items.push( d.id + " " +d.email + "  " + d.type);
        
    $( "<table/>", {
       html: items.join( "" )
        }).appendTo( "#yhteydenotto" );
    });

    

    