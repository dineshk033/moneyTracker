import { Grid } from "@mui/material";
import LeftSideAccounts from "../features/accounts/left-side-accounts";
import AccountBankDetails from "../features/accounts/accounts-bank-details";
const AccountsPage = () => {
  return (
    <Grid
      marginTop={1}
      container
      spacing={2}
      columns={{ xs: 12, md: 10, lg: 12 }}
    >
      <Grid item xs={4} md={2} lg={3}>
        <LeftSideAccounts />
      </Grid>
      <Grid spacing={3} item xs={8} md={8} lg={9}>
        <AccountBankDetails></AccountBankDetails>
      </Grid>
    </Grid>
  );
};

export default AccountsPage;
