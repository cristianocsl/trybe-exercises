import React from 'react';
import './App.css';
import Input from './componentes/Input'
// import states from './componentes/statesData';
import Estado from './componentes/Estado';

class App extends React.Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: '',
      email: '',
      cpf: 0,
      endereco: '',
      cidade: '',
      estado: '',
      tipoDeResidencia: '',
      resumoCurriculo: '',
      cargo: '',
      descricaoCargo: '',
    }
    
  }

  handleChange({ target }){
    console.log('Estou mudando o estado do Pai!')
    const { name, value } = target
    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <div>
      <fieldset className="App">
        <Input
          inputLabel='Digite o nome:'
          name='nome'
          type='text'
          value={this.state.nome} // traz o valor do componete nome do filho para o pai através da props.
          handleChange={this.handleChange} //passa a função do pai pro filho através da props.\
        />
        <Input
          inputLabel='Digite o email:'
          name='email'
          value={this.state.email}
          type='email'
          handleChange={this.handleChange} //passando a função do pai pro filho através da props
        />
        <Input
          inputLabel='Digite o CPF:'
          name='cpf'
          value={this.state.cpf}
          type='number'
          handleChange={this.handleChange} //passando a função do pai pro filho através da props
        />
        <Input
          inputLabel='Endereço:'
          name='endereco'
          value={this.state.endereco}
          type='text'
          handleChange={this.handleChange} //passando a função do pai pro filho através da props
        />
        <Input
          inputLabel='Cidade:'
          name='cidade'
          value={this.state.cidade}
          type='text'
          handleChange={this.handleChange} //passando a função do pai pro filho através da props
        />
        <Estado
        inputLabel='Estado:'
        name='estado'
        value={this.state.cidade} // traz o valor do componete nome do filho para o pai através da props.
        type='select'
        handleChange={this.handleChange} //passando a função do pai pro filho através da props
        />
      </fieldset>


      </div>
    );
  }
}

export default App;
