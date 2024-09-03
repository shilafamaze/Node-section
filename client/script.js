async function adduser(event){
    event.preventDefault();
    console.log("reached here..."); 

    let name = document.getElementById("name").value;
    console.log("name:",name);

    let email = document.getElementById("email").value;
    console.log("email:",email);

    let pass = document.getElementById("pass").value;
    console.log("password:",pass);

   
    let emailerr = document.getElementById("email-err");
    let passerr = document.getElementById("pass-err");
    
    
    let namereg = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/;
    let emailreg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let nameerr = document.getElementById("name-err");
    nameerr.innerHTML = '';


    if(!name){
        nameerr.innerHTML="name is required!";
        
    }
    else if(!namereg.test(name)){
        nameerr.innerHTML = "invalid name!"
        

    }

    if(!email){
        emailerr.innerHTML = "email is required!";
        return;
    }
    else if(!emailreg.test(email)){
        emailerr.innerHTML = "invalid email!";
        return;
    }

    if(!pass){
        passerr.innerHTML = "password required!";
        return;
    }

    

    let datas = {
        name,
        email,
        pass

    };

    console.log("datas:",datas);
    let json_data = JSON.stringify(datas);
    console.log("json_data:",json_data);

    let response = await fetch ("/submit",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: json_data
    });
    console.log("response:",response);

    let parsed_response = await response.text();
    console.log("parsed response:",parsed_response);

    if(parsed_response){
        alert(parsed_response);
        return;
    }
    else{
        alert("something went wrong");
    }


    // fetch("GET","http://127.0.0.1:3000/submit")
    // .then((response)=>{
    //     console.log("new response:",response);
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })








}