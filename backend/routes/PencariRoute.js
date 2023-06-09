import express from "express";
import {
    getPencari,
    getPencariById,
    createPencari,
    updatePencari,
    deletePencari
} from "../controllers/Pencari.js";

const router = express.Router();

router.get('/pencari-kost', getPencari);
router.get('/pencari-kost/:id', getPencariById);
router.post('/pencari-kost', createPencari);
router.patch('/pencari-kost/:id', updatePencari);
router.delete('/pencari-kost/:id', deletePencari);


export default router;