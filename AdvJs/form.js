let password = document.getElementById("pwd")
let message =document.getElementById("pwdchk")
let lengthchk= document.getElementById("lengthchk")
let capchk= document.getElementById("capchk")
let numchk= document.getElementById("numchk")
let spclchk= document.getElementById("spclchk")


password.addEventListener("keyup",function(){
    let value=password.value;
    // console.log(value);

    if(value.length<3){
        message.innerText="Enter Greater than 5"
        message.style.color="red"
    }
    else if(!value.match(/[0-9]/)){
        message.innerText="Enter a number"
        message.style.color="red"
    }
    else if(!value.match(/[A-Z]/)){
        message.innerText="Enter a Capital letter"
        message.style.color="red"
    }
    else if(!value.match(/[a-z]/)){
        message.innerText="Enter a small letter"
        message.style.color="red"
    }
    else if(!value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
        message.innerText="Enter a Special character"
        message.style.color="red"
    }

    else if(!value.match(/[A-Z]/) || !value.match(/[0-9]/) || !value.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)){
        message.innerText="Weak Password"
        message.style.color="red"
    }
    else{
        message.style.visibility="hidden";
        // message.innerText="Strong Passwword";
        // message.style.color="Green";
    }
})


// Tasks:-
// Separate text messages for every validation
// Real time validation back and forth
// On sumbit
// Password visibility