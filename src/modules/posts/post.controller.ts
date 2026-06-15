import { Request, Response } from 'express';
import { PostService } from './post.service';
import { ok, created, notFound, badRequest } from '../../shared/response.helper';

export const PostController = {
  getByChannel: async (req: Request, res: Response) => {
    const channelId = Array.isArray(req.params.channelId)
      ? req.params.channelId[0]
      : req.params.channelId;
    const posts = await PostService.getByChannel(channelId as string);
    ok(res, posts);
  },

getFeed: async (req: Request, res: Response) => {
  const { channelIds } = req.query;

  if (!channelIds || typeof channelIds !== 'string')
    return badRequest(res, 'channelIds query param is required');

  const ids = channelIds.split(',');
  const posts = await PostService.getByChannels(ids);
  ok(res, posts);
},

  getById: async (req: Request, res: Response) => {
    const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    const post = await PostService.getById(id as string);
    if (!post) return notFound(res, 'Post not found');
    ok(res, post);
  },

  create: async (req: Request, res: Response) => {
    const { channelId, authorName, title, content } = req.body;
    if (!channelId || !authorName || !title || !content)
      return badRequest(res, 'channelId, authorName, title and content are required');
    const post = await PostService.create(req.body);
    created(res, post);
  },
};