import express from "express";
import { getKost, getKostById, createKost, updateKost, deleteKost } from "../controllers/Kost.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/rumah-kost',verifyUser, getKost);
router.get('/rumah-kost/:id', verifyUser, getKostById);
router.post('/rumah-kost/',verifyUser, createKost);
router.patch('/rumah-kost/:id', verifyUser, updateKost);
router.delete('/rumah-kost/:id', verifyUser, deleteKost);

export default router;