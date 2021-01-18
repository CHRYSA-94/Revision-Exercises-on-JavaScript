// Exercise 1: Declare a variable list and assing it the third li element
// of the first ol element;

  const ex1 = document.querySelectorAll('ol li:nth-child(3)')[0] ;

  
// Exercise 2: Declare a variable lists and assing it the all the li
// element with class="bullets" of the second ol element;

  const ex2 = document.querySelectorAll('ol.bullets li.bullets') 
  console.log( Array.from(ex2))

// Exercise 3: Add a click event listener in the 3rd li of the 1st ol and that changes the 
// color to red and stop the event Propagation? 

  ex1.addEventListener('click', function redText(e) {
     ex1.style.color = "red";
     e.stopPropagation();
} )

// Exercise 4: Write a program that checks if a word has a specific text in it.
// If it starts with it then it should return it starts with, if it has it in 
// the middle then is should return it includes it and if it ends with it should return ends with

const textExist = function(text, char) {
    if (text.indexOf(char) === 0) {
         console.log("starts with ",char);
    } else if (text.lastIndexOf(char) === text.length - char.length) { 
        console.log("ends with ",char);
    } else if (text.indexOf(char) !== 0 && text.lastIndexOf(char) !== text.length - char.length && text.indexOf(char) !== -1 ) {
        console.log("it has it in the middle ",char)
    }
}


textExist("helloo", "ll")

// Exercise 5: Write a function that implements recursion

  const recursion = function recursion(num) {
      
      if (num >= 1000) {
          return  console.log ( "end of recursion") ;
      }
      console.log ("square numbers", num)
     
      return recursion(num * num) ;
  }

  recursion(2)

// Exercise 6: Write a constructor Person that takes in the gender, name, age and set it's prototype 
// of which the instances inherit a property of legs 2 and hands 2.
// Do the same with a class

//constructor
  function Person(gender, name, age) {
      this.gender = gender;
      this.name = name;
      this.age = age;
  }

  Person.prototype = { legs:2 , hands:2};

//class

class People {
    constructor(gender, name, age) {
        this.gender = gender;
        this.name = name;
        this.age = age;
    }
    legs = 2 ;
    hands = 2;
}

const chrysa = new Person("Female", "Chrysa", 26 );
const anna = new People("Female", "Anna", 27 );