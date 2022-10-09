import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function AboutCard(props) {

  return (
    <Card>
      <CardHeader
        title={`${props.name}`}
        subheader={`${props.skills}`}
      />
      <CardMedia
        component="img"
        height="194px"
        image={`${props.imagePath}`}
        alt={`Picture of ${props.name}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}