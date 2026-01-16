import express from "express";

import userRoutes from "./user.route";
import contentRoutes from "./content.route";
import shareRoutes from "./share.route";

const router = express.Router();

router.use("/user", userRoutes);
router.use("/content", contentRoutes);
router.use("/linky", shareRoutes);

export default router;