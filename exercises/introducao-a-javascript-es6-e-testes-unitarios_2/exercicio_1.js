const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log('Exercício 1 - parte 1:', `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number} AP: ${order.address.apartment}.`);
}

customerInfo(order);

const orderModifier = (order) => {
  const newBuyer= order.name = 'Luiz Silva'; // substituindo o valor da chave name.
  const pizzas = Object.keys(order.order.pizza); // acessando as chaves para chegar aos valores.
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';
  console.log('Exercício 1 - Parte 2:', `Olá ${newBuyer}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${newTotal},00.`)
}

orderModifier(order);