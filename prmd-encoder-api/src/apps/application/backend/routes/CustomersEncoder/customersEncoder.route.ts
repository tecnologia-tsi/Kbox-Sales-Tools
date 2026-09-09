import {Router, Request, Response} from 'express';
import container from '../../dependency-injection';

export const register = (router: Router) => {
  const customersEncoderPutController = container.get('Apps.mooc.controllers.CustomerEncoderPutController');
  router.put('/customers-encoder', (req: Request, res: Response) => customersEncoderPutController.run(req, res));
  const customersEncoderGetController = container.get('Apps.mooc.controllers.CustomerEncoderGetController');
  router.get('/customers-validator', (req: Request, res: Response) => customersEncoderGetController.run(req, res));
};
