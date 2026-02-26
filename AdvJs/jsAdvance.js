// ============================================Arrow Function===============================
// function add(a,b){
//     console.log("Hello");
//     return a+b;
// }

// ======================With parameter=============================
//const add= (a,b)=> a+b //for single line return
// const add = (a, b) => {
//   console.log("Hello");
//   return a + b;
// };
// console.log(add(2, 3));

// 

// ======================Single parameter=============================

//const square= x =>x*x
// console.log(square(2));


// const greet=stuName =>"Hello "+stuName

// console.log(greet("Sakshi"));

// ======================Without parameter=============================

// const greet= ()=>console.log("Hello");

// greet()



// const obj={
//     stuName:"Rajat",
//     designation:"Developer",
//     normal:function () {
//         console.log(this.stuName);
//         console.log(this.designation);
//     },
//     arrow:()=>{
//         console.log(this.stuName);
//     }
// }

// obj.normal() // returns valid output
// obj.arrow() // returns undefined

// ============================================ForEach Function===============================

var arr=[1,2,3]

// for(var i=0;i<arr.length;i++){
//     console.log(arr[i]*2);
// }

// ======================For Each=============================

// arr.forEach(i=>console.log("ForEach: ",i*2))


// ======================Map=============================

// let doubled = arr.map((value)=>{
//     return value*2;
// }) 
// doubled=[2,4,6]
// console.log("Map",doubled);


// ======================Filter=============================

var arr=[1,2,3,5,4,8,7,234,123,34534,121]

// let filteredArray = arr.filter((value)=>value>20);
// console.log(filteredArray);

// ======================Find=============================
// let result = arr.find((value)=>value>20);

// console.log(result);

// ======================Some=============================

// let example=arr.some((value)=>value>30000);
// console.log(example);

// ======================Every=============================

// let allEven=arr.every((value)=>value%2==0)
// let allEven=arr.every((value)=>value<50000)

// console.log(allEven);


// ======================Including=============================
// let fruits=["apple","banana","watermelon"];

// console.log(fruits.includes("banana"));

// ======================sort()=============================
// arr.sort((a,b)=>a-b) // Ascending
// arr.sort((a,b)=>b-a) // Descending

// console.log(arr);