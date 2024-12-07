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
import '../../styles/login.css';

const SignUpPage: React.FC = () => {
    
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstname= formData.get('firstname') as string;
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
    <>
      
      <Box className="login-container">
      <Typography variant="h4" className='app-title'>
        Dental Scheduling App
      </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
            <TextField
            name="firstname"
            label="First Name"
            type="string"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="lastname"
            label="Last Name"
            type="string"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="mobile"
            label="Mobile Number"
            type="tel"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            required
            fullWidth
            margin="normal"
          />
          <TextField
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          required
          fullWidth
          margin="normal"
        />
          <FormControlLabel
            control={<Checkbox name="rememberMe" />}
            label="Remember Me"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
          >
            Sign Up
          </Button>
        </Box>

        <Typography variant="body2" sx={{ marginTop: 2 }}>
        Already have an account?{' '}
        <Link href="/login" underline="hover">
          Log In
        </Link>
      </Typography>
      </Box>

      
    </>
  );
};

export default SignUpPage;
