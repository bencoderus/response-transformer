import { Response } from 'express';
import { responseStructure } from '../types/base.type';

export default (response: Response, statusCode: number, message: string, data: unknown): Response => {
  const status: boolean = statusCode >= 200 && statusCode <= 205;

  const baseStructure: responseStructure = {
    status,
    message,
  };

  const useErrorInstead: boolean = statusCode > 205;

  if (data) {
    baseStructure[useErrorInstead ? 'error' : 'data'] = data;
  }

  return response.status(statusCode).json(baseStructure);
};
