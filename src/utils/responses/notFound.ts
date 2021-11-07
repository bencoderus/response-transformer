import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const notFoundResponse = (response: Response, message: string, data?: unknown): Response => {
  return respond(response, statusCodes.NOT_FOUND, message, data);
};
