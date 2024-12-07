import { useEffect, useState } from 'react';
// import axios from 'axios';

const UserDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  // useEffect(() => {
  //   // Fetch user's appointments
  //   axios.get('/api/appointments').then((response) => {
  //     setAppointments(response.data);
  //   });
  // }, []);

  const handleCancel = (id: string) => {
    // axios.delete(`/api/appointments/${id}`).then(() => {
    //   setAppointments((prev) => prev.filter((appt) => appt.id !== id));
    // });
  };

  return (
    <>
    <p>Back to Home</p>
    <div className='app'>
      <h2>My Appointments</h2>
      <ul>
        {appointments.map((appt: any) => (
          <li key={appt.id}>
            <p>
              Dentist: {appt.dentistName}, Date: {appt.date}, Time: {appt.time}
            </p>
            <button onClick={() => handleCancel(appt.id)}>Cancel</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default UserDashboard;
