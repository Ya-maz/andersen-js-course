function foo(num, callback) {
  if (num > 10) {
    console.log(`${num} > 10`);
    callback();
  } else if (num <= 10) {
    console.log(`${num} <= 10`);
  }
}
function createCb(str) {
  return () => console.log(`${str}`);
}

foo(5, createCb('cb'));
foo(20, createCb('cb'));
