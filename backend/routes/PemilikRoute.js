import express from "express";
import { getPemilik, getPemilikById, createPemilik, updatePemilik, deletePemilik } from "../controllers/Pemilik.js";
import { verifyPemilik, adminOnly } from "../middleware/AuthPemilik.js";

const router = express.Router();

router.get('/users', verifyPemilik, adminOnly, getPemilik);
router.get('/users/:id', verifyPemilik, adminOnly, getPemilikById);
router.post('/users/', verifyPemilik, adminOnly, createPemilik);
router.patch('/users/:id', verifyPemilik, adminOnly, updatePemilik);
router.delete('/users/:id', verifyPemilik, adminOnly, deletePemilik);

export default router;