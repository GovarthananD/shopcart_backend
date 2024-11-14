import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
    type:String,
    required:true,
    trim:true
},
    image:{
        type:String,
    required:true,
    trim:true
    },
    price:{
        type:String,
    required:true,
    trim:true
    },
    description:{
        type:String,
    required:true,
    trim:true
    },
    category:{
        type:String,
    required:true,
    enum:["Electronics","Camera","Laptops","Mobiles","Books", "Fashion","Snacks","Grooming","Toys","Beauty"],
    trim:true
    },
    subCategory:{
        type:String,
    required:false,
    enum:["Men","Women"],
    trim:true
    }
});

const Products = mongoose.model("Products", productSchema);
export default Products;