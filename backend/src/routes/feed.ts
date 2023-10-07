import express from 'express';
import { Request, Response } from 'express';
import { prisma } from '../clients';
import { createDirIfNotExist, findAvailableFileName } from '../services/util';
import { getCurrentDate } from '../services/date';
import { writeFile } from 'fs/promises';
import { resolve, join } from 'path';

const IMG_DIR = resolve(process.cwd() + '/../frontend/public/imgs/');
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    logger.log('info', 'Getting Posts...');

    try {
        let posts = await prisma.post.findMany({
            select: {
                id: true,
                description: true,
                postedDate: true,
                authorId: true,
                imgURL: true,
                author: {
                    select: {
                        name: true,
                    }
                }
            }
        });
        res.header('Content-Type', 'application/json');
        res.send(posts).status(200).end();
    } catch {
        res.status(400).end();
    }
});

router.post('/', async(req: Request, res: Response) => {
    logger.log('info', 'Creating a new post');

    try {
        // Determine Img URL
        await createDirIfNotExist(IMG_DIR);
        //const filename = await findAvailableFileName(IMG_DIR, req.body.filename);
        const imgURL = join(IMG_DIR, findAvailableFileName(IMG_DIR, "img"));

        // Store image in file system
        await writeFile(imgURL, req.body.img, {encoding: 'base64'});

        // TODO: For now, just pick a random user to associate the post with
        // Later, get this from the auth token
        const user = await prisma.user.findFirst();

        // Store post in database
        await prisma.post.create({
            data: {
                authorId: user.id,
                imgURL: imgURL,
                description: req.body.description,
                postedDate: getCurrentDate()
            }
        });

        res.status(200).end();
    } catch (e) {
        logger.log('info', e);
        res.status(400).end();
    }
});

export = router;