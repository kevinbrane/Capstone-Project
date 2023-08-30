import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom'; // <- Añadir esta línea
import Button from './Button';

describe('Button component', () => {
  test('renders button correctly with text', () => {
    render(<Button text="Click Me" />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders with variant', () => {
    const { container } = render(<Button variant="primary" />);
    expect(container.firstChild).toHaveClass('primary');
  });

  test('handles onClick', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} />);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  // Envolver en BrowserRouter
  test('renders as a Link when linkTo is provided', () => {
    render(
      <BrowserRouter>
        <Button linkTo="/some-route" />
      </BrowserRouter>
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/some-route');
  });
});