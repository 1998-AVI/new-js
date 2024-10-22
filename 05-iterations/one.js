// FOR LOOP

for (let i = 0; i <=10; i++) {
    // console.log(i)
    
}


for (let i = 1; i <=10; i++) {
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 1; j <=10; j++) {
    //     console.log(`Inner loop value:${j} and Outer loop :${i}`);
    //    console.log(i + "*" + j + "=" + i*j);
       
        
    }
    
}

let myArray =["flash","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}


// BREAK AND CONTINUE

// for (let i = 1; i <=20; i++) {
//     if (i==5) {
//        console.log(`detected 5`);
//        break
        
//     }
//     console.log(`value of  I is ${i}`)
    
    
// }

for (let i = 1; i <=20; i++) {
    if (i==5) {
    //    console.log(`detected 5`);
       continue 
        
    }
    // console.log(`value of  I is ${i}`)
    
    
}