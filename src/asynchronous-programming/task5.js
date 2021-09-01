// const arrayOfUrl = [
//   'http://www.json-generator.com/api/json/get/cevhxOsZnS',
//   'http://www.json-generator.com/api/json/get/cguaPsRxAi',
//   'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
//   'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
//   'http://www.json-generator.com/api/json/get/ceQMMKpidK',
// ];
const arrayOfUrl2 = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/todos',
];
function log(value) {
  console.log(`${typeof value}`, value);
}

function getResponse(url) {
  return fetch(url)
    .then(response => response.json())
    .catch(e => log(e));
}
function reception(arrPromise, url, isParallel) {
  if (isParallel) {
    return Promise.all(arrPromise);
  }
  // -----   (」°ロ°)」  ---------
  const arrSequentially = [];
  const prom = url.reduce(
    (promise, currentUrl) =>
      promise
        .then(() => fetch(currentUrl))
        .then(res => res.json())
        .then(json => arrSequentially.push(json)),
    Promise.resolve()
  );
  return prom.then(() => arrSequentially);
}
// -----   (￢_￢;)  ---------

const manyURlFetch = arrayOfUrl2.map(url => getResponse(url));
log(manyURlFetch);

reception(manyURlFetch, arrayOfUrl2, false).then(log);
