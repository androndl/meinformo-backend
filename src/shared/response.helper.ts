import { Response } from 'express';

export const ok = (res: Response, data: unknown) =>
  res.status(200).json({ success: true, data });

export const created = (res: Response, data: unknown) =>
  res.status(201).json({ success: true, data });

export const notFound = (res: Response, msg = 'Not found') =>
  res.status(404).json({ success: false, message: msg });

export const badRequest = (res: Response, msg: string) =>
  res.status(400).json({ success: false, message: msg });