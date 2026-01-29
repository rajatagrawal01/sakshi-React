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

arr.forEach(i=>console.log(i*2))