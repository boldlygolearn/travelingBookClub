import { Button, Link, Stack, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Stack>
      <Typography>Login</Typography>
      <TextField
        type="email"
        label="Email"
        sx={{ marginBottom: 4 }}
      ></TextField>
      <TextField
        type="password"
        label="Password"
        sx={{ marginBottom: 4 }}
      ></TextField>
      <Button variant="contained">Login</Button>
      <Typography>
        Don't have an account?
        {
          <Link href="/create-account" underline="none">
            Sign up
          </Link>
        }
      </Typography>
    </Stack>
  );
};

export default Login;
