// async js - promises
// pending, rejected, fulfilled

const data = fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
  res.json().then((data) => console.log(data))
);

// then functionality gets executed asynchronously with proceeding code

console.log("test");
