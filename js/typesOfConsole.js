console.time("Start")

console.log("Hello sakshi")
console.warn("Hello sakshi")
console.error("Hello sakshi")
console.info("Hello sakshi")
console.table([{a:1,b:2},{a:3,b:4}])
// console.clear()

console.timeEnd("Start")

document.getElementById("username").addEventListener("input", (e) => {
  console.log(e.target.value);
});
