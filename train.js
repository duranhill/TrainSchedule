$(document).ready(function() {

  // Initialize Firebase
    var config = {
    apiKey: "AIzaSyBghPdc6UTC9z2QYeX09JekamsS8Qdbu78",
    authDomain: "trainhw-c355c.firebaseapp.com",
    databaseURL: "https://trainhw-c355c.firebaseio.com",
    projectId: "trainhw-c355c",
    storageBucket: "trainhw-c355c.appspot.com",
    messagingSenderId: "354242950259"
  };

    firebase.initializeApp(config);

    // Create a variable to reference the database.
    var database = firebase.database();

    $("#submit-button").on("click", function(event) {
       // Prevent the page from refreshing
       event.preventDefault();

       // Get inputs-
       var Train Name = $("#train-name").val().trim();
       var Destination = $("#destination").val().trim();
       var Frequency = $("#frequency").val().trim();
       var nextArrival= $("#monthly-rate").val().trim();
       var MinutesAway= $("#minutes-away").val().trim();

       // Change what is saved in firebase
       database.ref().push({
         destination: destination,
         Frequency: Frequency,
         nextArrival: nextArrival
         Minutes Away: Minutes Away
         dateAdded: firebase.database.ServerValue.TIMESTAMP
       });
     });

     // Firebase watcher + initial loader HINT: This code behaves similarly to .on("value")
     dataRef.ref().on("child_added", function(childSnapshot) {

       // Log everything that's coming out of snapshot
       console.log(childSnapshot.val().Train Name);
       console.log(childSnapshot.val().Destination);
       console.log(childSnapshot.val().Frequency);
       console.log(childSnapshot.val().nextArrival);
       console.log(childSnapshot.val().Minutes Away);

       // // full list of items to the well
       // $("#employee-table").append("<div class='well'><span class='member-name'> " + childSnapshot.val().name +
       //   " </span><span class='member-email'> " + childSnapshot.val().email +
       //   " </span><span class='member-age'> " + childSnapshot.val().age +
       //   " </span><span class='member-comment'> " + childSnapshot.val().comment + " </span></div>");

     // Handle the errors
     }, function(errorObject) {
       console.log("Errors handled: " + errorObject.code);
     });




});