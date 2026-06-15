import { Post } from './post.model';

export const PostService = {
  getByChannel: (channelId: string) =>
    Post.find({ channelId }).sort({ createdAt: -1 }),

  getByChannels: (channelIds: string[]) =>
    Post.find({ channelId: { $in: channelIds } }).sort({ createdAt: -1 }),

  getById: (id: string) => Post.findById(id),

  create: (data: {
    channelId: string;
    authorName: string;
    type?: 'news' | 'event';
    title: string;
    content: string;
    coverImage?: string;
    eventDate?: string;
    location?: string;
    tags?: string[];
  }) => Post.create(data),
};