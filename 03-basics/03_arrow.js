const user ={
    username:"Avijit",
    price:898,

    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`);
        // console.log(this)
        
    }
    
}
 user.welcomeMessage();
 user.username="sammy";
 user.welcomeMessage();
// console.log(this)


// function chai(){
//     let username ="Avijit"    // this type use only object
//     console.log(this); // this type use only function
    
// }
// chai()


 const chai = () =>{
    let username ="hitesh"
    console.log(this);
 }
//  chai()

// const addTwo =(num1,num2) =>{
//     return num1 +num2
// }

// const addTwo =(num1,num2) => num1 +num2 // implicit return
// const addTwo =(num1,num2) => (num1 +num2)  

const addTwo =(num1,num2) =>({username:"AVIJTI"})
console.log(addTwo(5,6));