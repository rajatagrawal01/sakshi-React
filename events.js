// var inpt=document.getElementById("data")
// var btn=document.getElementById("btn")

// inpt.onkeyup=function(){
//     console.log(inpt.value);
//     // console.log("Input event",e);
//     //console.log("e.target",e.target); // event trigger element
//     console.log("e value",e.target.value);
// }

// btn.onkeyup=function (e) {
//     console.log("Hello sakshi");
//     console.log(e);
    
    
// }

// inpt.addEventListener("keyup",
//     function(){
//         console.log(inpt.value);
//     }
// )

var myform= document.getElementById("demo")
myform.addEventListener("submit",
    function(e){
        e.preventDefault();
        var stuName=document.getElementById("stuName").value

        if(stuName.length<5){
            console.log("Enter greater than 5");
        }
        else{
            console.log("Great");
            
        }
    }
)