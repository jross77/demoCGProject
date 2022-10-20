//Do we want the user to upload a file is the string is very long?
// Get the button and container elements from HTML:
const button = document.getElementById("theButton")
const data = document.getElementById("input")

// Create an event listener on the button element:
button.onclick= function(){
    // Get the reciever endpoint from Python using fetch:
    fetch("http://127.0.0.1:5000/receiver", 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
        // Strigify the payload into JSON:
        body:JSON.stringify(data)}).then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    alert("something is wrong")
                }
            }).then(jsonResponse=>{
                
                // Log the response data in the console
                console.log(jsonResponse)
            } 
            ).catch((err) => console.error(err));
            
           }
