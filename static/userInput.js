

    function sendFunc(){
        const button = document.getElementById("submit_dna");
        const data_s = document.getElementById("dna_seq");
        const show_img = document.getElementById("info");
        // Get the reciever endpoint from Python using fetch:
        // GET is the default method, so we don't need to set it
        // Print entered dna string for testing purposes
        console.log(data_s.value);
        const s = JSON.stringify(data_s.value);
     output = $.ajax({
        url:"/test",
        type:"POST",
        contentType: "application/json",
        data: JSON.stringify(s)});
    console.log(output);
    if(output.success){
        show_img.src = "{{url_for('static', filename='./temp.gif')}}"
    }
    } 
   
