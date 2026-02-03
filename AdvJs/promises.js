// Defining a promise
// let promise = new Promise((resolve,reject)=>{
//     let success=false;
//     if(success){
//         resolve("Task completed")
//     }
//     else{
//         reject("Task failed")
//     }
// })

// Using a promise
// promise.then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })

// Example of a promise


// Defining a promise
// let pizzaOrder = new Promise((resolve,reject)=>{
//     let pizzaReady=true;
//     if(pizzaReady){
//         resolve("Pizza Ready")
//     }
//     else{
//         reject("Preparing")
//     }
// })

// // Using a promise
// pizzaOrder
// .then((msg)=>{console.log(msg);})
// .catch((error)=>{console.log(error);})




// API Fetch
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log("Error is :",err))


// Async Await

async function fetchData(){
    try{
    let response =await fetch("https://jsonplaceholder.typicode.com/users")
    let data =await response.json()
    console.log(data);
    }
    catch(err){
        console.log("Error hai bhai",err);
    }
}

fetchData()