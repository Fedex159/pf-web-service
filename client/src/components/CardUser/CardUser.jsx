import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { borderRadius } from "@mui/system";

const IMG_TEMPLATE =
  "https://codyhouse.co/demo/squeezebox-portfolio-template/img/img.png";

function CardUser({ user }) {
  const { id, name, lastname, username, userImg, email } = user;
  return (
    <Card
      sx={{
        width: "90%",
        height: "auto",
        textDecoration: "none",
        border: "solid 1px grey",
        margin: "20px auto 0px auto",
      }}
    >
      <CardActionArea component={Link} to={`/users/${id}`}>
        <CardMedia
          component="img"
          image={userImg ? userImg : IMG_TEMPLATE}
          alt={"user photo"}
          sx={{
            objectFit: "cover",
            borderRadius: "50%",
            maxHeight: "200px",
            width: "80%",
            m: "10px auto 0px auto",
          }}
        />

        <CardHeader
          title={`${name} ${lastname}`}
          sx={{ pb: "0", height: "minContent" }}
        />
        <Typography variant="subtitle1" component="div" sx={{ p: "0px" }}>
          {username}
        </Typography>
      </CardActionArea>

      <CardActions disableSpacing>
        <IconButton onClick={() => {}} aria-label="chat">
          <ChatIcon sx={{}} />
        </IconButton>
        <IconButton aria-label="search">
          <SearchIcon />
        </IconButton>

        <IconButton
          onClick={() => {}}
          aria-label="user profile"
          sx={{ ml: "auto" }}
        >
          <AccountCircleIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default CardUser;
