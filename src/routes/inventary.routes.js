import express from "express";
import {
    getPrice,
    postPrice
} from "../controllers/inventary,controller";
const router = express(); 

router.get('/inventary',getPrice);
router.post('/inventary',postPrice);

export default router; 