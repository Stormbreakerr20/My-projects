import express from "express";

import * as dotenv from 'dotenv'
import { Configuration, OpenAIApi } from "openai";

dotenv.config();
const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_KEY,
});
const openai = new OpenAIApi(configuration);

router.route('/').get((req,res)=>{
    res.json({message:"Hello!! Backend working"})
})
router.route('/').post(async(req,res)=>{
    try {
        const {prompt} = req.body;

        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "512x512",
            response_format:'b64_json'
        });
        const x = response.data.data[0].b64_json;

        res.json({photo:x});

    } catch (error) {
        res.json({error})
    }
})

export default router;