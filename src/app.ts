import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import channelRoutes from './modules/channels/channel.routes';
import postRoutes from './modules/posts/post.routes';
import { errorMiddleware } from './middlewares/error.middleware';

dotenv.config();
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/channels', channelRoutes);
app.use('/api/posts', postRoutes);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;
connectDB().then(() => app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
));