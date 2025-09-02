import express from "express";
import { getAllQuotes, getRandomQuote, getSpecificQuote } from "../controllers/quote.js";

const router = express.Router()

router.get('/', getAllQuotes)
router.get('/random', getRandomQuote)
router.get('/:id', getSpecificQuote)

export default router