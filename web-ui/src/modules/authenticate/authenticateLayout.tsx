import { Box, Stack } from "@mui/material"
import React from "react"
import Header from "../header/header"

type AuthenticateLayoutProps = {
  children: React.ReactNode
}

const AuthenticateLayout = ({ children }: AuthenticateLayoutProps) => (
  <Box display="flex" justifyContent="center" padding={2}>
    <Stack spacing={2}>
      <Header />
      {/* <Box minWidth={488}>{children}</Box> */}
      <Box>{children}</Box>
    </Stack>
  </Box>
)

export default AuthenticateLayout
