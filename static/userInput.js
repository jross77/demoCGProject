//Do we want the user to upload a file is the string is very long?
    // Get the button and container elements from HTML:
    const button = document.getElementById("submit_dna");
    const data_s = document.getElementById("dna_seq");
    const show_img = document.getElementById("info");
    
    button.onclick = sendFunc();
    // Create an event listener on the button element:
    function sendFunc(){
        // Get the reciever endpoint from Python using fetch:
        // GET is the default method, so we don't need to set it
        // Print entered dna string for testing purposes
        console.log(data_s.value);
        const s = JSON.stringify(data_s.value);
     $.ajax({
        url:"/test",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(s)});

    output = $.ajax({
        url:"/test",
        type:"GET",
        contentType: "application/json",
        data: JSON.stringify(s)});
    console.log(output);
    } 
   
