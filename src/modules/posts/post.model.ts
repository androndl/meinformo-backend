import { Schema, model } from 'mongoose';

const postSchema = new Schema({
  channelId:  { type: Schema.Types.ObjectId, ref: 'Channel', required: true },
  authorName: { type: String, required: true },
  type:       { type: String, enum: ['news', 'event'], default: 'news' },
  title:      { type: String, required: true },
  content:    { type: String, required: true },
  coverImage: { type: String, default: '' },
  eventDate:  { type: Date },
  location:   { type: String },
  tags:       { type: [String], default: [] },
}, { timestamps: true });

export const Post = model('Post', postSchema);