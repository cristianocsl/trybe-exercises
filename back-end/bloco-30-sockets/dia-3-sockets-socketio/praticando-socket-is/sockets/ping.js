module.exports = (io) => {
  io.on('connection', (socket) => {
    // criamos sempre os eventos dentro de 'connection' 
    socket.emit('evento1', 'Que bom que você chegou');
    console.log(`Usuário conectado. ID: ${socket.id}`);
    
    socket.on('pingo', () => console.log(`${socket.id} emitiu um ping!`));
    // socket.on() cria um listener: criamos um listener para o evento 'ping'.

    socket.on('evento2', () => {
      console.log(`${socket.id} emitiu um ping!`); // é mostrado no terminal
      io.emit('pong', `${socket.id} enviou um ping!`); // essa linha envia um aviso para o cliente que o ping chegou.
    });
  });
};
