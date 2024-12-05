import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleMenuClose();
    console.log('User logged out');
    navigate('/login');
  };

  return (
    <nav className="bg-white p-4 shadow-sm z-10 relative">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">Dental Clinic</div>
        <div className="space-x-6">
          <button onClick={() => navigate('/')} className="text-sm text-gray-600">Home</button>
          <button onClick={() => navigate('/booking')} className="text-sm text-gray-600">Book Now</button>
          <button onClick={() => navigate('/user-dashboard')} className="text-sm text-gray-600">My Dashboard</button>
          <button onClick={() => navigate('/login')} className="text-sm text-gray-600">Logout</button>
        </div>
      </div>
    </nav>
    // <AppBar
    //   position="static"
    //   sx={{
    //     backgroundColor: '#1976d2',
    //     boxShadow: 'none',
    //     borderBottom: '1px solid #ddd',
    //   }}
    // >
    //   <Toolbar
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //     }}
    //   >
    //     <Typography
    //       variant="h6"
    //       sx={{
    //         cursor: 'pointer',
    //         '&:hover': { color: '#fff9c4' },
    //       }}
    //       onClick={() => navigate('/')}
    //     >
    //       Dental Office
    //     </Typography>

    //     <Box sx={{ display: 'flex', gap: 2 }}>
    //       <Button
    //         sx={{
    //           color: '#ffffff',
    //           textTransform: 'none',
    //           '&:hover': { backgroundColor: '#1565c0' },
    //         }}
    //         onClick={() => navigate('/')}
    //       >
    //         Home
    //       </Button>
    //       <Button
    //         sx={{
    //           color: '#ffffff',
    //           textTransform: 'none',
    //           '&:hover': { backgroundColor: '#1565c0' },
    //         }}
    //         onClick={() => navigate('/booking')}
    //       >
    //         Schedule Appointment
    //       </Button>
    //       <Button
    //         sx={{
    //           color: '#ffffff',
    //           textTransform: 'none',
    //           '&:hover': { backgroundColor: '#1565c0' },
    //         }}
    //         onClick={() => navigate('/user-dashboard')}
    //       >
    //         User Dashboard
    //       </Button>
    //     </Box>

    //     <IconButton
    //       color="inherit"
    //       onClick={handleMenuOpen}
    //       aria-controls={isMenuOpen ? 'user-menu' : undefined}
    //       aria-haspopup="true"
    //       aria-expanded={isMenuOpen ? 'true' : undefined}
    //     >
    //       <AccountCircleIcon />
    //     </IconButton>
    //     <Menu
    //       id="user-menu"
    //       anchorEl={anchorEl}
    //       open={isMenuOpen}
    //       onClose={handleMenuClose}
    //       MenuListProps={{
    //         'aria-labelledby': 'user-menu-button',
    //       }}
    //     >
    //       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
    //       <MenuItem onClick={handleLogout}>Logout</MenuItem>
    //     </Menu>
    //   </Toolbar>
    // </AppBar>
  );
};

export default Navbar;
