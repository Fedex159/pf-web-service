async function postLogout(req, res, next) {
    res.clearCookie('userId');
    res.redirect('/services');
}

module.exports = {
    postLogout,
  };