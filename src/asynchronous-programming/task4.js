const url = 'https://jsonplaceholder.typicode.com/users';

function getResponse(url) {
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  });
}
getResponse(url)
  .then(jsonResponse => console.log(jsonResponse))
  .catch(networkError => console.log(networkError.message));
