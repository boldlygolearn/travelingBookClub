import { Outlet, Route, Routes } from "react-router-dom"
import Login from "./modules/login/login"
import CreateUser from "./modules/user/createUser/createUser"
import { ThemeProvider, useMediaQuery } from "@mui/material"
import { useMemo } from "react"
import { responsiveTheme } from "./styles/theme"
import AuthenticateLayout from "./modules/authenticate/authenticateLayout"

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const theme = useMemo(
    () => responsiveTheme(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  )

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          element={
            <AuthenticateLayout>
              <Outlet />
            </AuthenticateLayout>
          }
        >
          <Route path="/" element={<Login />} />
          <Route path="/create-account" element={<CreateUser />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
