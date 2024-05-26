import Product from "../models/product";

export const newProduct = async (req, res, next) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).json({
            product,
        })
        
    } 
    catch (err){
        console.err(`Something Went Wrong ${err.message}`);
    }
   
}

export const getProducts = async (req, res, next) => {
    try{
        const product = await Product.find();
        res.status(200).json({
            product,
        })
        
    } 
    catch (err){
        console.err(`Something Went Wrong ${err.message}`);
    }
   
}