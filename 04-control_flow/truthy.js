// const userEmail ="avij@gmail.com"
// if (userEmail) {
//     console.log("Got user email");
    
// }else{
//     console.log("Don't have user email");
    
// }

// const userEmail =""
// if (userEmail) {
//     console.log("Got user email");
    
// }else{
//     console.log("Don't have user email"); /// it answer false value
    
// }

const userEmail =[]
if (userEmail) {
    console.log("Got user email");
    
}else{
    console.log("Don't have user email"); // its answer true value
    
}

// FALSY VALUE

// false,0,-0,BigInt 0n,null,undefined,NaN,""

// TRUTHY VALUES

// "0",'false'," ",[],{},function(){}

const emptyObj ={}
if (Object.keys(emptyObj).length===0) {
    console.log("this is empty object")
}
