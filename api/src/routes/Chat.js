var express = require("express");
var router = express.Router();
const {
  getMermers,
  sendMessage,
  newConvertation,
  getConvertations,
  getPots,
  getContacts,
} = require("../controllers/chat");


router.post("/", sendMessage);
router.get("/convertations", getConvertations);
router.get("/posts", getPots);
router.get("/contacts", getContacts);

module.exports = router;
