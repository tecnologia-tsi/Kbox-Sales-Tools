import { Router, Request, Response } from 'express';
import container from '../../dependency-injection';

export const register = (router: Router) => {
  const sellersEncoderPutController = container.get('Apps.mooc.controllers.SellerEncoderPutController');
  router.put('/sellers-encoder', (req: Request, res: Response) => sellersEncoderPutController.run(req, res));
  const sellersEncoderGetController = container.get('Apps.mooc.controllers.SellerEncoderGetController');
  router.get('/sellers-validator', (req: Request, res: Response) => sellersEncoderGetController.run(req, res));
};
