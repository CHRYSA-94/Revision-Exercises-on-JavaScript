const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  
  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };


  // Exercise 1: In index.js print the name of each company using forEach
       
  companies.forEach(company => console.log(company["name"]));
    
  // Exercise 2: In index.js print the name of each company that started
  // after 1987

  companies.filter(company => company["start"] > 1987).forEach(company => console.log(company["name"]));

  // Exercise 3: In index.js get only the companies that have category
  // Retail, increment their start by 1 and append in the DOM a div that has
  // the name, the category, the start and the end in paragraphs elements

  const retailCompanies = companies.filter(company => company.category === "Retail");
  retailCompanies.map( company => company.start ++);
  console.log(retailCompanies);

  var div = document.createElement("div");
  document.body.appendChild(div);
  retailCompanies.forEach( company => {
     let p = document.createElement("p");
     p.innerHTML = `${company.name} ${company.category} ${company.start} ${company.end}`;
     div.appendChild(p);
  });
  

  // Exercise 4: In index.js sort the companies based on their end date in
  // asceding order
  
  const sortedComp = companies.sort( (a ,b)=> a.end - b.end);
  console.log(sortedComp);

  // Exercise 5: In index.js sort the ages array in desceding order

  const sortedAges = ages.sort( (a ,b)=> b - a);
  console.log(sortedAges);

  // Exercise 6: In index.js print the sum if you add all the ages using
  // reduce

  const reduce = ages.reduce((sum, age) => sum + age);
  console.log(reduce);

  // Exercise 7: In index.js make an new object that has the properties of
  // name and category same as the companies[0] and a method print that
  // prints out the name, use object destructuring and ES6 JS

  const {name , category} = companies[0];
  const obj = { 
     name : name,
     category : category,
     print() {
       print(this.name);
     }
    };

  // Exercise 8: In index.js create a funcion that takes an unkown number of
  // arguments that are numbers and return their sum;
   
  const unknownArguments = (...arg) => console.log(arg.reduce((sum, num) => sum + num));
  unknownArguments(10 , 8, 2)
 
  // Exercise 9: In index.js make a function that takes an unkown number of
  // arguments of any type and adds them in an array and returns the array,
  // if the argument is an array it should add it's values to the array that
  // will be returned by the function

  


  // Exercise 10:index.js distructure the property street in a variable named
  // street from the object person

  // Exercise 11: In index.js write a function that everytime you call it, it
  // returns a number that increments starting from 0

  // Exercise 12: In index.js create a function that distructures the query
  // parameters of a url and adds them in an object as key value pairs and
  // then returns the object
