import {Controller} from '../Controller';
import {Request, Response} from 'express';
import httpStatus = require('http-status');
import {QueryBus} from '../../../../../Contexts/Shared/domain/QueryBus';
import {ValidateProductEncoderQuery} from '../../../../../Contexts/Application/ProductsEncoder/application/Validator/ValidateProductEncoderQuery';
import {ValidateProductEncoderResponse} from '../../../../../Contexts/Application/ProductsEncoder/application/Validator/ValidateProductEncoderResponse';

export class ProductEncoderGetController implements Controller {
  constructor(private queryBus: QueryBus) {
  }

  async run(req: Request, res: Response): Promise<void> {

    const name: string = req.body.name;
    const type: string = req.body.type;
    const group: string = req.body.group;
    const category: string = req.body.category;
    const brandCode: string = req.body.brandCode;
    const productSupplierCode: string = req.body.productSupplierCode;
    const skipSuggestions: boolean = req.body.skipSuggestions;


    try {
      const query = new ValidateProductEncoderQuery({
        name,
        type,
        group,
        category,
        brandCode,
        productSupplierCode,
        skipSuggestions
      });
      const historicalData = await this.queryBus.ask<ValidateProductEncoderResponse>(query);

      res.status(httpStatus.OK).send(historicalData.data);
    } catch (e) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        message: e.message
      });
    }
  }
}
