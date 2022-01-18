const socket = window.io();


const button = document.querySelector('#pingButton');
button.addEventListener('click', (e) =>{
  socket.emit('evento2');
  return false;
});

// cria uma `li` e coloca dentro da `ul` com `id` mensagens
const createMessage = (message) => {
  const messagesUl = document.querySelector('#messages');
  const li = document.createElement('li');
  li.innerText = message;
  messagesUl.appendChild(li);
};

createMessage('blabla');

socket.on('pong', (mensagem) => createMessage(mensagem));
socket.on('evento1', (mensagem) => createMessage(mensagem));
