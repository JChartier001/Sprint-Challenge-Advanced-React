import React from 'react';
import {render} from "@testing-library/react";
import App from './App';


test('renders without crashing', () => {
  const {getAllByText} = render(<App />);
  getAllByText(/strike/i)
  
});

test('renders without crashing', () => {
  const {getAllByText} = render(<App />);
  getAllByText(/ball/i)
  
});

test('renders without crashing', () => {
  const {getByText} = render(<App />);
  getByText(/foul/i)
  
});