import jwt from "jsonwebtoken";
const validateUser = (req, res) => {
  let token;
   token = req.headers.authorization.split(" ")[1]; 
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    return true;
  } catch (error) {
    return false;
   
  }
}
export default validateUser;