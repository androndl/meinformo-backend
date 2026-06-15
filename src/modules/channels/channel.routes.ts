import { Router } from 'express';
import { ChannelController } from './channel.controller';

const router = Router();

router.get('/',           ChannelController.getAll);
router.get('/:id',        ChannelController.getById);
router.post('/',          ChannelController.create);
router.post('/:id/join',  ChannelController.join);
router.post('/:id/leave', ChannelController.leave);

export default router;