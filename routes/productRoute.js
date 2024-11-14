import express from "express";
import Products from "../models/productModule.js";
import Authorization from "./authorization.js";

const router = express.Router();

router.post("/addProducts", async (req, res) => {
    try{
        const {title, image, description, price, category} = req.body;
        const addProduct = new Products({title, image, description, price, category});
        await addProduct.save();
        res.status(201).send({message:"Product added Successfully"});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.post("/addall", async (req, res) => {
    try{
        const items = req.body;
        const result = await Products.insertMany(items);
        res.status(201).send({message:"items inserted successfully", result});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
})

router.get("/allProducts", async (req, res) => {
    try{
        const getProducts = await Products.find({})
        res.status(201).send({message:"All Products.", getProducts});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/camera", async(req, res) => {
    try{
        const getCamera = await Products.find({category:"Camera"});
        res.status(201).send({message:"Camera datas.", getCamera});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/electronics", async(req, res) => {
    try{
        const getElectronics = await Products.find({category:"Electronics"});
        res.status(201).send({message:"Electronics Products.", getElectronics});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/Laptops", async(req, res) => {
    try{
        const getLaptops = await Products.find({category:"Laptops"});
        res.status(201).send({message:"Laptops Products.", getLaptops});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/Mobiles", async(req, res) => {
    try{
        const getMobiles = await Products.find({category:"Mobiles"});
        res.status(201).send({message:"Mobiles Products.", getMobiles});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/Books", async(req, res) => {
    try{
        const getBooks = await Products.find({category:"Books"});
        res.status(201).send({message:"Books Products.", getBooks});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/Fashion", async(req, res) => {
    try{
        const getFashion = await Products.find({category:"Fashion"});
        res.status(201).send({message:"Fashion Products.", getFashion});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/mensonly", async(req, res) => {
    try{
        const getFashion = await Products.find({subCategory:"Men"});
        res.status(201).send({message:"Fashion Products.", getFashion});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/womensonly", async(req, res) => {
    try{
        const getFashion = await Products.find({subCategory:"Women"});
        res.status(201).send({message:"Fashion Products.", getFashion});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/Snacks", async(req, res) => {
    try{
        const getSnacks = await Products.find({category:"Snacks"});
        res.status(201).send({message:"Snacks Products.", getSnacks});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/Grooming", async(req, res) => {
    try{
        const getGrooming = await Products.find({category:"Grooming"});
        res.status(201).send({message:"Grooming Products.", getGrooming});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/Toys", async(req, res) => {
    try{
        const getToys = await Products.find({category:"Toys"});
        res.status(201).send({message:"Toys Products.", getToys});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/Beauty", async(req, res) => {
    try{
        const getBeauty = await Products.find({category:"Beauty"});
        res.status(201).send({message:"Beauty Products.", getBeauty});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/:id", async (req, res) => {
    try{        
        const product = await Products.findById(req.params.id);
        res.status(201).send({message:"Product Details.", product});
    }catch(error){
        res.status(400).send({message:"Internal Server Error", error:error.message})
    }
});

router.get("/search"), async (req, res) => {
    const {query} = req.query;
    try{
        const products = await Products.find({
            category:{$regex:query, $options: 'i'}
        });
        res.json(products);
    }catch(error){
        res.status(500).send({error:'server error'})
    }
}


export const ProductRoute = router;