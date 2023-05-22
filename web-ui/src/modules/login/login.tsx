import { Button, Link, Stack, TextField, Typography } from "@mui/material";

const Login = () => {
  return (
    <Stack>
      <Typography variant="h1">Login</Typography>
      <Link href="/create-account" underline="none">
        Create account
      </Link>
    </Stack>
  );
};

export default Login;
