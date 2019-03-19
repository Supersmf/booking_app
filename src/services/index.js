export const fetchFlights = () => (
  fetch('http://localhost:3000/flights')
    .then(response => response.json())
);

export const fetch2 = () => ({});
