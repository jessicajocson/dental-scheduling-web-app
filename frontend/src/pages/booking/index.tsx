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
  ToggleButton, ToggleButtonGroup
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { RadioButtonUnchecked } from '@mui/icons-material';
import Navbar from '../../components/navbar';
import { useBookAppointment } from './hooks/useBooking';
import axios from 'axios';

interface Dentist {
  id: string;
  name: string;
  services: string[];
}

interface Slot {
  time: string;
  isAvailable: boolean;
}

interface Service {
  name: string;
}

const Booking = () => {
  const { ...hooks } = useBookAppointment();

  const [services, setServices] = useState<Service[]>([]); // Set state type to Service[]
  const [selectedService, setSelectedService] = useState<string>('');
  const [dentists, setDentists] = useState<Dentist[]>([]);
  const [selectedDentist, setSelectedDentist] = useState('');
  const [availableSlots, setAvailableSlots] = useState<Slot[]>([]);
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Fetch the services from the API
        const response = await axios.get<Service[]>('http://localhost:3000/api/services');
        
        // Log the response data to verify it's being fetched
        console.log('Fetched services:', response.data);
        
        // Set the services state if the data is valid
        if (response.data && Array.isArray(response.data)) {
          setServices(response.data); // The type of response.data is now `Service[]`
        } else {
          console.error('Unexpected response format for services');
        }
      } catch (error) {
        // Log any errors that occur during the fetch
        console.error('Error fetching services:', error);
      }
    };
  
    fetchServices();
  }, []);
  


  // Dummy available slots to show initially
  useEffect(() => {
    if (selectedDate) {
      setAvailableSlots([
        { time: '10:00 AM', isAvailable: true },
        { time: '11:00 AM', isAvailable: true },
        { time: '1:00 PM', isAvailable: true },
        { time: '3:00 PM', isAvailable: true },
      ]);
    }
  }, [selectedDate]);

  return (
    <>
      <Navbar />
      <div className="flex justify-center linear-gradient min-h-screen">
        <div className="max-w-5xl w-full bg-white p-2">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <h2 className="text-2xl font-bold pl-10 mb-6 text-[#553168]">Book an Appointment</h2>
            <div className="text-center">
              <label className="block mb-4">
                <span className='text-[#553168]'>Select Service:</span></label>
              <ToggleButtonGroup
                value={hooks.selectedService}
                exclusive
                onChange={hooks.handleChangeService}
                sx={{ marginBottom: "20px", display: "flex", justifyContent: "center", gap: 3 }}
              >
                {hooks.storedServices == null ? (
                  <></>
                ) : (
                  hooks.storedServices.map((service, index) => {
                    return (
                      <ToggleButton
                        key={service.name}
                        value={service.name}
                        sx={{
                          padding: "12px 24px", // Ensure uniform padding here
                          borderRadius: "30px", // Rounded corners for a modern look
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                          backgroundColor:
                            hooks.selectedService === service.name
                              ? "#FF6F61"  // Soft coral color for selected service
                              : "#F5F5F5", // Light grey for non-selected service
                          color:
                            hooks.selectedService === service.name
                              ? "#ffffff" // White text for selected service
                              : "#333333", // Dark text for non-selected service
                          transition: "all 0.3s ease", // Smooth transition for hover effect
                          "&:hover": {
                            backgroundColor:
                              hooks.selectedService === service.name
                                ? "#FF3B30" // Darker coral on hover
                                : "#E0E0E0", // Slightly darker grey on hover
                            transform: "scale(1.05)", // Slight zoom effect on hover
                          },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minWidth: "120px", // Uniform button size
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          {hooks.selectedService === service.name ? (
                            <CheckCircle sx={{ color: "#ffffff" }} />
                          ) : (
                            <RadioButtonUnchecked sx={{ color: "#333333" }} />
                          )}
                          <Typography variant="body1">{service.name}</Typography>
                        </Box>
                      </ToggleButton>
                    );
                  })
                )}
              </ToggleButtonGroup>


              {/* Dentist Selector (Filtered by Service) */}
              {selectedService && (
                <>
                  <h3 className="mt-4 text-[#553168]">Select Dentist:</h3>
                  <select
                    onChange={(e) => hooks.handleClickDoctor(e.target.value)}
                    value={selectedDentist}
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-[#7895F7]"
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

              {/* Date and Time Slots */}
              <div className="flex gap-4 mt-6">
                <div className="flex-1 text-[#553168]">
                  <h3>Select Date:</h3>
                  <DateCalendar
                    value={selectedDate}
                    onChange={(newDate) => setSelectedDate(newDate)}
                  />
                </div>
                <div className="flex-1">
                  <h3 className='text-[#553168]'>Available Time Slots</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {availableSlots.map(
                      (slot) =>
                        slot.isAvailable && (
                          <button
                            key={slot.time}
                            onClick={() => setSelectedSlot(slot.time)}
                            className={`px-4 py-2 rounded border ${selectedSlot === slot.time ? 'border-[#7895F7] bg-[#7895F7] text-white' : 'border-gray-300 bg-white text-black'}`}
                          >
                            {slot.time}
                          </button>
                        )
                    )}
                  </div>

                  {/* Submit Button */}
                  {selectedSlot && (
                    <button
                      onClick={hooks.handleModalOpen}
                      disabled={isLoading}
                      className="absolute mb-4 bottom-3 right-13 px-6 py-3 bg-[#7895F7] text-white rounded-lg border-none focus:outline-none hover:bg-[#7895F7]"
                    >
                      Book Appointment
                    </button>
                  )}
                </div>
              </div>

              {/* Error Message */}
              {error && <p className="text-red-600 mt-4">{error}</p>}

              {/* Confirmation Modal */}
              <Modal
                open={hooks.isModalOpen}
                onClose={hooks.handleModalClose}
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
                    <Button variant="contained" color="success" onClick={hooks.handleClickConfirm}>
                      Confirm
                    </Button>
                    <Button variant="outlined" color="error" onClick={hooks.handleModalClose}>
                      Cancel
                    </Button>
                  </div>
                </Box>
              </Modal>

              <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={hooks.handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
              >
                <Alert onClose={hooks.handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
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
