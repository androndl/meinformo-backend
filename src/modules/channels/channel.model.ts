import { Schema, model } from 'mongoose';

const channelSchema = new Schema({
  name:        { type: String, required: true },
  slug:        { type: String, required: true, unique: true },
  description: { type: String, default: '' },
  type:        { type: String, enum: ['public', 'private'], default: 'public' },
  owner:       { type: String, required: true }, // nombre de usuario (sin auth por ahora)
  members:     { type: [String], default: [] },
}, { timestamps: true });

export const Channel = model('Channel', channelSchema);