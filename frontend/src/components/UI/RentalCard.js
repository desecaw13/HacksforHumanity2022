import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';

export default function RentalCard(props) {

  return (
    <Card sx={{maxWidth: "25rem", margin: "0"}}>
      <CardHeader
        title={`${props.name}`}
        subheader={`${props.rate}`}
      />
      <CardMedia sx={{bottom:"10px"}}
        component="img"
        height="225px"
        image={`${props.img}`}
        alt={`Picture of ${props.name}`}
      />
      <Button sx={{margin: "15px 0 30px 0"}} variant="contained">RENT NOW</Button>
    </Card>
  );
}
