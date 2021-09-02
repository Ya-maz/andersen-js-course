import 'regenerator-runtime/runtime';
/*
const getPromise1 = () => Promise.resolve(2);
const getPromise2 = () => Promise.resolve(3);
const getPromise3 = () => Promise.resolve(7);

function foo() {
  let value1;
  let value2;
  let value3;

  getPromise1()
    .then(value => {
      value1 = value;
      return getPromise2();
    })
    .then(value => {
      value2 = value;
      return getPromise3();
    })
    .then(value => {
      console.log(2 * (3 + 7));
      console.log(value1 * (value2 + value));
    });
}
foo(); */

const getPromise1 = () => Promise.resolve(2);
const getPromise2 = () => Promise.resolve(3);
const getPromise3 = () => Promise.resolve(7);

async function foo() {
  const value1 = await getPromise1();
  const value2 = await getPromise2();
  const value3 = await getPromise3();

  return value1 * (value2 + value3);
}
foo().then(console.log);
