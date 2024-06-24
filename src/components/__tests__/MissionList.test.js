// // RocketList.test.js

// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // For additional matchers like toBeInTheDocument
// import axios from 'axios';
// import RocketList from '../RocketList';

// jest.mock('axios'); // Mock axios module

// describe('RocketList component', () => {
//   beforeEach(() => {
//     axios.get.mockResolvedValue({
//       data: [
//         { flight_number: 1, mission_name: 'Mission 1', payload_count: 3 },
//         { flight_number: 2, mission_name: 'Mission 2', payload_count: 1 },
//       ],
//     });
//   });

//   it('renders loading text initially', () => {
//     render(<RocketList apiUrl="https://api.spacexdata.com/v3/launches" />);
//     expect(screen.getByText('Loading...')).toBeInTheDocument();
//   });

//   it('renders mission list after data fetch', async () => {
//     render(<RocketList apiUrl="https://api.spacexdata.com/v3/launches" />);
    
//     // Wait for data fetching and rendering
//     await waitFor(() => {
//       expect(screen.getByText('#1')).toBeInTheDocument();
//       expect(screen.getByText('Mission 1')).toBeInTheDocument();
//       expect(screen.getByText('(3)')).toBeInTheDocument();

//       expect(screen.getByText('#2')).toBeInTheDocument();
//       expect(screen.getByText('Mission 2')).toBeInTheDocument();
//       expect(screen.getByText('(1)')).toBeInTheDocument();
//     });
//   });

//   it('renders error message on fetch failure', async () => {
//     axios.get.mockRejectedValue(new Error('Failed to fetch data'));
//     render(<RocketList apiUrl="https://api.spacexdata.com/v3/launches" />);

//     // Wait for error rendering
//     await waitFor(() => {
//       expect(screen.getByText('Failed to fetch data')).toBeInTheDocument();
//     });
//   });
// });
