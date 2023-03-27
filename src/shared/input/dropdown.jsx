import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const MenuProps = {
  PaperProps: {
    style: {
      backgroundColor: "#ffff",
    },
  },
};

const StyledMenuItem = styled(MenuItem)({
  "&.MuiMenuItem-root": {
    fontSize: "0.8rem",
  },
});

const StyledSelect = styled(Select)({
  "& .MuiInputBase-input.MuiOutlinedInput-input": {
    fontSize: "0.8rem",
    paddingTop: "4.5px",
    paddingBottom: "4.5px",
  },
});
export default function SelectSmall() {
  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ ml: 1, minWidth: 120 }} size="small">
      <StyledSelect
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        inputProps={{
          "aria-label": "Without label",
        }}
        onChange={handleChange}
        MenuProps={MenuProps}
      >
        <StyledMenuItem value={10}>Current Financial year</StyledMenuItem>
        <StyledMenuItem value={20}>Current Month</StyledMenuItem>
        <StyledMenuItem value={30}>Last 3 Month</StyledMenuItem>
      </StyledSelect>
    </FormControl>
  );
}
