import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste da aplicação toda', () => {
  beforeEach(() => render(<App />));
  afterEach(() => jest.clearAllMocks);
  
  it('renderiza App', () => { // testa se input, botão e textos estão sendo renderizados corretamente em APP.
    const linkElement = screen.getByText(/Search Digimon/i);
    expect(linkElement).toBeInTheDocument();
    const makeASearch = screen.getByText(/faça uma pesquisa/i)
    expect(makeASearch).toBeInTheDocument();
    const searchInput = screen.getByTestId('input');
    expect(searchInput).toBeInTheDocument();
  });

  it('insere um valor na caixa busca', () => { // teste que cobre o state referente a linha 12 do App, que atualiza o state. Após encontrar o input, teste se event.target.value está sendo passado para o state "searchDigimon".
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    userEvent.type(input,'Digimonge');
    expect(input).toHaveValue('Digimonge');
  })

  it('Verifica que a tela começa sem digimons renderizados', () => {
    const digimonNameField = screen.queryByTestId('digimonName'); // não consegui fazer essa parte falhar
    expect(digimonNameField).toBeNull();
  })

  test('Insere um valor na caixa de busca', () => {
    const input = screen.getByTestId('input'); // esse trecho não cobre nada especia, pois não aumenta o percentual de cobertura. Só precisa para dar andamento aos passos seguintes.
    expect(input).toHaveValue('');

    userEvent.type(input, 'Agumon'); // este trecho também não cobriu nada no test-coverage.
    expect(input).toHaveValue('Agumon');

    // este trecho cobre a função async da linha 18, o state referente à linha 19, o state dentro do if na linha 20 e o fetch da linha 21.
    const button = screen.getByTestId('buttonSearch');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });

});

describe('Teste da API com mock', () => {
  test('Testa a promise', async () => { //  resolve as promises
    const dados = {
      name: 'Agumon',
      img: '/home/cristiano/trybe-exercises/front-end/bloco-15-testes-automatizados-com-react-testing-library/dia-2-rtl-mocks-e-inputs/exercise-digimon-finders/public/logo192.png',
      level: 'Rookie'
    }
    const response = { json: jest.fn().mockResolvedValue(dados) }
    global.fetch = jest.fn().mockResolvedValue(response);

    render(<App />);
    await screen.findByText('Agumon');
    // await waitFor(() => screen.getByText('Agumon'));

  })
});
