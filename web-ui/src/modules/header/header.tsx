import { Stack, Typography } from "@mui/material"

const Header = () => (
  <Stack>
    <Typography variant="h3" component="h1" sx={{ alignSelf: "flex-start" }}>
      The
    </Typography>
    <Typography variant="h1">Traveling Book</Typography>
    <Typography variant="h3" component="h1" sx={{ alignSelf: "flex-end" }}>
      Club
    </Typography>
  </Stack>
)

export default Header
