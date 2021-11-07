import { Response } from 'express';
import respond from '../respond';

export const sendResponse = (response: Response, statusCode: number, message: string, data?: any): Response => {
  return respond(response, statusCode, message, data);
};
