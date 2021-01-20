// Exercise 1: Concat nums1 into nums2, then clone it into nums3 and find
// the max and the min number;
    const nums1 = [22, 33, 42, 55];
    let nums2 = [134, 212, 44, 12,...nums1];
    
    Math.max(...nums2);
    Math.min(...nums2);

// Exercise 2: Sum the total score of all the fishermen. Also get the
// average score and print the names of those that have a score higher then
// 100

    let fishermen = {
        Costas: 100,
        George: 110,
        Christos: 90,
        Vasilis: 80
    };

    const totalScore = Object.values(fishermen).reduce((acc, val) => acc + val , 0);
    const averageScore = totalScore / Object.values(fishermen).length;
    const higherScores = Object.entries(fishermen).filter(score => { score[1] > 100
    return console.log(score[0])})

// Exercise 3: Write a regular expression that finds all numbers in a
// string.

    const str = "Hello 55 there 10 !";
    const regExp = /\d+/g ;
    let numbArr = str.match(RegExp);
    console.log(numbArr)

// Exercise 4: Write a function that checks if scores are all positive
// numbers and an other function if there is a value that is not a number


    const scores = [11, 33, -1, 0, "b", 123];
    let allPos = scores.every(val => val > 0);
    const isNan = scores.some( val => isNaN )
    console.log(isNan)

// Exercise 5: Write a function that takes 2 arguments and checks if both
// are positive if one is positive and if both are negative.

const isPositive = function(arg1, arg2) {
    switch(true){
        case (arg1 > 0 && arg2 > 0) :
            return console.log(" they are both positive") ;
        break;
        case (arg1 < 0 && arg2 < 0):
            return console.log(" they are both negative") ;
        break;
        default:
            return console.log(" one is positive and one negative") ;
        break;
    }
}

isPositive( -5 ,-2);