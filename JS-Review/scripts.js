// // async js - promises
// // pending, rejected, fulfilled

// fetch("https://jsonplaceholder.typicode.com/todos").then((res) =>
//   res.json().then((data) => console.log(data))
// );
// // then functionality gets executed asynchronously with proceeding code
// console.log("test");

// async-await

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  console.log("inner text");
  return data;
}

const todos = getTodos();
console.log(todos);
console.log("outer text");
