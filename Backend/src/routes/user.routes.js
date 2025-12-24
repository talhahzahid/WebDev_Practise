import express from "express";
import { createAndUpdateUser } from "../controllers/user.controllers.js";
const router = express.Router();

router.post("/create", createAndUpdateUser);
router.put("/update", createAndUpdateUser);

export default router;
