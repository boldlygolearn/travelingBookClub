import { Link, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const CreateUser = () => {
  return (
    <Stack>
      <Typography variant="h1">Create Account</Typography>
      <Link to="/" underline="none" component={NavLink}>
        Login
      </Link>
    </Stack>
  );
};

export default CreateUser;
