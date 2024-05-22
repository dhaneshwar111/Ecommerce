import exppress from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  orderStatusController,
  registerController,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// router objects
const router = exppress.Router();

//REGISTER:--

router.post("/register", registerController);

//LOGIN:--

router.post("/login", loginController);

// forgot password:--

router.post("/forgot-password", forgotPasswordController);

// test route
router.get("/test", requireSignIn, isAdmin, testController);

// protected-route for user:--
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected-route for admin:--
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile

router.put("/profile", requireSignIn, updateProfileController);

// orders:--

router.get("/orders",requireSignIn,getOrdersController)

// all orders
router.get("/all-orders",requireSignIn, getAllOrdersController)

// order status:----
router.put("/order-status/:orderId",requireSignIn,isAdmin,orderStatusController)

export default router;
