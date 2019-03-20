import axios from 'axios';

export const fetchFlights = () => (
  fetch('http://localhost:3000/flights')
    .then(response => response.json())
);

export const addFlights = () => (
  axios.post('http://localhost:3000/flights', {
    _id: '5c90ab471c9d4400002dbcc8',
    from: 'Canada',
    to: 'Australia',
    startTime: '2019-05-19T16:05:00.000Z',
    endTime: '2019-05-19T18:15:00.000Z',
    flight: 'B2 846',
    priceEconomy: 177.05,
    priceBusiness: 585.1,
  })
);
