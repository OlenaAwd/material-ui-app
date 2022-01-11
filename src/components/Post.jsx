import { makeStyles, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
card:{
    marginBottom: theme.spacing(5),

},
  media:{
      height: 250,
      [theme.breakpoints.down('sm')]:{
          height: 150,
      }
  }
}));

export default  function Post() {
  const classes = useStyles();
  return <Card className={classes.card}>
        <CardActionArea>
          <CardMedia 
            className={classes.media}
            image='https://images.pexels.com/photos/7263015/pexels-photo-7263015.jpeg?auto=compress&cs=tinysrgb&dpr=28w=500'
            title='My Post'
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>
                    My first post
                </Typography>
                <Typography variant='body2'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, debitis distinctio temporibus qui impedit odio consequuntur odit unde deleniti facilis nostrum fugit quasi ad explicabo similique quis non esse? Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, debitis distinctio temporibus qui impedit odio consequuntur odit unde deleniti facilis nostrum fugit quasi ad explicabo similique quis non esse? Dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, debitis distinctio temporibus qui impedit odio consequuntur odit unde deleniti facilis nostrum fugit quasi ad explicabo similique quis non esse? Dolorum.
                </Typography>
            </CardContent>
        </CardActionArea>
         <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More</Button>
      </CardActions>

        
      
  </Card>;
}

