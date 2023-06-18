import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { NavLink } from "react-router-dom"
import { Link, Stack, Typography } from "@mui/material"

const schema = yup.object().shape({
  email: yup.string().required("Email is required").email("Email is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must have at least 8 characters"),
})

type FormData = {
  email: string
  password: string
}

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    // mode: 'onChange',
    mode: "onSubmit",
  })

  const onSubmit = (data: FormData) => {
    try {
      fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Stack spacing={2}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <Stack spacing={2}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                error={!!errors.email}
                helperText={errors.email?.message}
                fullWidth
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Password"
                variant="outlined"
                error={!!errors.password}
                helperText={errors.password?.message}
                fullWidth
              />
            )}
          />
          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
        </Stack>
      </form>
      <Stack direction="row" justifyContent="center">
        <Typography>Don't have an account?</Typography>
        <Link ml={1} to="/create-account" underline="none" component={NavLink}>
          Create one
        </Link>
      </Stack>
    </Stack>
  )
}

export default Login
