import React from 'react';
import { render, screen } from '@testing-library/react';
import Digimon from './Digimon';

describe.skip('Teste da tela do Digimon', () => {
  it('renders Digimon', () => {
    render(<Digimon />);
    const digimonNameField = screen.getByTestId('digimonName');
    expect(digimonNameField).toBeNull();
  });
});