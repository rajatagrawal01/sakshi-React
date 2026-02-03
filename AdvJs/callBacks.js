// function welcome(StuName,callback){
//     console.log(`Hello ${StuName}`);
//     callback();
// }

// function bye(){
//     console.log("Goodbye");
// }

// function greet(){
//     console.log("How are you?");
// }

// welcome("Sakshi",bye)
// welcome("Sakshi",greet)

console.log("Start");

// setTimeout(()=>{
//     console.log("Timeout Function");
// },5000)

// console.log("End");

// setInterval(()=>{
//     console.log("Hello");
// },1000)



fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((err)=>console.log("Error is :",err))

