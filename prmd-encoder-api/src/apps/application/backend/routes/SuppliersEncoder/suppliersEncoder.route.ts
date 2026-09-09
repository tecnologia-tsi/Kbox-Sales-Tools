import {Router, Request, Response} from 'express';
import container from '../../dependency-injection';

export const register = (router: Router) => {
  const suppliersEncoderPutController = container.get('Apps.mooc.controllers.SupplierEncoderPutController');
  router.put('/suppliers-encoder', (req: Request, res: Response) => suppliersEncoderPutController.run(req, res));
  const suppliersEncoderGetController = container.get('Apps.mooc.controllers.SupplierEncoderGetController');
  router.get('/suppliers-validator', (req: Request, res: Response) => suppliersEncoderGetController.run(req, res));
};
