import { Avatar, Box } from "@material-ui/core";
import React from "react";
import { Stack } from "@mui/material";

export default function Message(props) {
  var boxMSN = {
    background: "#1e88e5",
    borderTopLeftRadius: "3em",
    borderTopRightRadius: "0.6em",
    borderBottomRightRadius: "0.6em",
    marginTop: "4.5%",
    minHeigth:"80%",
    maxWidth: "80%",
  };

  var msn = {
    display: "flex",
    paddingRight: "2%",
  };
  return (
    <div style={boxMSN}>
      <Box name="msn" sx={msn}>
        <Avatar
          src="https://www.industriaanimacion.com/wp-content/uploads/2021/07/l.jpg"
          sx={{ width: "54px", height: 54 }}
        />
        <p style={{ textAlign: "justify", color: "white" }}>{props.mensaje}</p>
      </Box>
      <div
        style={{
          color: "#ffff",
        }}
      >
        <h5>hora 1:33</h5>
      </div>
    </div>
  );
}
