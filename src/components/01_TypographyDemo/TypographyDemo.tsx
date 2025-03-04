import { Typography } from "@mui/material";

const TypographyDemo = () => {
    return (
        <>
            {/* here varient is the html element under the Typography */}
            <hr/>
            <Typography variant="h1">h1 Varient</Typography>
            <Typography variant="h2">h1 Varient</Typography>
            <Typography variant="h3">h1 Varient</Typography>
            <Typography variant="h4">h1 Varient</Typography>
            <Typography variant="h5">h1 Varient</Typography>
            <Typography variant="h6">h1 Varient</Typography>
            <hr/>

            {/* We can use styling of one component using varient and other html element using component */}
            <Typography variant="h4" component='h1'>h1 Varient</Typography>
            <Typography variant="h5" component='h1'>h1 Varient</Typography>
            <hr/>

            {/* here gutterBottom adds bottom margin */}
            <Typography variant="h5" component='h1' gutterBottom>h1 Varient</Typography>
            
            <hr/>
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>

            <hr/>
            <Typography variant="body1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente corporis suscipit, quaerat totam inventore autem voluptatibus magnam cumque quis dolorem!</Typography>
            <Typography variant="body2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem optio consequatur nobis repellendus aperiam minima aspernatur soluta amet commodi autem?</Typography>
        </>
    );
}

export default TypographyDemo;