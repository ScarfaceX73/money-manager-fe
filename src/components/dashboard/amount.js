import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

export default function AmountToAdd(props) {
  const { amount, setAmount } = props;

  const handleChange = (event) => {
    setAmount(event?.target?.value);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={amount}
            onChange={handleChange}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            type="number"
          />
        </FormControl>
      </div>
    </Box>
  );
}
