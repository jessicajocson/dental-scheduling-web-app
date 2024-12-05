import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, Link, TextField, Typography } from '@mui/material';

const LoginPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const rememberMe = formData.get('rememberMe') === 'on';

    console.log({ email, password, rememberMe });
    // Add login logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Box
        className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
        component="form"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" className="text-center font-semibold text-teal-600 mb-6">
          Dental Office
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
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="py-2"
        >
          Log In
        </Button>
        <Typography variant="body2" className="text-center mt-4">
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
