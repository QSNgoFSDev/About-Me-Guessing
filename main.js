const myNameGuessing = 'Is my Name Sang ? '
const myAgeGuessing = 'Am I 29 years old ? '
const myJobGuessing = 'Am I an intern in American Code lab ? '
const myExperienceGuessing = 'Have I have 4 years of experience ? '
const myEducationGuessing = ' Have I have a Master Degree ? '

const correct = 'You are correct'
const wrong = 'Please try it again'
const format = 'Please try answer follow a format Yes or No'

const welcome = 'Welcome to my website'
const yourNameQuestion ='Hello, Would you mind to tell me your name ? '
// let yes = 'Yes'
// yesLow = yes.toLowerCase()


// Interact with site owner

let cusName = prompt(yourNameQuestion)










myName = prompt(myNameGuessing)

if (myName.toLowerCase() === 'yes') {
    alert(correct)
} else if (myName.toLowerCase() === 'no') {
    alert(wrong)
} else {
    alert(format)

}



let myAge = prompt(myAgeGuessing)

if (myAge.toLowerCase()==='yes'){
    alert(correct)
}
else if (myAge.toLowerCase() ==='no'){
    alert (wrong)
}
else {
    alert (format)
}


let myJob = prompt(myJobGuessing)

if(myJob.toLowerCase() === 'yes'){
    alert(correct)
}
else if (myAge.toLocaleLowerCase() === 'no') {
    alert (wrong)
}
else {alert(format)}

let myExperiece = prompt(myExperienceGuessing)

if (myExperiece.toLowerCase() === 'yes'){
    alert(correct)
}
else if (myExperiece.toLowerCase() === 'no') {
    alert(wrong)
}
else {
    alert (format)
}
let myEducation = prompt(myEducationGuessing)

if (myEducation.toLowerCase() === 'yes') {
    alert(correct)
}
else if (myEducation.toLowerCase() === 'no') {
    alert(wrong)
}
else {
    alert(format)
}


alert(welcome + " " + cusName)

document.write(welcome," ", cusName)
