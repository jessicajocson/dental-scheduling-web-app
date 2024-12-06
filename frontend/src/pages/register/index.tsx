import React from 'react';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
} from '@mui/material';
import { useRegister } from './hooks/useRegister';

const SignUpPage: React.FC = () => {
  const { ...hooks } = useRegister();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Box className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <Typography variant="h4" className="text-center text-teal-600 font-semibold mb-6">
          Dental Office
        </Typography>

        <Box
          className="space-y-4"
        >
          {hooks.errorMessage.length !== 0 ? (
            <Alert severity="error">{hooks.errorMessage}</Alert>
          ) : (
            <></>
          )}

          <TextField
            name="fullname"
            label="Full Name"
            placeholder="John Doe"
            required
            fullWidth
            margin="normal"
            className="border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded-lg"
            onChange={hooks.handleChangeInputFullName}
            error={hooks.userFullName.length === 0}
          />
          <TextField
            name="mobile"
            label="Mobile Number"
            placeholder='01234567890'
            required
            fullWidth
            margin="normal"
            className="border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded-lg"
            onChange={hooks.handleChangeInputPhone}
            error={hooks.phone.length === 0}
          />
          <TextField
            name="email"
            label="Email"
            placeholder="johndoe@email.com"
            required
            fullWidth
            margin="normal"
            className="border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded-lg"
            onChange={hooks.handleChangeInputEmail}
            error={!hooks.EmailRegex.test(hooks.email)}

          />
          <TextField
            name="password"
            label="Password"
            type="password"
            required
            fullWidth
            margin="normal"
            className="border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-300 rounded-lg"
            onChange={hooks.handleChangeInputPassword}
            error={hooks.password.length === 0}
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
            disabled={!hooks.hasCompleteValidInput}
            onClick={hooks.handleClickSignUp}
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
