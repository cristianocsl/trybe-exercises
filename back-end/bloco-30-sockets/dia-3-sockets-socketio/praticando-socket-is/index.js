const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',  // url aceita pelo cors
    methods: ['GET', 'POST'], // Métodos aceitos pela url
  },
});
app.use(express.static(__dirname + '/public'));

app.use(cors());

require('./sockets/ping')(io);

require('./sockets/chat')(io);

// io.on('connection', (socket) => {
//   // criamos sempre os eventos dentro de 'connection' 
//   socket.emit('evento1', 'Que bom que você chegou');
//   // console.log(`Usuário conectado. ID: ${socket.id}`);
  
//   // socket.on('pingo', () => console.log(`${socket.id} emitiu um ping!`));
//   // socket.on() cria um listener: criamos um listener para o evento 'ping'.

//   socket.on('evento2', () => {
//     console.log(`${socket.id} emitiu um ping!`); // é mostrado no terminal
//     io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
//   });
// });
// // a função io.on('connection') vai ser executada sempre que um novo client se conectar ao servidor.
// // No objeto socket temos um atributo id que é uma string aleatória que é gerada a cada nova conexão.


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});

// const express = require('express');
// const app = express();
// const PORT = 3000; 

// app.use(express.json());

// app.get('/', (req, res) => {
//   return res.status(200).json({ message: 'Conectado!' });
// });

// app.listen(PORT, () => console.log(`Ouvindo em ${PORT}`));
