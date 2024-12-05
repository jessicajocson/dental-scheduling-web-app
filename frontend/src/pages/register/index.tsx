import React from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from '@mui/material';

const SignUpPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstname = formData.get('firstname') as string;
    const lastname = formData.get('lastname') as string;
    const mobileNumber = formData.get('mobileNumber') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    const rememberMe = formData.get('rememberMe') === 'on';

    // console.log({ email, password, rememberMe });
    // Add login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Box className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Typography variant="h4" className="text-center text-teal-600 font-semibold mb-6">
          Dental Office
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <TextField
            name="firstname"
            label="First Name"
            type="string"
            required
            fullWidth
            margin="normal"
            className="border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded-lg"
          />
          <TextField
            name="lastname"
            label="Last Name"
            type="string"
            required
            fullWidth
            margin="normal"
            className="border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded-lg"
          />
          <TextField
            name="mobile"
            label="Mobile Number"
            type="tel"
            required
            fullWidth
            margin="normal"
            className="border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded-lg"
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            required
            fullWidth
            margin="normal"
            className="border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded-lg"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            required
            fullWidth
            margin="normal"
            className="border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded-lg"
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            required
            fullWidth
            margin="normal"
            className="border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded-lg"
          />
          <FormControlLabel
            control={<Checkbox name="rememberMe" />}
            label="Remember Me"
            className="text-teal-600"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Sign Up
          </Button>
        </Box>

        <Typography variant="body2" className="text-center mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-teal-600 hover:underline">
            Log In
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default SignUpPage;
