import { useState, useEffect } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import {
  Modal,
  Box,
  Typography,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import Navbar from '../../components/navbar';

interface Dentist {
  id: string;
  name: string;
  services: string[];
}

interface Slot {
  time: string;
  isAvailable: boolean;
}

const Booking = () => {
  const [dentists, setDentists] = useState<Dentist[]>([]);
  const [services, setServices] = useState<string[]>([]);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDentist, setSelectedDentist] = useState('');
  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    setServices(['General Checkup', 'Teeth Whitening', 'Braces']);
    setDentists([
      { id: '1', name: 'Dr. Smith', services: ['General Checkup', 'Teeth Whitening'] },
      { id: '2', name: 'Dr. Doe', services: ['Braces', 'Teeth Whitening'] },
    ]);
  }, []);

  const handleServiceChange = (service: string) => {
    setSelectedService(service);
    setSelectedDentist('');
    setAvailableSlots([]);
  };

  const handleDentistChange = (id: string) => {
    setSelectedDentist(id);
    setAvailableSlots([
      { time: '10:00 AM', isAvailable: true },
      { time: '11:00 AM', isAvailable: true },
      { time: '1:00 PM', isAvailable: true },
      { time: '3:00 PM', isAvailable: true },
    ]);
  };

  const handleSubmit = async () => {
    if (!selectedDentist || !selectedDate || !selectedSlot) {
      setError('Please select a dentist, a date, and a time slot.');
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Appointment booked successfully');
      setSnackbarOpen(true);
    } catch (err) {
      console.error('Error booking appointment:', err);
      setError('Failed to book appointment. Please try again.');
    } finally {
      setIsLoading(false);
      setIsModalOpen(false);
    }
  };

  const handleModalOpen = () => {
    if (!selectedDate || !selectedSlot) {
      setError('Please select a date and a time slot.');
      return;
    }
    setError(null);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center bg-teal-400 min-h-screen">
      <div className="max-w-5xl w-full bg-white p-2">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>

            {/* Service Selector */}
            <label className="block mb-4">
              <span>Select Service:</span>
              <div className="flex gap-4 justify-center mt-2">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => handleServiceChange(service)}
                    className={`px-6 py-2 rounded border ${selectedService === service ? 'border-teal-600 bg-teal-600 text-white' : 'border-gray-300 bg-white text-black'}`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </label>

            {/* Dentist Selector (Filtered by Service) */}
            {selectedService && (
              <>
                <h3 className="mt-4">Select Dentist:</h3>
                <select
                  onChange={(e) => handleDentistChange(e.target.value)}
                  value={selectedDentist}
                  className="w-full bg-white border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">--Select--</option>
                  {dentists
                    .filter((dentist) => dentist.services.includes(selectedService))
                    .map((dentist) => (
                      <option key={dentist.id} value={dentist.id}>
                        {dentist.name}
                      </option>
                    ))}
                </select>
              </>
            )}

            {/* Date and Time Slots*/}
            {selectedDentist && (
              <div className="flex gap-4 mt-6">
                <div className="flex-1">
                  <h3>Select Date:</h3>
                  <DateCalendar
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                  />
                </div>
                <div className="flex-1">
                  <h3>Available Time Slots</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {availableSlots.map(
                      (slot) =>
                        slot.isAvailable && (
                          <button
                            key={slot.time}
                            onClick={() => setSelectedSlot(slot.time)}
                            className={`px-4 py-2 rounded border ${selectedSlot === slot.time ? 'border-teal-600 bg-teal-600 text-white' : 'border-gray-300 bg-white text-black'}`}
                          >
                            {slot.time}
                          </button>
                        )
                    )}
                  </div>

                  {/* Submit Button */}
            {selectedSlot && (
              <button
                onClick={handleModalOpen}
                disabled={isLoading}
                className="absolute mb-4 bottom-3 right-13 px-6 py-3 bg-teal-500 text-white rounded-lg border-none focus:outline-none hover:bg-teal-600"
              >
                Book Appointment
              </button>
            )}
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && <p className="text-red-600 mt-4">{error}</p>}

            

            {/* Confirmation Modal */}
            <Modal
              open={isModalOpen}
              onClose={handleModalClose}
              aria-labelledby="confirmation-modal"
              aria-describedby="confirm-booking-details"
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 300,
                  bgcolor: 'background.paper',
                  boxShadow: 24,
                  p: 4,
                  borderRadius: 2,
                }}
              >
                <Typography id="confirmation-modal" variant="h6" component="h2">
                  Selected Booking
                </Typography>
                <Typography id="confirm-booking-details" sx={{ mt: 2 }}>
                  {`Date: ${selectedDate?.format('DD/MM/YYYY')}`}
                  <br />
                  {`Service: ${selectedService}`}
                  <br />
                  {`Time: ${selectedSlot}`}
                </Typography>
                <div className="flex justify-between mt-6">
                  <Button variant="contained" color="success" onClick={handleSubmit}>
                    Confirm
                  </Button>
                  <Button variant="outlined" color="error" onClick={handleModalClose}>
                    Cancel
                  </Button>
                </div>
              </Box>
            </Modal>

            <Snackbar
              open={snackbarOpen}
              autoHideDuration={3000}
              onClose={handleSnackbarClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                Appointment booked successfully!
              </Alert>
            </Snackbar>
          </div>
        </LocalizationProvider>
      </div>
    </div>
    </>
  );
};

export default Booking;
