import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuthStore from '../../states/stores/auth-store';
import { useNavbar } from './hooks/useNavbar';

const Navbar = () => {
  const { ...hooks } = useNavbar();
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
    // logout();  // Call logout from your store
    navigate('/login');
  };

  return (
    <nav className="bg-[#7895F7] p-4 shadow-sm z-10 relative">
      <div className="flex items-center justify-between">
        <div className="text-white text-xl font-semibold">Perfect Smile</div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm text-white ${location.pathname === '/' ? 'underline' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/booking"
              className={`text-sm text-white ${location.pathname === '/booking' ? 'underline' : ''}`}
            >
              Book Now
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm text-white ${location.pathname === '/dashboard' ? 'underline' : ''}`}
            >
              My Dashboard
            </Link>

            {/* Show Account Circle icon if user is authenticated */}
            {isAuthenticated ? (
              <div onClick={handleMenuOpen} className="flex items-center space-x-2 cursor-pointer">
                <AccountCircleIcon />
                {hooks.storedUser.user && <span>{hooks.storedUser.user.full_name}</span>}
              </div>
            ) : (
              <Link
                to="/login"
                className={`text-sm text-white ${location.pathname === '/login' ? 'underline' : ''}`}
              >
                Login
              </Link>
            )}
          </div>

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
