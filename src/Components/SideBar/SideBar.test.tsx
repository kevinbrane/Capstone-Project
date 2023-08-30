import React from 'react';
import '@testing-library/jest-dom'; 
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SideBar from './SideBar';

const mockScrollToRef = jest.fn();

const mockRefs = {
  aboutMe: React.createRef<HTMLDivElement>(),
  education: React.createRef<HTMLDivElement>(),
  experience: React.createRef<HTMLDivElement>(),
  skills: React.createRef<HTMLDivElement>(),
  portfolio: React.createRef<HTMLDivElement>(),
  contacts: React.createRef<HTMLDivElement>(),
  feedbacks: React.createRef<HTMLDivElement>(),
};

describe('SideBar Component', () => {
  it('renders correctly', () => {
    render(
      <Router>
        <SideBar scrollToRef={mockScrollToRef} refs={mockRefs} />
      </Router>
    );

    expect(screen.getByText('About me')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contacts')).toBeInTheDocument();
    expect(screen.getByText('Feedback')).toBeInTheDocument();
  });

  it('calls scrollToRef with the correct ref when clicked', () => {
    render(
      <Router>
        <SideBar scrollToRef={mockScrollToRef} refs={mockRefs} />
      </Router>  
    );

    fireEvent.click(screen.getByText('About me'));
    expect(mockScrollToRef).toHaveBeenCalledWith(mockRefs.aboutMe);
    fireEvent.click(screen.getByText('Education'));
    expect(mockScrollToRef).toHaveBeenCalledWith(mockRefs.education);
    fireEvent.click(screen.getByText('Experience'));
    expect(mockScrollToRef).toHaveBeenCalledWith(mockRefs.experience);
  });
});