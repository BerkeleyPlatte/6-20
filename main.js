var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let integersB = integers
  .sort((curr, next) => curr - next)
  .reverse()
  .filter(num => num < 20)
  .map(num => num * 1.5 - 1)
  .reduce((curr, next) => curr + next);

console.log(integersB);

//   NOTE:
//   .sort((curr, next) => curr - next).reverse()
//   =
//   sort((curr, next), => next - curr)

const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";

let drsBill = {
  officeName: "You Die Here",
  streetAddress: "111 Street Drive",
  doctorName: "Blue Healer",
  patientName: "Sick Boy",
  visitDate: "6/20/2019",
  amountBilled: 1,
  dueDate: "6/21/3019"
};

console.log(drsBill[dateVisited]);
console.log(drsBill[owed]);
console.log(drsBill[patient]);

let aa = Object.values(drsBill);
let bb = Object.keys(drsBill);

let section = document.querySelector("#section");
for (let i = 0; i < bb.length; i++) {
  let span = document.createElement("span");
  span.innerHTML = `${bb[i]} `;
  section.appendChild(span);
}

let faveFood = {
  name: "pizza",
  shape: "round",
  mostly: "bread",
  also: "cheese",
  superfluous: "everything else"
};

let pairs = Object.entries(faveFood);
for (let i = 0; i < pairs.length; i++) {
  let pgraph = document.createElement("p");
  let entry = pairs[i].join(":");
  pgraph.innerHTML = entry;
  document.querySelector(".food").appendChild(pgraph);
}

// pairs.forEach(item, () => {
//   let pgraph = document.createElement("p");
//   let entry = pairs[i].join(":");
//   pgraph.innerHTML = entry;
//   document.querySelector(".food").appendChild(pgraph);
// });
