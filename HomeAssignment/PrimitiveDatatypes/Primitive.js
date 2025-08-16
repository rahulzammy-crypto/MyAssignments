const city = "Chennai"; // const --> used for City

console.log("I live in " + city);
console.log("Value:", city, "| Type:", typeof city);

let marks = 85;  // let --> used for Marks and Future Goal

console.log("Marks + 10 =", marks + 10);
console.log("Value:", marks, "| Type:", typeof marks);

var isWeekend = false; // Var --> used for isWeekend

if (isWeekend) {
  console.log("Relax");
} else {
  console.log("Work");
}
console.log("Value:", isWeekend, "| Type:", typeof isWeekend);


let futureGoal; // let --> used for Marks and Future Goal
console.log("Value:", futureGoal, "| Type:", typeof futureGoal);

//Note: var is function-scoped can be redeclared within the same scope
//      let is block-scoped and cannot be redeclared in the same scope