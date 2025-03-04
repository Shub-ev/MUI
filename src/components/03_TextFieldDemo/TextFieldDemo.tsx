import { InputAdornment, Stack, TextField } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";

const TextFieldDemo = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Stack spacing={3}>
      <Stack direction={"row"} spacing={1}>
        <TextField label="Name"></TextField>
        <TextField label="Name" variant="outlined"></TextField>
        <TextField label="Name" variant="filled"></TextField>
        <TextField label="Name" variant="standard"></TextField>
      </Stack>

      <Stack direction={"row"} spacing={2} display={"block"}>
        <TextField label="Small TextField" size="small" color="secondary"></TextField>
        <TextField label="Medium TextField" size="medium"></TextField>
        <TextField label="Default TextField" color="error"></TextField>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField label="Form Input" required></TextField>
        <TextField label="Password" helperText="Do not share password!"></TextField>
        <TextField label="Password (Type here)" type="password"></TextField>
        <TextField label="Password (Type here)" type="password" disabled></TextField>
        <TextField label="Read only" slotProps={{ input: { readOnly: true } }}></TextField>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField label="Amount" slotProps={{ input: { startAdornment: <InputAdornment position="start">$</InputAdornment> } }} />
        <TextField label="Weight" slotProps={{ input: { endAdornment: <InputAdornment position="end">Kg</InputAdornment> } }} />
        <TextField label="Password" type="password" slotProps={{ input: { endAdornment: <InputAdornment position="end"><VisibilityIcon /></InputAdornment> } }} />
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          type="password"
          helperText={!value ? "Enter Password!" : "Do not share password!"}
          required
        >
        </TextField>
      </Stack>
    </Stack>
  )
}

export default TextFieldDemo