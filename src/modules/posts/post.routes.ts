import { Router } from 'express';
import { PostController } from './post.controller';

const router = Router();

router.get('/feed',              PostController.getFeed);       // ?channelIds=id1,id2
router.get('/channel/:channelId', PostController.getByChannel);
router.get('/:id',               PostController.getById);
router.post('/',                 PostController.create);

export default router;