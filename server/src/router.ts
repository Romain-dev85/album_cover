import express from "express";

const router = express.Router();

import albumCoverAction from "./modules/albumCover/albumCoverAction";

router.get("/album-cover", albumCoverAction.browse);
router.get("/album-cover/:id", albumCoverAction.read);
router.put("/album-cover/:id", albumCoverAction.edit);

export default router;
