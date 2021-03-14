const posts = [
    {title: "Post One", body: "This is Post One"}, 
    {title: "Post Two", body: "This is Post Two"}
];
function getPosts() {
    setTimeout(() => {
        let output = "";

        //Using forEach
        // posts.forEach(item => output += `<li>${item.title}</li>`);

        //Using map. will return an array with a comma(,)
        output =`
        <ul> ${posts.map(item => `<li>${item.title}</li>`).join('')}</ul>
        `;

        document.body.innerHTML = output;
        }, 1000);
}

// getPosts();

//callback is a function added as an parameter to another function
//asynchronous callback is a function that is run asynchronously
function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 1500);
}
createPost({title: "Post Three", body: "This is Post Three"}, getPosts);