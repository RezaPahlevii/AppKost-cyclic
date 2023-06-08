import express from "express";
import { getKost, getKostById, createKost, updateKost, deleteKost } from "../controllers/Kost.js";
import { verifyPemilik } from "../middleware/AuthPemilik.js";

const router = express.Router();

router.get('/rumah-kost',verifyPemilik, getKost);
router.get('/rumah-kost/:id', verifyPemilik, getKostById);
router.post('/rumah-kost/',verifyPemilik, createKost);
router.patch('/rumah-kost/:id', verifyPemilik, updateKost);
router.delete('/rumah-kost/:id', verifyPemilik, deleteKost);

export default router;