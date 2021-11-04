import { io } from "socket.io-client";
import React, { useEffect, useState } from "react";
import Conversations from "../Conversations/conversations.jsx";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import _style from "./Chat.css.jsx";
import { Button, Input } from "@material-ui/core";
import Message from "../Message/Message.jsx";
import InputUnstyled from "@mui/core/InputUnstyled";
import { styled } from "@mui/system";
import TextField from "@mui/material/TextField";
require("./Chat.css");
var clienteIO = io("http://localhost:3001"); //conexion al servidor para bidireccional peticiones

//en controller/chat.js  comente como hacer las response y request que es la misma mecanica que cliente.IO

function Chat() {
  const [msg, setMsg] = useState("");
  const [conversacion, setConversacion] = useState([]);

  useEffect(() => {
    clienteIO.on("respuesta", (data) => {
      setConversacion([...conversacion, data]);
    });
  }, [conversacion]);

  function enviar() {
    clienteIO.emit("conectado", msg);
    setMsg("");
  }

  return (
    <Box sx={_style.box_messanger_father}>
      <Box name="contacts" sx={_style.box_contacts_a}>
        <Box name="menu-contacts-wrapper" sx={_style.menu_contacts_wrapper}>
          <Input name="inputSearch"></Input>
          <Conversations />
        </Box>
      </Box>
      <div style={{ flex: "5.5" }}>
        <Box name="conversations" sx={_style.box_conversations_b}>
          <Box
            name="menu-chating-wrapper"
            name="message"
            sx={_style.menu_chating_wrapper}
          >
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            maxWidth: "100%",
            flex: "row",
          }}
        >
          <TextField fullWidth size="small" />
          <Button variant="contained" endIcon={<SendIcon />}>
            ENVIAR
          </Button>
        </Box>
      </div>
      <Box name="contacts-online" sx={_style.box_contactsStates_c}>
        <Box
          name="menu-contactsOnline-wrapper"
          sx={_style.menu_contactsOnline_wrapper}
        >
          online
        </Box>
      </Box>
    </Box>
  );
}

export default Chat;
/*<Box name sx={{ height: "100%", width: "100%" }}>
 {conversacion.map((e) => (
     <h2 key={e}>{e}</h2>
     ))}
     </Box>
     <Input value={msg} onChange={(e) => setMsg(e.target.value)}></Input>
     <Button onClick={() => enviar()}>Enviar</Button>*/
