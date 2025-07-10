// Personal info
const firstname='Arevik'
const lastname = 'Navasardyan'
const birthdate = 2003
let currentYear = 2025
let isStudent = false
let hobbies = ['Hiking','Dancing','Reading','Watching movies','Sport']
let contact = {
    email:'navasardyanarevik@gmail.com',
    phone: '+37493070979',
    city:'Yerevan'
}

console.log(`Hi, my name is ${firstname} ${lastname}. I live in ${contact.city}.`);
console.log(`I am ${currentYear - birthdate} years old and currently I am ${isStudent ? "a student" : "not a student"}.`)

// Number/String
let ageString = "25"
let ageNumber = 25 

console.log(ageString == ageNumber)
console.log(ageString === ageNumber)

console.log(`ageString = ${ageString} is ${typeof(ageString)}, ageNumber = ${ageNumber} is ${typeof(ageNumber)}`)

// Grading
let score = 54;

let grade

// If else

if (score>90 && score<=100){
    grade="A"
}
else if (score>80 && score<=89) {
    grade='B'
}
else if (score>70 && score<=79) {
    grade='C'
}
else if (score>60 && score<=69) {
    grade='D'
}
else 
    grade = 60;

// Switch case

switch (grade) {
    case 'A': 
        console.log(`Excellent work!`)
        break;
    case 'B':
        console.log(`Good job!`)
        break;
    case 'C':
        console.log(`Keep improving.`)
        break;
    case 'D':
        console.log(`Try harder.`)
        break;
    case 'F':
        console.log(`Needs serious effort.`)
        break;
}

// Ternary operator
console.log((grade =='A' ||grade =='B' || grade =='C') ? "-You passed.": "-You failed.")
