import express from 'express';
import { Request, Response } from 'express';
import { prisma } from '../clients';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    logger.log('info', 'Getting Posts...');

    try {
        const posts = await prisma.post.findMany({
            select: {
                id: true,
                description: true,
                postedDate: true,
                authorId: false,
                imgURL: true,
                author: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        res.send(posts).status(200).end();
    } catch {
        res.status(400).end();
    }
});

router.post('/', async(req: Request, res: Response) => {
    logger.log('info', 'Creating a new post');

    res.header('Content-Type', 'application/json');
    res.send(req.body).end();
});

export = router;