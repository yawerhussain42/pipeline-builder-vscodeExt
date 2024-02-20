const enableCORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, token, Content-Length, X-Requested-With, *");
  if ("OPTIONS" === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
};

module.exports = enableCORS;
