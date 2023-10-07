import express from 'express';
import cors from 'cors';

import logger from './logger';
global.logger = logger;

import { LogRequestBody } from './middleware/log';
import FeedRouter from './routes/feed';
import TranslatorRouter from './routes/translator';

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({ limit: '1gb' }));
app.use(express.text());
app.use(LogRequestBody);

app.get("/", (req: any, res: any) => {
    res.send("hello, world!");
})

app.use("/translate", TranslatorRouter);
app.use("/feed", FeedRouter);

export {
    app
};