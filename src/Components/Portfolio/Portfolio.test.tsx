import React, { createRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Portfolio from './Portfolio';

// Mock Isotope as well as its static 'data' method
jest.mock('isotope-layout', () => {
  const MockIsotope = jest.fn().mockImplementation(function() {
    return {
      arrange: jest.fn(),
      destroy: jest.fn(),
    };
  });

  // Mocking the static method
  MockIsotope.data = jest.fn(() => ({
    arrange: jest.fn(),
    destroy: jest.fn(),
  }));

  return MockIsotope;
});

describe('Portfolio component', () => {
  let mockRef;

  beforeEach(() => {
    mockRef = createRef();
    render(
      <Router>
        <Portfolio ref={mockRef} />
      </Router>
    );
  });

  it('should render without crashing', () => {
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
  });

  it('should have an "All" button that can be clicked', () => {
    const allButton = screen.getByText('All');
    expect(allButton).toBeInTheDocument();

    fireEvent.click(allButton);
    expect(allButton).toHaveClass('active');
  });

  it('should have a "Code" button that can be clicked', () => {
    const codeButton = screen.getByText('Code');
    expect(codeButton).toBeInTheDocument();

    fireEvent.click(codeButton);
    expect(codeButton).toHaveClass('active');
  });

  it('should have a "UI" button that can be clicked', () => {
    const uiButton = screen.getByText('UI');
    expect(uiButton).toBeInTheDocument();

    fireEvent.click(uiButton);
    expect(uiButton).toHaveClass('active');
  });
});