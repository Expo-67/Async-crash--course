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

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

// The getposts is a callback
createPost({ title: "Post Three", body: "This is post three" }, getPosts);
