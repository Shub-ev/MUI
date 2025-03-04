import { Box, MenuItem, Stack, TextField } from "@mui/material"
import { useState } from "react"

const SelectDemo = () => {
  const [country, setCountry] = useState<string>("");
  const [countries, setCountries] = useState<string[]>([]);

  console.log(country);
  console.log(countries);

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const values = event.target.value;
    setCountries(typeof values === "string" ? values.split(',') : values);
  }

  return (
    <Box width="250px">
      <Stack spacing={4}>
        <TextField label="Select Country" onChange={handleSelectChange} 
          value={country}
          select
          fullWidth
          helperText="Please select a Country!"
          error={country === "" ? true : false}
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="AU">Austraia</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="EN">England</MenuItem>
        </TextField>

        <TextField label="Select Country" onChange={handleChange} value={countries}
          fullWidth
          select
          slotProps={{
            select: {
              multiple: true,
            }
          }}
          size="small"
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="AU">Austraia</MenuItem>
          <MenuItem value="EN">England</MenuItem>
          <MenuItem value="USA">USA</MenuItem>
        </TextField>
      </Stack>
    </Box>
  )
}

export default SelectDemo