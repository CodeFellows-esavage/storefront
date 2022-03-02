import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import createReduxStore from '../../store/index';
import Categories from './Categories';
import '@testing-library/jest-dom'

const store = createReduxStore();

describe('Testing the Categories component', () => {
  it('should display categories', () => {

    render(
      <Provider store={store}>
        <Categories />
      </Provider>
    )
    // let electronics = screen.getByText('ELECTRONICS');
    // expect(electronics).toBeInTheDocument();
    let food = screen.getByText("FOOD");
    let electronics = screen.getByText("ELECTRONICS");
    expect(food).toBeInTheDocument();
    expect(electronics).toBeInTheDocument();
  });
});
