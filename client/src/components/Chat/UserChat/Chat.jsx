import { io } from "socket.io-client";
import React, { useEffect, useState } from "react";
import Conversations from "../Conversations/conversations.jsx";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import _style from "./Chat.css.jsx";
import axios from "axios";
import { Button, Input } from "@material-ui/core";
import Message from "../Message/Message.jsx";
import TextField from "@mui/material/TextField";
import { connect } from "react-redux";
require("./Chat.css");
var clienteIO = io("http://localhost:3001"); //conexion al servidor para bidireccional peticiones

//en controller/chat.js  comente como hacer las response y request que es la misma mecanica que cliente.IO

function Chat({ cookie }) {
  console.log(cookie);
  const [msg, setMsg] = useState({ message: "" });
  const [contacts, setContacts] = useState([]);
  const [convertations, setConvertations] = useState([]);
  /*useEffect(() => {
    clienteIO.on("message", (data) => {
      setConvertations([...convertations, data]);
    });
  }, [convertations]);*/
  //---------------------------------------------------------------------------get id all convertations
  useEffect(() => {
    if (cookie) {
      const resp = async () => {
        await axios.get(
          `http://localhost:3001/chat/convertations/${"cf0f205f-458e-4454-bacc-37edfb5af904"}`
        )
          .then((_senders) => {
            console.log(_senders.data);
            setConvertations(_senders.data);
          })
          .catch((err) => {
            throw new Error(err);
          });
      };
      resp();
    }
  }, []);

  useEffect(() => {
    const resp = async () => {
      await axios(`http://localhost:3001/chat/contacts/${cookie}`)
        .then((_senders) => {
          console.log(_senders.data);
          setContacts(_senders.data);
        })
        .catch((err) => {
          throw new Error(err);
        });
    };
    resp();
  }, [convertations]);

  //----------------------------------------------------------------------------------send post
  function enviar() {
    clienteIO.emit("sendMessage", {
      ...msg,
      userId: "5342afe4-d80a-4920-815c-7e3b75d246b0",
      remit: "4e21899e-36ad-11ec-8d3d-0242ac130003",
    });
    setMsg("");
  }
  //------------------------------------------------------------------------------------------
  return (
    <Box sx={_style.box_messanger_father}>
      <Box name="contacts" sx={_style.box_contacts_a}>
        <Box name="menu-contacts-wrapper" sx={_style.menu_contacts_wrapper}>
          <Input name="inputSearch"></Input>
          {contacts &&
            contacts.map((contact) => <Conversations contacts={contact} />)}
        </Box>
      </Box>
      <div style={{ flex: "5.5" }}>
        <Box name="conversations" sx={_style.box_conversations_b}>
          <Box
            name="menu-chating-wrapper"
            name="message"
            sx={_style.menu_chating_wrapper}
          >
            {convertations && <Conversations />}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            maxWidth: "100%",
            flex: "row",
          }}
        >
          <TextField
            fullWidth
            size="small"
            value={msg.message}
            onChange={(e) => setMsg({ ...msg, message: e.target.value })}
          />
          <Button
            variant="contained"
            onClick={() => {
              enviar();
            }}
            endIcon={<SendIcon />}
          >
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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {})(Chat);
