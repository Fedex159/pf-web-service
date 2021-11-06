import { Avatar, Box } from "@material-ui/core";
import React from "react";
export default function Message({ user,contact,message }) {
  var boxMSN = {
    background: message.remit === user.id ? "#1e7ee5" : "#1eeee5",
    borderTopLeftRadius: "3em",
    borderTopRightRadius: "0.6em",
    borderBottomRightRadius: "0.6em",
    marginTop: "4.5%",
    minHeigth: "80%",
    maxWidth: "80%",
  };
  var msn = {
    display: "flex",
    paddingRight: "2%",
  };

  console.log(contact);
  return (
    <div style={boxMSN}>
      <Box name="msn" sx={msn}>
        <Avatar
          src={
            message.remit === user.id
              ? "http://pm1.narvii.com/6156/d9e8cbd0d220ed776bf8c921c3ad8a86018f4b60_00.jpg"
              : "https://i.pinimg.com/originals/68/d3/9e/68d39e51188269ccfd2537c79c91903e.jpg"
          }
          sx={{ width: "54px", height: 54 }}
        />
        <p style={{ textAlign: "justify", color: "white" }}>{message.text}</p>
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
