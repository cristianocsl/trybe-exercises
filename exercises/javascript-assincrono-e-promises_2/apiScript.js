// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/'; // endereço para o qual a requisição será feita, ou seja, a url do serviço.

// Um objeto contendo as especificações da requisição. Para essa API , atribuiremos a esse objeto as chaves method e headers

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  return fetch(API_URL, myObject)
  .then(response => response.json()) // retorna o cabeçalho (informações gerais). JSON é uma propriedade do cabeçalho. Este 1° then() vem em forma de PROMISE
  .then(data => {
    const piada = document.getElementById('jokeContainer');
    piada.innerHTML = data.joke
  });
};

window.onload = () => fetchJoke();