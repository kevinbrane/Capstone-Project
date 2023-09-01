import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import GoUpButton from './GoUpButton';

// Mock de la función scrollTo
global.window.scrollTo = jest.fn();

describe('GoUpButton Component', () => {
  beforeEach(() => {
    // Reinicia el mock antes de cada prueba
    global.window.scrollTo.mockReset();
  });

  it('renders correctly', () => {
    render(<GoUpButton />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('calls window.scrollTo with correct parameters when clicked', () => {
    render(<GoUpButton />);
    
    fireEvent.click(screen.getByRole('img'));
    expect(global.window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: 'smooth'
    });
  });
});