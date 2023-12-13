import express from "express";
const router = express.Router();

import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    createProductReview
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router
    .post("/:id/reviews", protect, createProductReview);

router.route("/")
    .post(protect, admin, createProduct)
    .get(getProducts);

router.route("/:id")
    .get(getProductById)
    .put(protect, admin, updateProduct)
    .delete(protect, admin, deleteProduct);

export default router;