import { Link, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Stack>
      <Typography variant="h1">Login</Typography>
      <Link to="/create-account" underline="none" component={NavLink}>
        Create account
      </Link>
    </Stack>
  );
};

export default Login;
