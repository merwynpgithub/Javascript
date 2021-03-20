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


//Promise
//Promise is an object
function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject("Something went wrong!");
            }
        }, 1500);
    });    
}
// createPost({title: "Post Four", body: "This is Post Four"})
// .then(getPosts);
//if error, use .catch(err => console.log(err)) after then

//Async/Await
async function newfunc() {
    await createPost({title: "Post Four", body: "This is Post Four"});
    getPosts();
}
newfunc();

//Promise.all
const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Goodbye");
});
const promise2 = fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json());

Promise.all([promise1, promise2]).then(value => console.log(value));