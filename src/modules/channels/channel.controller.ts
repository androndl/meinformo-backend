import { Request, Response } from 'express';
import { ChannelService } from './channel.service';
import { ok, created, notFound, badRequest } from '../../shared/response.helper';

export const ChannelController = {
  getAll: async (req: Request, res: Response) => {
    const channels = await ChannelService.getAll();
    ok(res, channels);
  },

  getById: async (req: Request, res: Response) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const channel = await ChannelService.getById(id);
    if (!channel) return notFound(res, 'Channel not found');
    ok(res, channel);
  },

  create: async (req: Request, res: Response) => {
    const { name, description, type, owner } = req.body;
    if (!name || !owner) return badRequest(res, 'name and owner are required');
    const channel = await ChannelService.create({ name, description, type, owner });
    created(res, channel);
  },

  join: async (req: Request, res: Response) => {
    const { username } = req.body;
    if (!username) return badRequest(res, 'username is required');
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const channel = await ChannelService.join(id, username);
    if (!channel) return notFound(res, 'Channel not found');
    ok(res, channel);
  },

  leave: async (req: Request, res: Response) => {
    const { username } = req.body;
    if (!username) return badRequest(res, 'username is required');
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const channel = await ChannelService.leave(id, username);
    if (!channel) return notFound(res, 'Channel not found');
    ok(res, channel);
  },
};