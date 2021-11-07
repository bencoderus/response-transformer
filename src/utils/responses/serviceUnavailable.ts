import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const serviceUnavailableResponse = (response: Response, message: string, data?: unknown): Response => {
  return respond(response, statusCodes.SERVICE_UNAVAILABLE, message, data);
};
