import jwt from "jsonwebtoken";
const validateUser = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    return res.status(401).json({ message: "Not authorized" });
  }
  return decoded;
}
export default validateUser;