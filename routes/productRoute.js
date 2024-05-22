import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
  braintreePaymentsController,
  braintreeTokenController,
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productCategoryController,
  productCountController,
  productFilterController,
  productListController,
  productPhotoController,
  relatedProductController,
  searchProductController,
  updateProductController,
} from "../controllers/productController.js";
import ExpressFormidable from "express-formidable";


const router = express.Router();

// routes

// create-product

router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  ExpressFormidable(),
  createProductController
);

// update product

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  ExpressFormidable(),
  updateProductController
);

// get products

router.get("/get-product", getProductController);

// single product:--

router.get("/get-product/:slug", getSingleProductController);

// get photo:--

router.get("/product-photo/:pid", productPhotoController);

// delete product:--

router.delete("/delete-product/:pid", deleteProductController);

// filter product:--

router.post("/product-filters", productFilterController);

// product count:--

router.get("/product-count", productCountController);

// product per page:--

router.get("/product-list/:page", productListController);

// search product:--
router.get("/search/:keyword", searchProductController);
// similar product:--

router.get("/related-product/:pid/:cid", relatedProductController);

// category wise product

router.get("/product-category/:slug",productCategoryController)

// PAYMENT GATEWAY ROUTE:--
router.get("/braintree/token", braintreeTokenController)

// PAYMENTS

router.post("/braintree/payment",requireSignIn, braintreePaymentsController)

export default router;
