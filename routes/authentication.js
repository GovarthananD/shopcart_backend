import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const router = express.Router();

router.post("/register", async (req, res) => {
   try{
    const {name, email, password} = req.body;
    const userAlreadyExist = await User.findOne({email});
    if(userAlreadyExist){
        res.status(400).send({message:"User Already Exist!"});
    }
    const hashedPassword = await bcrypt.hash(password, 13);
    const user = new User({name, email, password:hashedPassword});
    await user.save();
    // const token = jwt.sign({email}, process.env.SECRET_KEY)
    res.status(201).send({message:"User Registered Successfully"});
   }catch(error){
    res.status(400).send({message:"Server Error", error:error.message});
   }
});

router.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).send({message:"User not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).send("Invalid password!");
        }
        const token = jwt.sign({email:user.email}, process.env.SECRET_KEY);
        res.status(201).send({ message: 'Login successful', token });
    }catch(error){
        res.status(400).send({message:"Server Error", error:error.message})
    }
});

export const userRouter = router;