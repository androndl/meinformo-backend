import { Channel } from './channel.model';

export const ChannelService = {
  getAll: () => Channel.find().sort({ createdAt: -1 }),

  getById: (id: string) => Channel.findById(id),

  create: (data: { name: string; description?: string; type?: 'public' | 'private'; owner: string }) => {
    const slug = data.name.toLowerCase().replace(/\s+/g, '-');
    return Channel.create({ ...data, slug, members: [data.owner] });
  },

  join: (id: string, username: string) =>
    Channel.findByIdAndUpdate(id, { $addToSet: { members: username } }, { new: true }),

  leave: (id: string, username: string) =>
    Channel.findByIdAndUpdate(id, { $pull: { members: username } }, { new: true }),
};