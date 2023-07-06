// const myNameGuessing = 'Is my Name Sang ? '
// const myAgeGuessing = 'Am I 29 years old ? '
// const myJobGuessing = 'Am I an intern in American Code lab ? '
// const myExperienceGuessing = 'Have I have 4 years of experience ? '
// const myEducationGuessing = ' Have I have a Master Degree ? '

// const correct = 'You are correct'
// const wrong = 'Please try it again'
// const format = 'Please try answer follow a format Yes or No'

// const welcome = 'Welcome to my website'
// const yourNameQuestion ='Hello, Would you mind to tell me your name ? '
// // let yes = 'Yes'
// // yesLow = yes.toLowerCase()


// // Interact with site owner

// let cusName = prompt(yourNameQuestion)










// myName = prompt(myNameGuessing)

// if (myName.toLowerCase() === 'yes') {
//     alert(correct)
// } else if (myName.toLowerCase() === 'no') {
//     alert(wrong)
// } else {
//     alert(format)

// }



// let myAge = prompt(myAgeGuessing)

// if (myAge.toLowerCase()==='yes'){
//     alert(correct)
// }
// else if (myAge.toLowerCase() ==='no'){
//     alert (wrong)
// }
// else {
//     alert (format)
// }


// let myJob = prompt(myJobGuessing)

// if(myJob.toLowerCase() === 'yes'){
//     alert(correct)
// }
// else if (myAge.toLocaleLowerCase() === 'no') {
//     alert (wrong)
// }
// else {alert(format)}

// let myExperiece = prompt(myExperienceGuessing)

// if (myExperiece.toLowerCase() === 'yes'){
//     alert(correct)
// }
// else if (myExperiece.toLowerCase() === 'no') {
//     alert(wrong)
// }
// else {
//     alert (format)
// }
// let myEducation = prompt(myEducationGuessing)

// if (myEducation.toLowerCase() === 'yes') {
//     alert(correct)
// }
// else if (myEducation.toLowerCase() === 'no') {
//     alert(wrong)
// }
// else {
//     alert(format)
// }


// alert(welcome + " " + cusName)

// document.write(welcome," ", cusName)



// lab 03

const numberGuessing = 'How many places I would like to visit'

const tooHigh = ' Your number is too high'
const tooLow = ' Your number is too low'
const tooCorrect = ' The correct answer is 10'



for (let i = 0; i < 4; i++) {
    let guessingGame = prompt(numberGuessing);

    if (Number(guessingGame) < 10) {
        alert(tooLow);

    }
    else if (Number(guessingGame) > 10) {
        alert(tooHigh);
    }
    else {
        alert(tooCorrect);
        break;
    }

}
document.write(tooCorrect);




// let favoritePlace = ['Saigon', 'Bejing', 'Srilanka', 'Jarkarta', 'Perth', 'Australia', 'Phuket', 'Sydney', 'Melbourne', 'Tasmania']

// let favorite = []

// const whichFavPlace = ' Guess my favorite places'



// for (let i = 0; i < 6; i++) {
//     let gameGuessingPlace = prompt(whichFavPlace);
//     for (let j = 0; j < favoritePlace.length; j++) {
//         if (gameGuessingPlace === favoritePlace[j]) {
//             favorite.push(gameGuessingPlace)
//         }
//     }

//     alert(favorite)
//     document.write(favorite)


// }


// html có 10 điểm du lịch của dev

// user đoán 6 lần.
// khai báo biến:

let favoritePlace = ['Saigon', 'Bejing', 'Srilanka', 'Jarkarta', 'Perth', 'Australia', 'Phuket', 'Sydney', 'Melbourne', 'Tasmania']

let favorite = []

const whichFavPlace = ' Guess my favorite places'


// Lời giải:

// logic 1
// user đoán 6 lần. quá 6 lần hiện kết quả danh sách user đã đoán trúng.
for (let i = 0; i < 6; i++) {
    // Dev hỏi user đoán 1 trong 10 điểm du lịch của dev.
    let favoriteGuessing = prompt(whichFavPlace);
    // do favoritePalce là array, để so sánh string trong array, phải loop qua từng phần tử của array
    for (let j = 0; j < favoritePlace.length; j++) {
        // Nếu đúng => lưu trữ câu trả lời vào favorite
        if (favoriteGuessing === favoritePlace[j]) {
            // cho câu trả lời đúng vào chuỗi rỗng

            favorite.push(favoriteGuessing)
        }
        // Nếu sai => không lưu
        // hiện ra các kết quả user đoán trúng.


    }




}

document.write(favorite)











