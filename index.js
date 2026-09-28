// // // // // //option 1: 
// // // // // // 
// // // // // // let num1 = 3
// // // // // // let num2 = 5

// // // // // // function sumOfTwoNums(num1, num2){
// // // // // //     let result = num1 + num2
// // // // // //     console.log(result)
// // // // // // }
// // // // // // sumOfTwoNums(3, 5)

// // // // // //option 2:
// // // // // let num1 = 3
// // // // // let num2 = 5
// // // // // const addNums = (num1, num2) => {
// // // // //     let result = num1 + num2
// // // // //     console.log(result)
// // // // // }

// // option 3: Arrow Function
// const addNumbers = (num1, num2) => console.log(num1 + num2)
// addNumbers(3, 5)

// // // // // // const sum = (num1, num2) =>{
// // // // // //     console.log(num1 + num2)
// // // // // // }

// // // // //Nested Functions
// // // // function calculation(){
// // // //     function add(){}
// // // //     function subtract(){}
// // // // }

// // // //Global Variable
// // // // let studentName = "John"
// // // function morningGreetings(studentName="John Doe"){
// // //     console.log(`Good morning ${studentName}!`)
// // // }
// // // //morningGreetings()
// // // // afternoonGreetings("John Doe")

// // //Global scope
// // // let studentName = "John Doe"
// // // console.log(studentName)

// // //Local scope
// // let studentName = "John Doe"
// // function morningGreetings(studentName){
// // console.log(`Hello ${studentName}!`)
// // }

// // // let studentName = "Jane Doe"
// // // function morningGreetings(studentName){
// // // console.log(`Hello ${studentName}!`)
// // // }

//global scope
//let studentName ="John Doe"
let studentName ="John Doe"
function morningGreetings(){
    //local scope
    let studentName = "John Doe"
    console.log(`Good morning ${studentName}!`)
}
function afternoonGreetings(){
    console.log(`Good afternoon ${studentName}!`)
}
//function call / invoking the function
morningGreetings()
afternoonGreetings()
