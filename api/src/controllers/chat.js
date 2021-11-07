const { Users, Chat, Convertations, ContactsOnline } = require("../db.js");
const { Op } = require("sequelize");

//-----------------------socket--------------------------------------function users online
const addUsers = async (user, socket) => {
  try {
    await ContactsOnline.findOrCreate({
      where: { userId: user, socketId: socket },
    });
  } catch (err) {}
};
//-----------------------------------------------------------------------------function remove user online
const removeUser = async (socketId) => {
  if (socketId) {
    await ContactsOnline.destroy({ where: { socketId } });
  }
};
//---------------------------------------------------------------------------------function get user
const getUser = async (receiveId) => {
  var user = await ContactsOnline.findAll({
    where: {
      userId: receiveId,
    },
  });
  return user;
};
//----------------------------------------------------------------------------server IO
function serverchat(serverIO) {
  serverIO.on("connection", (socketIO) => {
    //-----------------------------------------------------------------------------add new User
    socketIO.on("addUser", async (userId) => {
      addUsers(userId, socketIO.id);
      serverIO.emit("getUsers", await ContactsOnline.findAll());
    });
    //-----------------------------------------------------------------------------disconect user
    socketIO.on("disconnect", async () => {
      removeUser(socketIO.id);
      serverIO.emit("getUsers", await ContactsOnline.findAll());
    });
    //------------------------------------------------------------------------------------send msn

    socketIO.on("sendMsn", ({ senderId, receiverId, text }) => {
      console.log(senderId, "--", receiverId, "--", text);
      if (senderId && receiverId && text) {
        var user = getUser(receiverId);
        console.log(user, "el send");
        /* if (!user) {
                    serverIO.to(user.socketId).emit("getMessage", {
                        senderId,
                        text,
                    });
                }*/
      }
    });
  });
} //server id
//---------------------------------------------------------------------------------get messages
function getPots(req, res, next) {
  var { idConvertation1, idConvertation2, offset } = req.query;
  if (!offset) {
    offset = 0;
  }
  Chat.findAll({
    where: {
      [Op.or]: [
        { convertationId: idConvertation1 },
        { convertationId: idConvertation2 },
      ],
    },
    order: [["createdAt", "ASC"]],
    offset,
    limit: 30,
  })
    .then((posts) => {
      res.status(200).send(posts);
    })
    .catch((err) => {
      next(err);
    });
}
//----------------------------------------------------------------------------get id convertations
function getConvertations(req, res, next) {
  const { userId } = req.cookies;
  Convertations.findAll({
    where: {
      [Op.or]: [{ userA: userId }, { userB: userId }],
    },
    attributes: ["userA", "userB", "id"],
  })
    .then((members) => {
      res.status(200).send(members);
    })
    .catch((err) => {
      next(err);
    });
}
//---------------------------------------------------------------------------send [{ userId: userId }, { sender: remit }],
function sendMessage(req, res, next) {
  var { remit, message } = req.body;
  var { userId } = req.cookies;
  var user;
  Convertations.findOrCreate({
    where: {
      [Op.or]: [
        { [Op.and]: [{ userA: userId }, { userB: remit }] },
        { [Op.and]: [{ userA: remit }, { userB: userId }] },
      ],
    },
    defaults: { userA: userId, userB: remit },
  })
    .then(([convertation, flat]) => {
      Users.findByPk(userId)
        .then((userBd) => {
          user = userBd;
          return Chat.create({ remit: remit, text: message });
        })
        .then((chat) => {
          convertation.addChat(chat);
          return user.addChat(chat);
        })
        .then((resp) => {
          res.status(200).send("message send");
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
}

//---------------------------------------------------------------------------------get contact
function getContacts(req, res, next) {
  const { userId } = req.cookies;
  Convertations.findAll({
    where: { [Op.or]: [{ userA: userId }, { userB: userId }] },
    attributes: ["userA", "userB"],
  })
    .then((contacts) => {
      return contacts.map((con) => {
        var { userA, userB } = con.dataValues;
        if (userB === userId) {
          userB = userA;
        }
        return Users.findOne({
          where: {
            id: userB,
          },
          attributes: [
            "userImg",
            "name",
            "lastname",
            "username",
            "email",
            "id",
          ],
        });
      });
    })
    .then((resp) => {
      return Promise.all(resp);
    })
    .then((contacts) => {
      res.status(200).send(contacts);
    })
    .catch((err) => {
      next(err);
    });
}
//-----------------------------------------------------------------------------------------
module.exports = {
  serverchat,
  getConvertations,
  sendMessage,
  getPots,
  getContacts,
};
