// Initial Driver List
var drivers = [
  "Jeff Gordon"
  ,"Dale Earnhart"
  ,"Chase Elliot"
  ,"Richard Petty"
  ,"David Pierson"
  ,"Tony Stewart"
]

// Function for displaying driver buttons
function renderButtons() {
  // Deleting the buttons prior to adding new drivers
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the arrayof drivers
  for (var i = 0; i < drivers.length; i++) {
    
    // Dynamically generating buttons for each driver in the array

    // This code $("<button>") is all jQuery needs to create the beginning and end tag
    var a = $("<button>");

    // Adding a class of driver-btn to our button
    a.addClass("driver-btn");

    // Adding a data-attribute
    a.attr("data-name", drivers[i]);

    // Providing the initial button text
    a.text(drivers[i]);

    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}
// Function for displaying driver GIFS
function displayDriverGIFS() {
  console.log("displayDriverGIFS");

  // Get driver name
  var driver = $(this).attr("data-name");
  console.log(driver);

  // Convert spaces to +
  driver = driver.replace(" ", "+");
  console.log(driver);

  // API Key
  var apiKey = "75MtWd9V1aiT89Iqyr5IwXaYyc8QOhqa";
  console.log(apiKey);

  // URL to get gifs
  // var queryURL = "https://api.giphy.com/v1/gifs/search/?q:" + driver + "&api_key:FZgPb9eOFOIWbjZGkchK4Apa12MjOUSz&limit:10";
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + driver + "&limit=10";
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    // Data array
    var data =response.data;
    console.log(data);

    // loop through gifs to load
    for (var i = 0; i < data.length; i++) {

      // Retrieving the URL for the image
      var imgURL = data[i].images.fixed_height_still.url;
      console.log(imgURL);

      // Create an element to hold the image
      var image = $("<img>").attr("src", imgURL);
      console.log(image);

      // Appending the image
      $("#gif-view").append(image);
    }

    
  })
}
// Function to handle click on GIF

// Adding a click event listener to all elements with a class of "driver-btn"
$(document).on("click", ".driver-btn", displayDriverGIFS);

// Calling the renderButtons function to display the initial buttons
renderButtons();