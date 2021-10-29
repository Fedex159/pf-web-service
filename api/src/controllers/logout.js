const { Users } = require('../db.js');



async function postLogout(req, res, next) {
    
    res.clearCookie('userId');
   
}

module.exports = {
    postLogout,
  };