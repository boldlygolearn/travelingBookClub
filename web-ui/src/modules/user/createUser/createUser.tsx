import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { NavLink } from "react-router-dom"
import { Link, Stack, Typography } from "@mui/material"

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().required("Email is required").email("Email is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must have at least 8 characters")
    .matches(/[a-z]/, "Password must have at least one lowercase char")
    .matches(/[A-Z]/, "Password must have at least one uppercase char")
    .matches(/[0-9]+/, "Password must have at least one number")
    .matches(/[!@#$%^&*()]+/, "Password must have at least one special char"),
  confirmPassword: yup
    .string()
    .required("Please confirm password")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
})

type FormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const CreateUser = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <Stack spacing={2}>
      <Typography variant="h3" component="h1">
        Create your account
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <Stack spacing={2}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  variant="outlined"
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  fullWidth
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  variant="outlined"
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  fullWidth
                />
              )}
            />
          </Stack>
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
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                type="password"
                label="Confirm Password"
                variant="outlined"
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
                fullWidth
              />
            )}
          />
          <Button type="submit" variant="contained" fullWidth color="primary">
            Signup
          </Button>
        </Stack>
      </form>
      <Stack direction="row" justifyContent="center">
        <Typography>Already have an account?</Typography>
        <Link ml={1} to="/" underline="none" component={NavLink}>
          Log in
        </Link>
      </Stack>
    </Stack>
  )
}

export default CreateUser
