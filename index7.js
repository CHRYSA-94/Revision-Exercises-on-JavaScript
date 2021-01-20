    // Exercise 1: Get the posts from the https://jsonplaceholder.typicode.com/
    // endpoint;


    async function getPosts() {
        const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await resp.json();

       // Exercise 2: Save the posts you get to local storage.

       posts.forEach( post => localStorage.setItem(`${post.title}`, JSON.stringify(post) ))

       // Exercise 3: Print the posts to the document after 2 sec.

       setTimeout(() =>  console.log(posts) ,2000);

       
       // Exercise 4: Create 2 inputs and save a new post to
       // https://jsonplaceholder.typicode.com/posts

       function createPosts() {
           fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                "Contenet-Type": "application/json"
            },
            body: JSON.stringify({title: "This is a new post", body:"Body of the post"})
           })
           .then(res => res.json())
           .then( data => console.log(data))
       }

       createPosts()



      // Exercise 5: Create a filter for the posts based on the title

       function findPosts(word) {
        
        const filter = posts.filter((post, index, posts )=> { if (post.title.split(' ').includes(`${word}`)) {
             return posts[index].title  }
        })
        console.log(filter);
        }

       findPosts("ea")

    }
    
    getPosts();





    