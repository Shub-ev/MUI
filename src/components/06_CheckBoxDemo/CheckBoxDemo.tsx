import { Box, Checkbox, FormControlLabel } from "@mui/material"
import { useState } from "react"

const CheckBoxDemo = () => {
    const [acceptTnC, setAcceptTnC] = useState(false);

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.value);
    }

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I accept terms and conditions!"
                    control={<Checkbox checked={acceptTnC} onChange={handleChange}/>}
                />
            </Box>
        </Box>
    )
}

export default CheckBoxDemo