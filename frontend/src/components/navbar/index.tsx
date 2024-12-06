import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../states/stores/auth-store';
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate();

  // Access authentication state from your store
  const { isAuthenticated } = useAuthStore();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);  // Set anchor element to the icon or user name container
  };

  const handleMenuClose = () => {
    setAnchorEl(null);  // Close menu
  };

  const handleLogout = () => {
    handleMenuClose();
    logout();  // Call logout from your store
    navigate('/login');
  };

  return (
    <nav className="bg-white p-4 shadow-sm z-10 relative">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold">Dental Clinic</div>
        <div className="flex items-center space-x-6">
          <button onClick={() => navigate('/')} className="text-sm text-gray-600">Home</button>
          <button onClick={() => navigate('/booking')} className="text-sm text-gray-600">Book Now</button>
          <button onClick={() => navigate('/dashboard')} className="text-sm text-gray-600">My Dashboard</button>

          {/* Show Account Circle icon if user is authenticated */}
          {isAuthenticated ? (
            <div onClick={handleMenuOpen} className="flex items-center space-x-2 cursor-pointer">
              <AccountCircleIcon />
              {user && <span>{user.firstName}</span>}
            </div>
          ) : (
            <button onClick={() => navigate('/login')} className="text-sm text-gray-600">Login</button>
          )}
        </div>
      </div>

      <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </nav>
  );
};

export default Navbar;
