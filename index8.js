// Exercise 1: Create a function that takes an array as an argument and
// removes all duplicates;
const arr1 = [5, 7 , "a", 8, "a"];

function removeDuplicates() {
    let set = new Set([...arr1]);
    let newArray = [...set]
  console.log(newArray)
}
removeDuplicates(arr1);

  
// Exercise 2: Create a function that takes 3 arguments. The first is an
// array, the seconds is a value and the third is a string. According to
// the string it will add that values or remove a value from the begging of
// the array, or add that value or remove a value from the end of the
// array.

function exercise2(array, value, string) {
  switch(true) {
    case string === "push":
      array.push(value);
      console.log(array);
    break;
    case string === "pop":
      array.pop();
      console.log(array);
    break;
    case string === "shift":
      array.shift();
      console.log(array);
    break;
    case string === "unshift":
      array.unshift(value);
      console.log(array);
    break;
    default :
      console.log("method didn't recognized")
    break;

  }
}

exercise2([5, 8, 9, 10], 8, "push")
// Exercise 3: Create a function that takes in an array filters everything
// besides numbers and then make it fail so you can debug it.

function filterNaN(arr) {
  const notNum = arr.filter(val => isNaN(val))
  console.log(notNum)
}
    
filterNaN(["a", 5, "l", 8, 9 ])
// Exercise 4: Do the filter Exercise.
