import {Controller} from '../Controller';
import {Request, Response} from 'express';
import httpStatus = require('http-status');
import {QueryBus} from '../../../../../Contexts/Shared/domain/QueryBus';
import {ValidateSellerEncoderQuery} from '../../../../../Contexts/Application/SellersEncoder/application/Validator/ValidateSellerEncoderQuery';
import {ValidateSellerEncoderResponse} from '../../../../../Contexts/Application/SellersEncoder/application/Validator/ValidateSellerEncoderResponse';

export class SellerEncoderGetController implements Controller {
  constructor(private queryBus: QueryBus) {
  }

  async run(req: Request, res: Response): Promise<void> {

    const name: string = req.body.name;
    const typeOfTaxIdentifier: string = req.body.typeOfTaxIdentifier;
    const taxIdentifier: string = req.body.taxIdentifier;
    const skipSuggestions: boolean = req.body.skipSuggestions;
    const country: string = req.body.country;
    const typology: number = req.body.typology;

    try {
      const query = new ValidateSellerEncoderQuery({
        name,
        typeOfTaxIdentifier,
        taxIdentifier,
        skipSuggestions,
        country,
        typology,
      });
      const historicalData = await this.queryBus.ask<ValidateSellerEncoderResponse>(query);

      res.status(httpStatus.OK).send(historicalData.data);
    } catch (e) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        message: e.message
      });
    }
  }
}
