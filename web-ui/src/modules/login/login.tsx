import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import { Link, Stack } from '@mui/material';


const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Email is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must have at least 8 characters")
});

type FormData = {
  email: string;
  password: string;
};



const Login = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    // mode: 'onChange',
    mode: 'onSubmit',
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Stack>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField
            {...field}
            label="Email"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
            fullWidth
            margin="normal"
          />
        }
      />

      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) =>
          <TextField
            {...field}
            type="password"
            label="Password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
            margin="normal"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </form>
      <Link to="/create-account" underline="none" component={NavLink}>
        Create account
      </Link>
    </Stack>
  );
};

export default Login;
