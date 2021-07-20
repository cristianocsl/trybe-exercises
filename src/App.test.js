import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
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

  it('insere um valor na caixa busca', () => { // teste que cobre o statement referente a linha 12 do App, que atualiza o state. Após encontrar o input, teste se event.target.value está sendo passado para o state "searchDigimon".
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    userEvent.type(input,'Digimonge');
    expect(input).toHaveValue('Digimonge');
  })

  test('Insere um valor na caixa de busca', () => {

    const input = screen.getByTestId('input');
    expect(input).toHaveValue('');

    userEvent.type(input, 'Agumon');
    expect(input).toHaveValue('Agumon');

    const button = screen.getByTestId('buttonSearch');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
  });

});