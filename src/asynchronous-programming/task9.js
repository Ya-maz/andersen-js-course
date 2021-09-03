import 'regenerator-runtime/runtime';

const asyncBar = async () => 'Some string!';

async function foo() {
  const str = await asyncBar();
  console.log(str);
}

foo();
