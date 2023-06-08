import express from "express";
import {
    getPemilik,
    getPemilikById,
    createPemilik,
    updatePemilik,
    deletePemilik
} from "../controllers/Pemilik.js";

const router = express.Router();

router.get('/pemilik-kost', getPemilik);
router.get('/pemilik-kost/:id', getPemilikById);
router.post('/pemilik-kost', createPemilik);
router.patch('/pemilik-kost/:id', updatePemilik);
router.delete('/pemilik-kost/:id', deletePemilik);


export default router;