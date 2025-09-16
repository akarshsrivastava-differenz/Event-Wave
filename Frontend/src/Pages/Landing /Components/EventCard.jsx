import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

const EventCard = ({ info }) => {

    return (
        <Card sx={{ maxWidth: 300 , border:"0.5px lightgray solid" , margin:"0.5rem 0.1rem" , ":hover":{boxShadow:" 1px 1px 3px 1px black"} }}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' , marginBottom:"0.5rem" }}>
                        <b>By {info.creator_username}</b>
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' , marginBottom:"1rem" }}>
                        <b>On {info.event_date}</b>
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.event_name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {info.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    View
                </Button>
            </CardActions>
        </Card>
    );
}

export default EventCard