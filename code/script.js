// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// Step 2 - Food choice
// Your code goes here
let userChoice = prompt(
  "What would you like to eat?\n\n We have these things on the menu: \n1. Pizza\n2. Kebab\n3. Rice "
)

alert(
  `Nice, ${userChoice} is a good choice!`
)

// Step 3 - Subtype choice
// Your code goes here
let userSubChoice

if (userChoice === "Pizza") {
  userSubChoice = prompt("What type of pizza do you want, Italian or American?")
} else if (userChoice === "Kebab") {
  userSubChoice = prompt("What type of Kebab would you like, Swedish or Iraqi?")
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
