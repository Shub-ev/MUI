import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";

const ButtonDemo = () => {
  const [formats, setFormats] = useState<string[]>([]);
  const [secondF, setSecondF] = useState<string[]>([]);

  console.log(secondF)

  const handleFormatChange = (_event:React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats);
  }

  const handleSecondF = (_event:React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setSecondF(updatedFormats);
  }

  return (
    <Stack spacing={2}>
      <Stack spacing={2} direction={"row"}>
        <Button variant="outlined">Button</Button>
        <Button variant="contained" href="www.google.com">Button</Button>
        <Button variant="text">Button</Button>
        <Button variant="text" href="www.google.com">Button</Button>
      </Stack>
      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondary</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="error">Error</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="text" color="primary">Primary</Button>
        <Button variant="text" color="secondary">Secondary</Button>
        <Button variant="text" color="warning">Warning</Button>
        <Button variant="text" color="error">Error</Button>
        <Button variant="text" color="info">Info</Button>
        <Button variant="text" color="success">Success</Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="outlined" color="primary">Primary</Button>
        <Button variant="outlined" color="secondary">Secondary</Button>
        <Button variant="outlined" color="warning">Warning</Button>
        <Button variant="outlined" color="error">Error</Button>
        <Button variant="outlined" color="info">Info</Button>
        <Button variant="outlined" color="success">Success</Button>
      </Stack>

      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">Medium</Button>
        <Button variant="contained" size="large">Large</Button>
        <Button variant="contained">Button</Button>
      </Stack>

      <Stack display={"block"} spacing={2} direction={"row"}>
        <Button variant="contained" startIcon={<SendIcon />} disableElevation>Send</Button>
        <Button variant="contained" endIcon={<SendIcon />} disableRipple>Send</Button>

        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
        <IconButton aria-label="send" color="error" size="medium">
          <SendIcon />
        </IconButton>
        <IconButton aria-label="send" color="warning" size="large">
          <SendIcon />
        </IconButton>
      </Stack>

      <hr/>

      <Stack direction={"row"}>
        <ButtonGroup variant="contained">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack>
        <ButtonGroup variant="outlined">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack>
        <ButtonGroup variant="text">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        <ButtonGroup variant="contained" orientation="vertical" size="small">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <hr/>

      <Stack direction={"row"}>
        <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} size="small">
          <ToggleButton value={'bold'} aria-label="bold"><FormatBoldIcon/></ToggleButton>
          <ToggleButton value={'italic'} aria-label="italic"><FormatItalicIcon/></ToggleButton>
          <ToggleButton value={'underline'} aria-label="underline"><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack direction={"row"}>
        <ToggleButtonGroup value={secondF} onChange={handleSecondF} orientation="vertical" exclusive>
          <ToggleButton value={"BoldF"}><FormatBoldIcon/></ToggleButton>
          <ToggleButton value={"ItallicF"}><FormatItalicIcon/></ToggleButton>
          <ToggleButton value={"UnderlineF"}><FormatUnderlinedIcon/></ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default ButtonDemo