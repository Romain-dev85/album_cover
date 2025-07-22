import express from "express";

const router = express.Router();

import albumCoverAction from "./modules/albumCover/albumCoverAction";

router.get("/album-cover", albumCoverAction.browse);
router.get("/album-cover/:id", albumCoverAction.read);
router.put("/album-cover/:id", albumCoverAction.edit);
router.post("/album-cover", albumCoverAction.add);
router.delete("/album-cover/:id", albumCoverAction.destroy);

export default router;
