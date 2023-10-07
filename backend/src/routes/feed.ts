import express from 'express';
import { Request, Response } from 'express';
// import { prisma } from '../clients';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    logger.log('info', 'Getting Posts...');
    res.status(200).end();
});

export = router;