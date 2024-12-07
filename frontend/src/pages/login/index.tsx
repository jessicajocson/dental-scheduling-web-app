import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material';
import { useLogin } from './hooks/useLogin';

const LoginPage: React.FC = () => {
  const { ...hooks } = useLogin();

  return (
    <div className="linear-gradient flex flex-col items-center justify-center min-h-screen bg-gray-100">

      <img
        src="../../public/dental-logo.png" // Replace with the path to your logo
        alt="Logo"
        className="mb-2 w-24 h-auto" // Adjust size and spacing
      />

      <Box
        className="bg-white p-8 rounded-2xl shadow-lg w-full mt-6 sm:w-96"
        component="form"
        onSubmit={hooks.handleClickLogin}
      >
        <Typography variant="h4" className="text-center font-bold text-[#7895F7] mb-6">
          Log In
        </Typography>

        <TextField
          name="email"
          label="Email"
          type="email"
          required
          fullWidth
          margin="normal"
          variant="outlined"
          className="mb-4"
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          required
          fullWidth
          margin="normal"
          variant="outlined"
          className="mb-4"
        />
        <FormControlLabel
          control={<Checkbox name="rememberMe" color="primary" />}
          label="Remember Me"
          className="mb-6"
        />
        <Button
          href="/"
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#7895F7",
            color: "#FFF",
            "&:hover": {
              backgroundColor: "#A0B1F9",
              color: "#FFF",
            },
          }}
        >
          Log In
        </Button>

        <Typography variant="body2" className="text-center mt-4 py-2">
          Don't have an account?{' '}
          <Link href="/register" className="text-teal-600 hover:underline">
            Sign Up
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default LoginPage;
