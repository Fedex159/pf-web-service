import * as React from "react";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles((theme) => ({
  root: {
    minheight: "200vh",
    maxWidth: 345,
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: "Nunito",
    fontWeight: "bold",
    fontSize: "2rem",
  },
}));

export default function ServiceCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Servicio de dj sonido iluminación"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://apollo-virginia.akamaized.net/v1/files/e15zp8qbsnk43-AR/image;s=780x0;q=60"
        alt="Servicio de dj sonido iluminación"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Dj la plata y alrededores contamos con pantallas maquinas de humo
          proyectores sonido profesional micrófono karaoke iluminacion led de
          pista y para decorar,
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            ¿Algo como la opción de chat y el precio?:
          </Typography>
          <Typography paragraph>CONTACTA</Typography>
          <Typography paragraph>PRECIO</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
