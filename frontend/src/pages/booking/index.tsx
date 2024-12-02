import { useState, useEffect } from 'react';
import BookingForm from '../../components/booking-form';
// import axios from 'axios';
import '../../styles/bookingpage.css'

interface Dentist {
  id: string;
  name: string;
}

interface Slot {
  time: string;
  isAvailable: boolean;
}

const Booking = () => {
  const [dentists, setDentists] = useState<Dentist[]>([]);
  const [selectedDentist, setSelectedDentist] = useState('');
  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);

  // useEffect(() => {
  //   // Fetch dentists
  //   axios.get('/api/dentists').then((response) => {
  //     setDentists(response.data);
  //   });
  // }, []);

  const handleDentistChange = (id: string) => {
    setSelectedDentist(id);

    // // Fetch available slots for the selected dentist
    // axios.get(`/api/dentists/${id}/slots`).then((response) => {
    //   setAvailableSlots(response.data);
    // });
  };

  const handleBooking = (slot: string) => {
    axios.post('/api/appointments', {
      dentistId: selectedDentist,
      slot,
    });
    alert('Appointment booked successfully!');
  };

  return (
    <div className='app-container'>
      <h2>Book an Appointment</h2>
      <label>
        Select Dentist:
        <select onChange={(e) => handleDentistChange(e.target.value)}>
          <option value="">--Select--</option>
          {dentists.map((dentist: any) => (
            <option key={dentist.id} value={dentist.id}>
              {dentist.name} - {dentist.specialty}
            </option>
          ))}
        </select>
      </label>

      <div>
  <h3>Available Slots:</h3>
  <BookingForm/>
  {availableSlots.length > 0 ? (
    availableSlots.map((slot, index) => (
      <button key={index} onClick={() => handleBooking(slot.time)}>
        {slot.time}
      </button>
    ))
  ) : (
    <p>No slots available.</p>
  )}
</div>

    </div>
  );
};

export default Booking;
