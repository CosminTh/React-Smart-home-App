import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './Feature.scss';

const Feature = ({ name, action, toggleAction }) => {

  const featureButtonHandler = () => {
    toggleAction(name);
  }

  return (
    <div className="feature">
      <Card sx={{ maxWidth: 345 }} onClick={featureButtonHandler}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={require('./assets/button.jpg')}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {action}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Feature;
