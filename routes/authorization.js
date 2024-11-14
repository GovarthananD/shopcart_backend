import jwt from "jsonwebtoken";

const Authorization = (req, res, next) => {
    const token = req.header("Authorization");
    if(!token) return res.status(401).send("Access denied");
    try{
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        next();
    }catch(error){
        res.status(400).send({message:"Invalid token"});
      }
}

export default Authorization;