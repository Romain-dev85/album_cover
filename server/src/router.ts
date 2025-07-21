import express from "express";

const router = express.Router();

import albumCoverAction from "./modules/albumCover/albumCoverAction";

router.get("/album-cover", albumCoverAction.browse);
router.get("/album-cover/:id", albumCoverAction.read);

export default router;
