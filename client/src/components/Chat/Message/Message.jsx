import React from "react";
import Box from "@mui/material/Box";
import useStylesMessage from "./MessageStyled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

export default function Message({ user, message, scrollRef, darkTheme }) {
  var clasess = useStylesMessage(darkTheme, message, user)();
  return (
    <Box className={clasess.box_position_MsnSendReceive}>
      <Box
        ref={scrollRef}
        id="boxMsnReceive"
        className={
          message.userId === user.id
            ? clasess.boxMsnSend
            : clasess.boxMsnReceive
        }
      >
        <Box className={clasess.message}>
          <h5>{message.text}</h5>
        </Box>
        <h5>{dayjs(new Date(message.createdAt)).fromNow()}</h5>
      </Box>
    </Box>
  );
}
