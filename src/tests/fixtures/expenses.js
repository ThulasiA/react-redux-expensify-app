import moment from 'moment';

export default [{
    id: '1',
    description: 'Rent',
    note: '',
    amount: 150000,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Credit',
    note: '',
    amount: 300000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Book',
    note: '',
    amount: 2000,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
];