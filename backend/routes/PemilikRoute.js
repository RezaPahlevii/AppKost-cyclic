import express from "express";
import {
    getPemilik,
    getPemilikById,
    createPemilik,
    updatePemilik,
    deletePemilik
} from "../controllers/Pemilik.js";
import { verifyPemilik, adminOnly } from "../middleware/AuthPemilik.js";

const router = express.Router();

router.get('/pemilik-kost', verifyPemilik, adminOnly, getPemilik);
router.get('/pemilik-kost/:id',verifyPemilik, adminOnly, getPemilikById);
router.post('/pemilik-kost',verifyPemilik, adminOnly, createPemilik);
router.patch('/pemilik-kost/:id',verifyPemilik, adminOnly, updatePemilik);
router.delete('/pemilik-kost/:id',verifyPemilik, adminOnly, deletePemilik);


export default router;