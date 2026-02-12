// simple if
let age = 20;

if (age >= 18) {
  console.log("Adult");
}

// if else
let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// if else if ladder
let marks = 82;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Grade D");
}

// nested if else
let userAge = 22;
let hasID = true;

if (userAge >= 18) {
  if (hasID) {
    console.log("Entry allowed");
  } else {
    console.log("ID required");
  }
} else {
  console.log("Underage");
}

// AND (&&) with if else
let age1 = 20;
let hasID1 = true;

if (age1 >= 18 && hasID1) {
  console.log("Entry allowed");
} else {
  console.log("Entry not allowed");
}

// OR (||) with if else
let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can rest today");
} else {
  console.log("Go to work");
}

// NOT (!) with if else
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
} else {
  console.log("Welcome back");
}

// AND + OR combination
let mark1 = 75;
let attendance = 80;

if ((mark1 >= 60 && attendance >= 75) || marks >= 90) {
  console.log("Passed");
} else {
  console.log("Failed");
}
