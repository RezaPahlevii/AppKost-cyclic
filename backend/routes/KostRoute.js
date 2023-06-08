import express from "express";
import {
    getKost,
    getKostById,
    createKost,
    updateKost,
    deleteKost
} from "../controllers/Kost.js";

const router = express.Router();

router.get('/rumah-kost', getKost);
router.get('/rumah-kost/:id', getKostById);
router.post('/rumah-kost', createKost);
router.patch('/rumah-kost/:id', updateKost);
router.delete('/rumah-kost/:id', deleteKost);


export default router;