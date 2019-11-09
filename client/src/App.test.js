import React from 'react';
import {render, fireEvent} from "@testing-library/react";
import App, {sum} from './App';
import PlayerCard from "./components/PlayerCard";
import PlayerList from "./components/PlayerList"

test('it returns the sum of two numbers', () =>{
  expect(sum(2,2)).toBe(4);
});

test('renders without crashing', () => {
  render(<App />);
});


test('Loads Component', () =>{
  const {queryAllByText} = render(<PlayerCard />)
  queryAllByText(/name/i);
})


test('Loads Component', () =>{
   render(<PlayerList />); })
   
 