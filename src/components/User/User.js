import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ firstName, lastName, avatar, deleted }) {
  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardMedia component="img" alt="user" height="290" image={avatar} />
      <CardContent>
        <Typography variant="h5" component="div">
          {firstName + ' ' + lastName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={deleted} color="error" size="small">
          delete user
        </Button>
      </CardActions>
    </Card>
  );
}
