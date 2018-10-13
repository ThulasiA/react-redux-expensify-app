import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary component', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1}  expensesTotal={2000} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary component', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={3}  expensesTotal={1234} />);
  expect(wrapper).toMatchSnapshot();
});