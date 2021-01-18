// Exercise 1: Take the content of all the li elements and wrap them into
// paragraphs and add the DOM;

    const liElemNode = document.querySelectorAll("li");
    const liArr = Array.from(liElemNode);

    const body = document.body;
    const createPar = liArr.forEach( li => {
        let p = document.createElement("p");
        let content = document.createTextNode(li.innerText)
        p.appendChild(content);
        body.appendChild(p)
    })

    console.log(document.body);

// Exercise 2: Call this endpoint
// (https://jsonplaceholder.typicode.com/users), save the results as
// properies of an object in local storage, the names of the users will be
// the property key. After 10 sec remove it from local storage and save it
// in session storage and then after 10 sec remove it from session storage
  
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        
        users.forEach( user => {
            localStorage.setItem(`${user.name}`, JSON.stringify(user));
           
    })

    setTimeout(function(){ 
        for (let key in localStorage) {
             sessionStorage.setItem(`${key.name}`, JSON.stringify(key));
        }
        localStorage.clear() ;
    },10000)
        
    setTimeout(function(){
       sessionStorage.clear();
    },10000)

    })

// Exercise 3: Get assing the numbers to variables from the string '10.5
// kilos' and 'the 200 birds'
  
    const str1 = "10.5 kilos";
    const str2 = "the 200 birds";

    const num1 = parseFloat(str1);
    console.log(num1);

    const num2Arr = str2.split(" ").filter( part => !isNaN(part)).map( finalNum => parseFloat(finalNum));
    const num2 = num2Arr[0]
    console.log(num2)

// Exercise 4: Clone this object const obj = { name: 'Costas', address: {
// str: 'Lalaland 15', city: 'Thessaloniki' } }
 
    const obj = { name: 'Costas', address: { str: 'Lalaland 15', city: 'Thessaloniki' } };

    const  newObj = JSON.parse(JSON.stringify(obj));
    console.log(newObj)

