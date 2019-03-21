import axios from 'axios';

export const fetchFlights = () => (
  axios('http://localhost:3000/flights')
);

export const addFlights = () => (
  axios.post('http://localhost:3000/flights', {
    from: 'Canada',
    to: 'Australia',
    startTime: '2019-05-19T16:05:00.000Z',
    endTime: '2019-05-19T18:15:00.000Z',
    flight: 'B2 846',
    priceEconomy: 177.05,
    priceBusiness: 585.1,
  })
);

export const updateFlights = flight => (
  axios.put(`http://localhost:3000/flights:${flight.id}`, {
    from: 'Canada222',
    to: 'Australia222',
    startTime: '2019-05-19T16:05:00.000Z222',
    endTime: '2019-05-19T18:15:00.000Z222',
    flight: 'B2 846222',
    priceEconomy: 177.05222,
    priceBusiness: 585.1222,
  })
);
