import express from 'express';
import { Request, Response } from 'express';
import textToSpeech from '@google-cloud/text-to-speech';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const client = new textToSpeech.TextToSpeechClient();
        const [response] = await client.synthesizeSpeech(req.body);
        res.send(Buffer.from(response.audioContent).toString('base64')).end();
    } catch (e) {
        console.log(e);
        res.status(400).end();
    }
});

export = router;