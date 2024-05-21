import { Router } from "express";
import { ProductController } from "../../controllers/ProductController/ProductController";
import { authenticateToken } from "../../middlewares/authMiddleware";

const productRouter = Router();
const productController = new ProductController();

productRouter.post("/createProduct", authenticateToken, (req, res) =>
  productController.createProduct(req, res)
);

productRouter.put("/updateProduct/:id", (req, res) =>
  productController.updateProduct(req, res)
);

productRouter.get("/getProduct", (req, res) =>
  productController.getAllProducts(req, res)
);

productRouter.get("/getProductById/:id", (req, res) =>
  productController.getProductById(req, res)
);

productRouter.delete("/deleteProduct/:id", (req, res) =>
  productController.deleteProduct(req, res)
);

productRouter.get("/getNewProduct", (req, res) =>
  productController.getNewProduct(req, res)
);

productRouter.get("/getProductByUser/:id", (req, res) =>
  productController.getProductByUser(req, res)
);

productRouter.put("/updateProductByUser/:id", authenticateToken, (req, res) =>
  productController.updateProductByUser(req, res)
);

productRouter.delete(
  "/deleteProductByUser/:id",
  authenticateToken,
  (req, res) => productController.deleteProductByUser(req, res)
);

export default productRouter;
