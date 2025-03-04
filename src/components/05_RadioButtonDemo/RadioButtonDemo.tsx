import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"

const RadioButtonDemo = () => {
    const [value, setValue] = useState<string>('');
    const [laptop, setLaptop] = useState<string>('');

    console.log(value);
    console.log(laptop);

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleLaptopSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLaptop(event.target.value);
    }

    return (
        <Box>
            <FormControl>
                <FormLabel id="job-experience-group-label">
                    Years of Experience
                </FormLabel>
                <RadioGroup 
                    name="job-experience-group" 
                    aria-labelledby="job-experience-group-label" 
                    value={value}
                    onChange={handleSelect}
                >
                    <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='3-6' value='3-6' />
                    <FormControlLabel control={<Radio />} label='7-10' value='7-10' />
                    <FormControlLabel control={<Radio />} label='10+' value='10+' />
                </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="laptop-selection-group-label">Enter Laptop you Select</FormLabel>
                <RadioGroup
                    name="laptop-selection-group"
                    aria-labelledby="laptop-selection-group-label"
                    value={laptop}
                    onChange={handleLaptopSelect}
                    row
                >
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} label='Lenovo' value={'lenovo'}/>
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} label='Mac' value={'mac'}/>
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} label='HP' value={'HP'}/>
                    <FormControlLabel control={<Radio size="small" color="secondary"/>} label='ASUS' value={'ASUS'}/>
                </RadioGroup>
                <FormHelperText>Enter Valid inputs</FormHelperText>
            </FormControl>
        </Box>
    )
}

export default RadioButtonDemo