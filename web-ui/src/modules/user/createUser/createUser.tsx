import { Link, Stack, Typography } from "@mui/material";

const CreateUser = () => {
  return (
    <Stack>
      <Typography variant="h1">Create Account</Typography>
      <Link href="/create-account" underline="none">
        Login
      </Link>
    </Stack>
  );
};

export default CreateUser;
