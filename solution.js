//1
let fruit
let vegetable
let food
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log(fruit,vegetable,food)


//2
let fran, boi, niklas;
({fran, boi, niklas} = {
    fran: "witch",
    boi: "pumpkin",
    niklas: "slanderman"
})

console.log(fran, boi, niklas)


//3
const musician = {
    firstName: "Bob",
    lastName: "Dylan",
    greatestHit: "like a rolling stone",
    nationality: "american",
    role: "singer and songwriter"
}
const musicianInformation = ({
    firstName,
    lastName,
    nationality,
    greatestHit,
    role,
  }) => {
      return `${firstName} ${lastName} is an ${nationality} ${role} .One of his greatest hit is "${greatestHit}". `;
  };
  console.log(musicianInformation(musician))
