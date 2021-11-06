//server envia a user >>>>   serverIO.emit("nombre del metodo que tiene el usuario "     ,    objeto que envia)
//cliente envia a server(solo front)   >>>>   clienteIO.emit("nombre del metodo que tiene el servidor "    ,   objeto que envia )
//server recibe de user serverIO.on("nombre metodo que el ser recibe"  ,  function (data)  )
//cliente recibe de user clienteIO.on("nombre metodo que el ser recibe"  ,  function (data)  )
const { Users, Chat, Convertations } = require("../db.js");
const { Op } = require("sequelize");
function serverchat(serverIO) {
  serverIO.on("connection", (clienteIO) => {
    //server en linea

    console.log("chat servidor", "2");
    //-----------------------------------------------------------------send message
    clienteIO.on("sendMessage", (data) => {
      serverIO.emit("responseMessage", `${data.message} `);
    });
  });
}
//---------------------------------------------------------------------------------get messages
function getPots(req, res, next) {
  var { idConvertation1, idConvertation2, offset } = req.query;
console.log(idConvertation1, idConvertation2);
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
  var {remit, message } = req.body;
  var {userId}=req.cookies;
  var user;
  Convertations.findOrCreate({
    where: {
      [Op.and]: [{ userA: userId }, { userB: remit }],
    },
    defaults: { userA: userId, userB: remit },
  })
    .then(([convertation]) => {
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
    where: { userA: userId },
    attributes: ["userA", "userB"],
  })
    .then((contacts) => {
      return contacts.map((con) => {
        const { userB } = con.dataValues;
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
