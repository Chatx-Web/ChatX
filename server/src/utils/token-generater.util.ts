import jwt from 'jsonwebtoken';
import config from '../configs/config';
import { Types } from 'mongoose';

export function generateAccessToken(userId:Types.ObjectId) {
    return jwt.sign({ Id:userId }, config.accessTokenSecret, { expiresIn: '15m' });
}

export function generateRefreshToken(userId: Types.ObjectId) {
    return jwt.sign({ Id:userId } , config.refreshTokenSecret, { expiresIn: '7d' });
}