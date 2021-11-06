import { io } from "socket.io-client";
import React, { useEffect, useState } from "react";
import Conversations from "../Conversations/conversations.jsx";
import { Box } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import _style from "./Chat.css.jsx";
import { Button, Input } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { connect, useDispatch } from "react-redux";
import dotenv from "dotenv";
import Message from "../Message/message.jsx";
import {
  getContacts,
  getConvertations,
  getPots,
  getUserInfo,
  sendMessage,
} from "../../../redux/actions/index.js";
dotenv.config();

var clienteIO = io(process.env.REACT_APP_API); //conexion al servidor para bidireccional peticiones
require("./Chat.css");

function Chat({ cookie, convertations, contacts, posts, user }) {
  const [msg, setMsg] = useState("");
  const [contact, setContact] = useState();
  const [chating, setChating] = useState([]);
  const dispatch = useDispatch();

  //---------------------------------------------------------------------------get id all convertations
  useEffect(() => {
    if (cookie) {
      dispatch(getConvertations());
      dispatch(getContacts());
      dispatch(getUserInfo());
    }
    // eslint-disable-next-line
  }, [cookie]);

  //--------------------------------------------------------------------------------------------conversation of a contact
  function chatContact(idContact) {
    var conv = [];

    for (let i = 0; i < convertations.length; i++) {
      if (
        convertations[i].userA === idContact ||
        convertations[i].userB === idContact
      ) {
        conv.push(convertations[i].id);
      }
    }
    var [contact] = contacts.filter((contacts) => {
      return contacts.id === idContact;
    });
    setContact(contact);
    conv.length > 1
      ? dispatch(getPots(conv[0], conv[1]))
      : dispatch(getPots(conv[0], 0));
  }
  //----------------------------------------------------------------------------------send post
  function enviar() {
    clienteIO.emit("sendMessage", {
      ...msg,
      userId: "5342afe4-d80a-4920-815c-7e3b75d246b0",
      remit: "4e21899e-36ad-11ec-8d3d-0242ac130003",
    });
    setMsg("");
  }

  //------------------------------------------------------------------------------------------send msn
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(sendMessage({ remit: contact.id, message: msg }));
    setMsg("");
  }
  //------------------------------------------------------------------------------------------
  return (
    <Box sx={_style.box_messanger_father}>
      <Box name="contacts" sx={_style.box_contacts_a}>
        <Box name="menu-contacts-wrapper" sx={_style.menu_contacts_wrapper}>
          <Input name="inputSearch"></Input>
          {contacts &&
            contacts.map((con) => (
              <Box
                key={con.email}
                onClick={() => {
                  chatContact(con.id);
                }}
              >
                <Conversations key={con.email} contacts={con} />
              </Box>
            ))}
        </Box>
      </Box>
      <div style={{ flex: "5.5" }}>
        {posts.length ? (
          <Box name="conversations" sx={_style.box_conversations_b}>
            <Box
              name="menu-chating-wrapper"
              name="message"
              sx={_style.menu_chating_wrapper}
            >
              {convertations &&
                posts.map((msn) => (
                  <Message
                    key={msn.id}
                    user={user}
                    contact={contact}
                    message={msn}
                  />
                ))}
            </Box>
          </Box>
        ) : (
          <span>Open a convertation to start a chat</span>
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
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
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>
              ENVIAR
            </Button>
          </Box>
        </form>
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
  return {
    convertations: state.convertations,
    contacts: state.contacts,
    posts: state.posts,
    cookie: state.cookie,
    posts: state.posts,
    user: state.user,
  };
}

export default connect(mapStateToProps, {})(Chat);
