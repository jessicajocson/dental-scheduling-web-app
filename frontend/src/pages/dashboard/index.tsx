import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Menu, MenuItem, Modal, Box} from '@mui/material';
import Navbar from '../../components/navbar';
import { useDashboard } from './hooks/useDashboard';

// Sample appointment data
const appointments = [
  { id: 1, date: '2024-12-10', time: '10:00 AM', service: 'Cleaning', dentist: 'Dr. Smith', status: 'Pending' },
  { id: 2, date: '2024-12-11', time: '2:00 PM', service: 'Checkup', dentist: 'Dr. Lee', status: 'Completed' },
  // Add more sample data
];

const AppointmentTable = () => {
  const { ...hooks } = useDashboard();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedAction, setSelectedAction] = useState('');
  const [selectedAppointment, setSelectedAppointment] = useState<any>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, appointment: any) => {
    setAnchorEl(event.currentTarget);
    setSelectedAppointment(appointment);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // const handleActionSelect = (action: string) => {
  //   setSelectedAction(action);
  //   setOpenModal(true);
  //   handleMenuClose();
  // };

  // const handleModalClose = () => {
  //   setOpenModal(false);
  //   setSelectedAction('');
  // };

  const handleConfirmAction = async () => {
    if (selectedAction === "Update") {
        // Logic for updating the appointment
        alert(`Appointment with ${selectedAppointment.dentist} updated!`);
    } else if (selectedAction === "Cancel") {
        await hooks.handleActionSelect('Delete');
    }
    hooks.handleModalClose();
};

  const columns = [
    { field: 'date', headerName: 'Date', width: 150 },
    { field: 'time', headerName: 'Time', width: 150 },
    { field: 'service', headerName: 'Service', width: 180 },
    { field: 'dentist', headerName: 'Dentist', width: 180 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      renderCell: (params: any) => {
        let statusColor = 'text-black'; // Default is yellow (pending)
        if (params.value === 'Completed') statusColor = 'text-green-700';
        if (params.value === 'Cancelled') statusColor = 'text-black';
        return (
          <span className={`px-3 py-1 rounded-full ${statusColor} text-black`}>
            {params.value}
          </span>
        );
      },
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params: any) => (
        <Button
          onClick={(e) => handleMenuClick(e, params.row)}
          variant="contained"
          color="primary"
        >
          Update
        </Button>
      ),
    },
  ];

  const getRowClassName = (params: any) => {
    if (params.index === 0) {
      return 'bg-gray-300 font-bold text-black'; // Apply gray background and bold text for the first row
    }
    return '';
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center bg-teal-100 min-h-screen">
      <div className="max-w-5xl w-full bg-white p-6 relative">
        <h3 className="text-3xl font-semibold mb-4">Appointments</h3>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={hooks.storedAppointments}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5,
                },
              },
            }}
            onCellClick={hooks.handleSelectedAppointment}
            getRowClassName={getRowClassName}
          />
        </div>
        
        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => hooks.handleActionSelect('Reschedule')}>Update</MenuItem>
          <MenuItem onClick={() => hooks.handleActionSelect('Cancel')}>Cancel</MenuItem>
        </Menu>

        {/* Confirmation Modal */}
        <Modal
          open={hooks.isModalOpen}
          onClose={hooks.handleModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              padding: 4,
              borderRadius: 2,
              boxShadow: 24,
            }}
          >
            <h2 className='text-xl font-800'>{selectedAction} Appointment</h2>
            <p>
              Are you sure you want to {selectedAction.toLowerCase()} your appointment with {selectedAppointment?.dentist} on {selectedAppointment?.date} at {selectedAppointment?.time}?
            </p>
            <div className="flex justify-end mt-4">
              <Button onClick={hooks.handleModalClose} color="secondary" variant="outlined">
                Cancel
              </Button>
              <Button
                onClick={handleConfirmAction}
                color="primary"
                variant="contained"
                className="ml-4 gap-2"
              >
                Confirm
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
    </>
  );
};

export default AppointmentTable;
