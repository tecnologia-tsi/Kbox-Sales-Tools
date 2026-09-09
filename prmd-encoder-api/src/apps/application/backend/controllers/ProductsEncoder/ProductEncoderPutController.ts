import {Controller} from '../Controller';
import {Request, Response} from 'express';
import httpStatus = require('http-status');
import {QueryBus} from '../../../../../Contexts/Shared/domain/QueryBus';
import {CreateProductEncoderQuery} from '../../../../../Contexts/Application/ProductsEncoder/application/Creator/CreateProductEncoderQuery';
import {CreateProductEncoderResponse} from '../../../../../Contexts/Application/ProductsEncoder/application/Creator/CreateProductEncoderResponse';

export class ProductEncoderPutController implements Controller {
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
      const query = new CreateProductEncoderQuery({
        name,
        type,
        group,
        category,
        brandCode,
        productSupplierCode,
        skipSuggestions
      });
      const historicalData = await this.queryBus.ask<CreateProductEncoderResponse>(query);

      res.status(httpStatus.OK).send(historicalData.data);
    } catch (e) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        message: e.message
      });
    }
  }
}
