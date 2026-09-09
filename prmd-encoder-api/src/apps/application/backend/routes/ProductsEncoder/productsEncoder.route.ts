import { Router, Request, Response } from 'express';
import container from '../../dependency-injection';

export const register = (router: Router) => {
  const productsEncoderPutController = container.get('Apps.mooc.controllers.ProductEncoderPutController');
  router.put('/products-encoder', (req: Request, res: Response) => productsEncoderPutController.run(req, res));
  const productsEncoderGetController = container.get('Apps.mooc.controllers.ProductEncoderGetController');
  router.get('/products-validator', (req: Request, res: Response) => productsEncoderGetController.run(req, res));
};
