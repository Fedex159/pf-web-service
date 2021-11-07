import { io } from "socket.io-client";
import React, { useEffect, useRef, useState } from "react";
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
} from "../../../redux/actions";
dotenv.config();
require("./Chat.css");

function Chat({ cookie, convertations, contacts, posts, user }) {
  const [msg, setMsg] = useState("");
  const [contact, setContact] = useState(null);
  const [chating, setChating] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  var scrollRef = useRef();
  const socket = useRef(); //conexion al servidor para bidireccional peticiones
  //const socket = useRef(io(process.env.REACT_APP_API));
  const dispatch = useDispatch();

  //----------------------------------------------------------------------------socket
  useEffect(() => {
    //client conection
    socket.current = io("http://localhost:3001");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        userId: data.senderId,
        remit: data.remit,
        text: data.text,
        createdAt: Date.now(),
      });
      // }
    });
  }, []);
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chating]);

  useEffect(() => {
    if (cookie) {
      socket.current.emit("addUser", user.id);
    }
  }, [user]);

  useEffect(() => {
    console.log(contact ? true : false);
    if (contact) {
      contact.id === arrivalMessage.userId &&
        setChating([...chating, arrivalMessage]);
    }
  }, [arrivalMessage]);

  //----------------------------------------------------------------------------------chat with a user in online
  useEffect(() => {
    if (posts) {
      setChating(posts);
    }
  }, [posts]);
  //---------------------------------------------------------------------------get id all convertations and contacts
  useEffect(() => {
    if (cookie) {
      dispatch(getConvertations());
      dispatch(getContacts());

      if (cookie) {
        getUserInfo().then((userInfo) => dispatch(userInfo));
      }
    }
    // eslint-disable-next-line
  }, [cookie]);

  //--------------------------------------------------------------------------------------------conversation of a contact
  function chatContact(idContact) {
    var conv = [];
    for (let i = 0; i < convertations.length; i++) {
      var { userA, userB } = convertations[i];
      if (
        (userA === idContact && userB === user.id) ||
        (userA === user.id && userB === idContact)
      ) {
        conv.push(convertations[i].id);
      }
    }
    var [contact] = contacts.filter((contacts) => {
      return contacts.id === idContact;
    });
    setContact(contact);
    dispatch(getPots(conv[0]));
  }
  //------------------------------------------------------------------------------------------send msn
  function handleSubmit(e) {
    e.preventDefault();
    if (user && contact) {
      socket.current.emit("sendMsn", {
        senderId: user.id,
        receiverId: contact.id,
        text: msg,
      });

      setChating((prev) => [
        ...prev,
        {
          userId: user.id,
          remit: contact.id,
          text: msg,
        },
      ]);
      dispatch(sendMessage({ remit: contact.id, message: msg }));
      setMsg("");
    }
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
          <div name="conversations" style={_style.box_conversations_b}>
            <Box
              name="menu-chating-wrapper"
              name="message"
              sx={_style.menu_chating_wrapper}
            >
              {convertations &&
                chating.map((msn, i) => (
                  <Message
                    scrollRef={scrollRef}
                    key={i}
                    user={user}
                    contact={contact}
                    message={msn}
                  />
                ))}
            </Box>
          </div>
        ) : (
          <span>Open a convertation to start a chat</span>
        )}
        <form onSubmit={(e) => handleSubmit(e)}>
          {posts.length ? (
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
                {" "}
                ENVIAR
              </Button>
            </Box>
          ) : (
            <></>
          )}
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
