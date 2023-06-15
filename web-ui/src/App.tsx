import "./App.css"
import { Route, Routes } from "react-router-dom"
import Login from "./modules/login/login"
import CreateUser from "./modules/user/createUser/createUser"
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { getTheme } from "./styles/theme";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(() => getTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/create-account" element={<CreateUser />} />
    </Routes>
    </ThemeProvider>
  )
}

export default App
