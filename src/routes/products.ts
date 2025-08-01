import { Router } from "express";
import productController, {
  productValidation,
} from "../controllers/productController";
import { validateSearchParams } from "../utils/validation";

const router = Router();

// Get all products with pagination, search, and filters
router.get("/", validateSearchParams, productController.getAllProducts);

// Get product by ID
router.get("/:id", productController.getProductById);

// Create new product
router.post("/", productValidation.create, productController.createProduct);

// Update product
router.put("/:id", productValidation.update, productController.updateProduct);

// Delete product (soft delete)
router.delete("/:id", productController.deleteProduct);

// Restore product (undo soft delete)
router.patch("/:id/restore", productController.restoreProduct);

export default router;
