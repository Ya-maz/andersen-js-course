import 'regenerator-runtime/runtime';

const asyncBar = async () => 'Some string!';

async function foo() {
  let str = await asyncBar();
  console.log(str);
}

foo();