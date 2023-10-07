import express from 'express';
import { Request, Response } from 'express';
import { prisma } from '../clients';
import { createDirIfNotExist, determineExtension } from '../services/util';
import { getCurrentDate } from '../services/date';
import { writeFile } from 'fs/promises';
import { resolve, join } from 'path';

const IMG_DIR = resolve(process.cwd() + '/../frontend/public/imgs/');
const IMG_URL = "imgs";
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
        const base64img = req.body.img.split(',')[1];

        // Determine Img URL
        await createDirIfNotExist(IMG_DIR);
        const extension = determineExtension(base64img);
        const name = String((Math.random() + 1).toString(36).substring(7));
        const filename = name + '.' + extension;
        const imgDir = join(IMG_DIR, filename);
        const imgURL = join(IMG_URL, filename);

        // Store image in file system
        await writeFile(imgDir, base64img, {encoding: 'base64'});

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