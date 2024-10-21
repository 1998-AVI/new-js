// immediately invoked function Expressions(IIFE)

(function chai(){    // NAMED IIFE
    console.log(`DB CONNECTED`);
})();   // when ; this sign not use next function can't be running

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("AVIJIT")