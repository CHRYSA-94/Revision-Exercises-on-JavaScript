    // Exercise 1: Get the posts from the https://jsonplaceholder.typicode.com/
    // endpoint;

    
     async function getPosts() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await res.json();
        
    
    
       // Exercise 2: Save the posts you get to local storage.

       posts.forEach( post => localStorage.setItem(`${post.id}`, JSON.stringify(post) ))

       // Exercise 3: Print the posts to the document after 2 sec.

       setTimeout(() =>  console.log(posts) ,2000);

       
       // Exercise 4: Create 2 inputs and save a new post to
       // https://jsonplaceholder.typicode.com/posts

      
      document.getElementById("addPost").addEventListener("click", createPosts);

       function createPosts() {
            let title = document.getElementById("title").value ;
            let body = document.getElementById("body").value ;

           fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                "Accept": "application/json, */*",
                "Contenet-Type": "application/json"
            },
            body:JSON.stringify({title:title, body:body})
           })
           .then(res => res.json())
           .then( data => console.log(data))
       }

      

     //  Exercise 5: Create a filter for the posts based on the title

      let ex5 = document.getElementById("ex5").value;
     
      document.getElementById("ex5").addEventListener('input', function() {
        
        posts.forEach(post => {
            if (post.title.toLowerCase().indexOf(ex5.toLowerCase) !== -1) {
                document.getElementById("results").innerHTML += 
                ` <h2>${post.title}</h2>
                  <p>${post.body}</p>`
            }
        });
        
    })
}

getPosts()

       