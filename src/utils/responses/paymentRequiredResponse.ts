import { Response } from 'express';
import respond from '../respond';
import statusCodes from '../statusCodes';

export const paymentRequiredResponse = (response: Response, message: string, data?: unknown): Response => {
  return respond(response, statusCodes.PAYMENT_REQUIRED, message, data);
};
