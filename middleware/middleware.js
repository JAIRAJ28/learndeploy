const jwt = require("jsonwebtoken");

const authall = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  if (token) {
    try {
      jwt.verify(token, "masai", (err, decoded) => {
        if (decoded) {
          console.log(decoded);
          req.body.authorId = decoded.authorId;
          req.body.author = decoded.author;
          next();
        } else {
          res.status(400).send({ err: "jwt verify issue" });
        }
      });
    } catch (err) {
      res.status(400).send({ err: "HEREISTHEISSUE VERIFY" });
    }
  } else {
    res.status(400).send({ msg: "Token Is Needed" });
  }
};

module.exports = { authall };
