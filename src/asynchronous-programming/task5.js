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
function reception(urls, isParallel) {
  if (isParallel) {
    return Promise.all(urls.map(url => fetch(url)))
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then(log);
  }
  const manyURlFetch = urls.map((url, i) =>
    getResponse(url).then(data => console.log(`promise #${i}:`, data))
  );
  return manyURlFetch;
}

reception(arrayOfUrl2, false);
