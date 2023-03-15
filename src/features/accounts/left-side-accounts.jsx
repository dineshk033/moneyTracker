import { Box, Button, Typography } from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import ListBankAccounts from "./list-bank-accounts";
import ListCreditCardAccounts from "./list-credit-card-accounts";

const LeftSideAccounts = () => {
  return (
    <>
      <Button
        fullWidth
        variant="outlined"
        size="large"
        startIcon={<ControlPointIcon />}
      >
        Add new account
      </Button>
      {/* <Typography
        variant="subtitle1"
        fontWeight="bold"
        color="secondary"
        mt={3}
      >
        Select accounts to see details
      </Typography> */}
      <Box width="100%" bgcolor="primary.main" mt={3} p={1} borderRadius={1}>
        <Typography variant="subtitle1" fontWeight="bold" color="white">
          Select Bank Account
        </Typography>
      </Box>
      <ListBankAccounts />
      <Box width="100%" bgcolor="primary.main" mt={3} p={1} borderRadius={1}>
        <Typography variant="subtitle1" fontWeight="bold" color="white">
          Select Credit Card
        </Typography>
      </Box>
      <ListCreditCardAccounts />
    </>
  );
};

export default LeftSideAccounts;
