import 'regenerator-runtime/runtime';

const getUsers = url => fetch(url);
/*
function foo(url) {
  getUsers(url)
    .then(response => response.json())
    .then(([user]) => console.log(user))
    .catch(err => console.log('Error!', err));
}
foo('https://jsonplaceholder.typicode.com/users');
*/
async function bar(url) {
  const response = await getUsers(url);
  const json = await response.json();
  const [user] = await json;
  return console.log(user);
}
bar('https://jsonplaceholder.typicode.com/users');
