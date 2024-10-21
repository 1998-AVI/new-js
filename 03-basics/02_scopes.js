 //var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);

// ++++++++++++++ NESTED SCOPE +++++++++++++++++++++++++

function one(){
    const username="Avijit"

    function two(){
        const website="youtube";
        console.log(username);
        
    }
    // console.log(website);
    two()
    
}
// one()

if (true) {
   const username="AVISHEK" 
   if (username==="AVISHEK") {
     const website =" youtube"
    //  console.log(username + website);
     
   }
//    console.log(website);
   
}
// console.log(username);

// +++++++++++++++++ INTERESTING ++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1
}
// addone(5)

console.log(addtwo(7));  //  Cannot access 'addtwo' before initialization

const addtwo =function(num){
    return num +2
}
// addtwo(7)
