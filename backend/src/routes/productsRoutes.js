import express from "express";

import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const router = express.Router();

router.get("/", asyncHandler(async (req, res) => {
    const products = await Product.find({});

    res.send(products);
}));
router.get("/:id", asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    console.log(product);
    if (product) return res.send(product);

    res.status(404).send({ message: "Product not found" });
}));

export default router;