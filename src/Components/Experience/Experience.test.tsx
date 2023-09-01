import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ForwardedExperience from './Experience';
import { experienceData } from '../../utils/constants';

describe('ForwardedExperience Component', () => {
  it('renders correctly', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<ForwardedExperience ref={ref} />);

    expect(screen.getByText('Experience')).toBeInTheDocument();
  });

  it('displays experienceData correctly', () => {
    const ref = React.createRef<HTMLDivElement>();

    render(<ForwardedExperience ref={ref} />);

    experienceData.forEach((exp) => {
      expect(screen.getByText(exp.info.company)).toBeInTheDocument();
      expect(screen.getByText(exp.date)).toBeInTheDocument();
      expect(screen.getByText(exp.info.job)).toBeInTheDocument();
      expect(screen.getByText(exp.info.description)).toBeInTheDocument();
    });
  });
});