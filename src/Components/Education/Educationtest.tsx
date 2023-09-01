/* import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import educationReducer from '../../features/education/educationSlice';
import ForwardedEducation from './Education';
import userEvent from '@testing-library/user-event';

const mockEducationData = [
  {
    id: 0,
    date: 2001,
    title: "Title 0",
    text: "Elit voluptate ad nostrud laboris...",
    line_img: "../src/assets/Education/Rectangle.png",
    vector: "../src/assets/Education/Vector1.png",
  },
];

describe('ForwardedEducation component', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        education: educationReducer,
      },
    });
    jest.spyOn(store, 'dispatch');
  });

  it('should dispatch fetchEducationData if status is idle or educations is empty', () => {
    render(
      <Provider store={store}>
        <ForwardedEducation />
      </Provider>
    );
  
    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function)); // Usamos expect.any(Function) ya que fetchEducationData es una función
  });

  it('should display spinner when status is loading', () => {
    store = configureStore({
      reducer: {
        education: educationReducer,
      },
      preloadedState: {
        education: {
          status: 'loading',
        },
      },
    });

    render(
      <Provider store={store}>
        <ForwardedEducation />
      </Provider>
    );
  
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should display error message when status is failed', async () => {
    store = configureStore({
      reducer: {
        education: educationReducer,
      },
      preloadedState: {
        education: {
          status: 'failed',
        },
      },
    });

    render(
      <Provider store={store}>
        <ForwardedEducation />
      </Provider>
    );
  
    await waitFor(() => {
      expect(screen.getByText('Error loading education data.')).toBeInTheDocument();
    });
  });

  it('should display education data when status is succeeded', () => {
    store = configureStore({
      reducer: {
        education: educationReducer,
      },
      preloadedState: {
        education: {
          status: 'succeeded',
          educations: mockEducationData,
        },
      },
    });

    render(
      <Provider store={store}>
        <ForwardedEducation />
      </Provider>
    );
  
    mockEducationData.forEach((edu) => {
      expect(screen.getByText(edu.date.toString())).toBeInTheDocument();
      expect(screen.getByText(edu.title)).toBeInTheDocument();
      expect(screen.getByText(edu.text)).toBeInTheDocument();
    });
  });
}); */