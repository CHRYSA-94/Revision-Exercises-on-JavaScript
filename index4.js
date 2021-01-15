// Exercise 1: In index.js Loop and print the properties of person;

        const person = {
            name: "Costas",
            age: 25,
            height: 1.9
        };


        const objProperties = Object.keys(person).filter(key => person.hasOwnProperty(key))
        console.log(objProperties)
    
// Exercise 2: Create a function that you provide an even number and it
// creates a multi dimensional Array. Example if I give 2 I should get;
// const array = [ [1, 2], [1, 2] ]; Then print that last index of the last
// array.
       
       const arr = [];
       const val = [];
       function twoDarray(evenNum) {
        
         for (let i = 0; i < evenNum ; i++) {
             val.push(i+1);
         }
         for (let i = 0; i < evenNum  ; i++) {
            arr[i] = val ;
         }
       }
       
       twoDarray(4);
       console.log(arr , arr[arr.length - 1][val.length - 1] )
      

// Exercise 3: Write a console statement that prints a warning of 'please
// update your browser'?
        console.warn(" please update your browser") ;
// Exercise 4: Write a console statement that prints an error of 'invalid
// password'?
        console.error("invalid password")
// Exercise 5: Write a console statement that prints the properties of an
// element p.

        console.dir(document.getElementsByTagName('p'))
// Exercise 6: Write a try catch statement that prints out an error. In
// both cases it will also print out finally

        try {
           conle.lg("hello")
        } catch(error) {
            console.log(error.name);
            console.log(error.message);
        } finally {
            console.log("try catch statement is over")
        }


// Exercise 7: Write a switch statement that check and prints out which day
// do we have, ex Thursday
       switch(new Date().getDay()) {
           case 0:
               console.log('Sunday');
           break;
           case 1:
               console.log('Monday');
           break;
           case 2:
               console.log('Tuesday');
           break;
           case 3:
               console.log('Wednesday');
           break;
           case 4:
               console.log('Thirsday');
           break;
           case 5:
               console.log('Friday');
           break;
           case 6:
               console.log('Sturday');
           break;
           

       }
       
// Exercise 8: Write 5 different ways to check if an object is empty
       const obj = {};
        
        if ( Object.keys(obj).length === 0) {
            console.log("empty object")
        }


        if ( Object.entries(obj).length === 0) {
            console.log("empty object")
        }

        if ( Object.values(obj).length === 0) {
            console.log("empty object")
        }
        
        (function checkIfNoProp() {
            let count = 0;
        for ( prop in obj) {
            count++
        }
        if (count === 0){
            console.log("empty object")
        }
        })();
       

// Exercise 9: Write 4 different ways to find a value in an Array, write
// your own smart examples
        const colors = ["red", "black", "blue"];

        console.log(colors.includes("blue"));
        console.log(colors.indexOf("blue") !== -1);
        console.log(colors.lastIndexOf("blue") !== -1);
        console.log(colors.find( color => color === "blue") !== "undefined");
       
       
       