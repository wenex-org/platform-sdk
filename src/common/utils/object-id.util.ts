import * as crypto from 'crypto';
import { Types } from 'mongoose';

export const MongoId = () =>
  Math.floor(Date.now() / 1000).toString(16) +
  ' '.repeat(16).replace(/./g, () => Math.floor(crypto.randomInt(16)).toString(16));

export const ObjectId = (id: string = MongoId()) => new Types.ObjectId(id);
