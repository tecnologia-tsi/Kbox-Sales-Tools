import {Controller} from '../Controller';
import {Request, Response} from 'express';
import httpStatus = require('http-status');
import {QueryBus} from '../../../../../Contexts/Shared/domain/QueryBus';
import {ValidateBrandEncoderQuery} from '../../../../../Contexts/Application/BrandsEncoder/application/Validator/ValidateBrandEncoderQuery';
import {ValidateBrandEncoderResponse} from '../../../../../Contexts/Application/BrandsEncoder/application/Validator/ValidateBrandEncoderResponse';

export class BrandEncoderGetController implements Controller {
  constructor(private queryBus: QueryBus) {
  }

  async run(req: Request, res: Response): Promise<void> {
    const name: string = req.body.name;
    const skipSuggestions: boolean = req.body.skipSuggestions;

    try {
      const query = new ValidateBrandEncoderQuery({
        name,
        skipSuggestions,
      });
      const historicalData = await this.queryBus.ask<ValidateBrandEncoderResponse>(query);

      res.status(httpStatus.OK).send(historicalData.data);
    } catch (e) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        message: e.message
      });
    }
  }
}
