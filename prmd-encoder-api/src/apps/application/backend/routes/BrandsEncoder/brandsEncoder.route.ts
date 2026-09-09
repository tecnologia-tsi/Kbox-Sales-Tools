import { Router, Request, Response } from 'express';
import container from '../../dependency-injection';

export const register = (router: Router) => {
  const brandsEncoderPutController = container.get('Apps.mooc.controllers.BrandEncoderPutController');
  router.put('/brands-encoder', (req: Request, res: Response) => brandsEncoderPutController.run(req, res));
  const brandsEncoderGetController = container.get('Apps.mooc.controllers.BrandEncoderGetController');
  router.get('/brands-validator', (req: Request, res: Response) => brandsEncoderGetController.run(req, res));
};
