console.log("Hello World!")
console.log("type Script Cnvert to java script")
console.log("Kajal tiwari")
console.log("goldiee tiwari")
console.log("kaju")
console.log('hii')


/*
to install typescript
step1: Open CMD
Step2: execute following command
        npm i -g typscript
        
Powershell run as admin
1. to allow running scripts in Wondows
Set-ExecutionPolicy RemoteSigned

and Press Y

2. to block running scripts in Wondows
Set-ExecutionPolicy Restricted

and Press Y
*/

//static typing
// var a:number = 10
// console.log(a)

// a = "kajal tiwari"
// console.log(a)

// a = true
// console.log(a)

// a = [10,20,30,30]
// console.log(a)

//type inference
// var a = 10
// console.log(a)

// a = true
// console.log(a)

//any types
// var a:any = 10
// var a:any
// a = 10
// console.log(a)
// a = true
// console.log(a)
// a = "kajal tiwari"
// console.log(a)

console.log(15+6)
console.log(15+"6")
console.log("15"+"6")
console.log("15"+"Hello World")
console.log(15 - 6)
// console.log("15"-"6")
console.log()
// console.log("15" - "Hello World")   //15Hello World
// console.log(15 * 6)                 //21
// console.log(15 * "6")               //156
// console.log("15" * "6")             //156
// console.log("15" * "Hello World")   //15Hello World
 //console.log(10<20)      //true
 //console.log(10<"20")    //true
// Note :  Number and String operands can be poosible while + operators but not with other operators like - * / % ** < <= > >= == === != !== in these operators case both operands must be number, bigint, enum
// console.log(10 && 20)
// console.log(!10)
//in case && || ! operands must be either boolean or return some boolean value

//Flow Control Statements
// var num:number = Number(prompt("Enter the Number : "));
// if (num % 2 == 0)
//     document.write(`${num} is Even`);  // not defind num
// else
//     document.write(`${num} is Odd`);


//function
//type of parameter
// function test(a:number,b:number){
//         console.log(`a = ${a} and b = ${b}`)
// }
// test(10,20)
// test(true, false)
// test(10,"Ducat")
// test("hello","world")


//Return Type
function test(): number{
        return 10
        // return "10"
}
console.log(test())


//defult parameters
// function test(a=0,b=0){
// function test(a:number = 0,b:number=0){
//    console.log(`a = ${a} b = ${b}`)
// }
// test(10,20)
// test(10,"nitin")
// test()