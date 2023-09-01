import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ForwardedFeedbacks from './Feedbacks';

describe('ForwardedFeedbacks Component', () => {
  it('renders correctly', () => {
    const ref = React.createRef<HTMLDivElement>();
    
    render(
      <Router>
        <ForwardedFeedbacks ref={ref} />
      </Router>
    );

    expect(screen.getByText('Feedbacks')).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum dolor sit amet,/i)).toBeInTheDocument();
    expect(screen.getByText('Martin Friman Programmer,')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /somesite\.com/i })).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});