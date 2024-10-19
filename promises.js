// an array of posts
const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  // The set time out takes a callback function and a certsin amount of time you want to delay
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      // we will be iterating through post
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
// The create post takes in

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error:Something went wrong buddy!");
      }
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Async await
// async function init() {
//   await createPost({ title: "Post Three", body: "This is post three" });

//   getPosts();
// }
// init();

// Async await with fetch
async function fetchUsers() {}

// Promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );

// const promise4 = fetch
//     ('https://jsonplaceholder.typicode.com/comments?postId=1').then(res
//         => res.json()
//     )

// Promise.all([promise1, promise2, promise3]).then((values) =>
//   console.log(values)
// );
