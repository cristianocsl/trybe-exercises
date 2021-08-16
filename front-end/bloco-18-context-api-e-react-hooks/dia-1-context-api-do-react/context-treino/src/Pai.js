import React from 'react';
import MyContext from './MyContext';
import Filho from './Filho';

class Pai extends React.Component {
  constructor(props) {
    super(props);
    this.state = { money: 10000}
    this.spend = this.spend.bind(this);
  }
spend() {
  this.setState((prevState) => ({money: prevState.money - 100}))
}

  render() {
    const contextValue = {
      money: this.state.money,
      spend: this.state.spend,
    }
    return (
      <div>
        <h2>Mensagem do pai:</h2>
        <h1>Aperte o botão para gastar R$ 100.</h1>
        <MyContext.Provider value={contextValue}>
          <Filho />
        </MyContext.Provider>
      </div>
    ); 
  }
}

export default Pai;