import { Avatar } from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
require("./Conversations.css");
export default function Conversations(props) {
  var { convertations, userCurrent } = props;



useEffect(()=>{
   
})


  return (
    <Box
      sx={{
        height: 86,
        display: "flex",
        padding: "2%",
        cursor: "pointer",
        margin: "2%",
      }}
    >
      <Stack direction="row" spacing={5}>
        <Avatar
          src="https://www.industriaanimacion.com/wp-content/uploads/2021/07/l.jpg"
          sx={{ width: "54px", height: 54, cursor: "pointer" }}
        />
      </Stack>
    </Box>
  );
}
