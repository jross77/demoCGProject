//Do we want the user to upload a file is the string is very long?
// Get the button and container elements from HTML:
const button = document.getElementById("submit_dna");
const data = document.getElementById("dna_seq");
const show_img = document.getElementById("info");

// Create an event listener on the button element:
button.onclick= function(){
    // Get the reciever endpoint from Python using fetch:
    $.get('/test', function (response) {
          return response.json();
      }).then(function (text) {
          console.log('GET response:');
          console.log(text.greeting); 
          show_img.src = "./temp.gif";
      });
}
