import { Box, Stack, Typography } from "@mui/material";
import SVGComponent from "./money";

const LogoComponent = () => (
  <Stack direction="row" alignItems="center" spacing={{ sx: 1, md: 1.5 }}>
    <Box sx={{ height: "65px" }}>
      <SVGComponent />
    </Box>
    <Typography color="primary" variant="mtTitle" gutterBottom>
      Money Tracker
    </Typography>
  </Stack>
);
export default LogoComponent;
