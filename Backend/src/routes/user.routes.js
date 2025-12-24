import express from "express";
import {
  createAndUpdateUser,
  deleteUser,
  getAllUser,
} from "../controllers/user.controllers.js";
const router = express.Router();

router.post("/create", createAndUpdateUser);
router.put("/update/:id", createAndUpdateUser);
router.delete("/delete", deleteUser);
router.get("/get", getAllUser);

export default router;
