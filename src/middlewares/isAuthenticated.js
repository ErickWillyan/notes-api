import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  console.log("Chamando middleware");

  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = jwt.verify(token, process.env.JWT_SECRET);

    req.id = sub;

    console.log("logado");

    return next();
  } catch (error) {
    return response.json(401).end();
  }
};

export { isAuthenticated };
