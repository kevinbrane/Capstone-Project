import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuButton from './MenuButton';

describe('MenuButton Component', () => {
  it('renders correctly', () => {
    const mockToggleSideBar = jest.fn();
    render(<MenuButton toggleSideBar={mockToggleSideBar} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('calls toggleSideBar function when clicked', () => {
    const mockToggleSideBar = jest.fn();
    render(<MenuButton toggleSideBar={mockToggleSideBar} />);
    
    fireEvent.click(screen.getByRole('img'));
    expect(mockToggleSideBar).toHaveBeenCalled();
  });
});