function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(...num1){ // rest-operator
    return num1;
}
// console.log(calculateCartPrice(200,300,400,500));

const user={
    username:"AVIJIT",
    price:200
}
function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)

handleObject({
    username:"sammy",
    price:399
})

const myNewArray=[200,400,599,788]
function returnSecondValue(getArray){
    return getArray[1]
    

}
console.log(returnSecondValue(myNewArray))
