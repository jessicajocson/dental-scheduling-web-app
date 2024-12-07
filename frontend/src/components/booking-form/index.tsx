import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Example slots for demonstration
  const availableSlots = [
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '3:00 PM',
    '4:00 PM',
  ];

  const handleSubmit = async () => {
    if (!selectedDate || !selectedSlot) {
      setError('Please select a date and a time slot.');
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const response = await axios.post('/api/appointments', {
        appointmentDate: selectedDate.format('YYYY-MM-DD'),
        appointmentSlot: selectedSlot,
      });

      console.log('Appointment booked successfully:', response.data);
      alert('Appointment booked successfully!');
    } catch (err: any) {
      console.error('Error booking appointment:', err);
      setError('Failed to book appointment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
        {/* <h2>Book an Appointment</h2> */}
        {/* Date Selector */}
        <DateCalendar
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
        />
        <br />

        {/* Time Slot Selector */}
        {selectedDate && (
          <div>
            <h3>Available Time Slots</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {availableSlots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  style={{
                    padding: '10px 15px',
                    borderRadius: '5px',
                    border: selectedSlot === slot ? '2px solid #1976d2' : '1px solid #ccc',
                    backgroundColor: selectedSlot === slot ? '#1976d2' : '#fff',
                    color: selectedSlot === slot ? '#fff' : '#000',
                    cursor: 'pointer',
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}
        <br />

        {/* Error Message */}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            backgroundColor: '#1976d2',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {isLoading ? 'Booking...' : 'Book Appointment'}
        </button>
      </div>
    </LocalizationProvider>
  );
};

export default BookingForm;
