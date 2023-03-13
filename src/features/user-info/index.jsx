import { Box, IconButton, Stack, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserInfo = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Typography variant="mtTitle" color="secondary" component="h5">
        Welcome Dinesh!
      </Typography>
      <Box>
        <IconButton sx={{ marginRight: 2 }} aria-label="Notify">
          <NotificationsIcon role="button" />
        </IconButton>
        <IconButton aria-label="account">
          <AccountCircleIcon />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default UserInfo;
