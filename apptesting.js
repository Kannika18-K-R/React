import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';

test('renders BookingForm and validates input', async () => {
  render(<BookingForm />);

  fireEvent.input(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.input(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
  fireEvent.input(screen.getByLabelText(/date/i), { target: { value: '2023-01-01' } });
  fireEvent.input(screen.getByLabelText(/time/i), { target: { value: '19:00' } });
  fireEvent.input(screen.getByLabelText(/number of guests/i), { target: { value: 4 } });

  fireEvent.submit(screen.getByText(/book table/i));

  await screen.findByText(/table booked successfully!/i);
});
