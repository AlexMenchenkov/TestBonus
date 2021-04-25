import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import {App} from './App';
import configureStore from 'redux-mock-store';

const mockStore = configureStore({});
test('renders screen easy test', () => {
  render(
      <redux.Provider store={mockStore({})}>
          <App />
      </redux.Provider>
  );
  const linkElement = screen.getByText(/Логотип/i);
  expect(linkElement).toBeInTheDocument();
});
