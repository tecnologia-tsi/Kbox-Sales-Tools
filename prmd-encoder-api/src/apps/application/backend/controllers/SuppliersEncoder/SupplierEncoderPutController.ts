import {Controller} from '../Controller';
import {Request, Response} from 'express';
import httpStatus = require('http-status');
import {QueryBus} from '../../../../../Contexts/Shared/domain/QueryBus';
import {CreateSupplierEncoderQuery} from '../../../../../Contexts/Application/SuppliersEncoder/application/Creator/CreateSupplierEncoderQuery';
import {CreateSupplierEncoderResponse} from '../../../../../Contexts/Application/SuppliersEncoder/application/Creator/CreateSupplierEncoderResponse';

export class SupplierEncoderPutController implements Controller {
  constructor(private queryBus: QueryBus) {
  }

  async run(req: Request, res: Response): Promise<void> {

    const name: string = req.body.name;
    const isGroup: boolean = req.body.isGroup;
    const typeOfTaxIdentifier: string = req.body.typeOfTaxIdentifier;
    const taxIdentifier: string = req.body.taxIdentifier;
    const skipSuggestions: boolean = req.body.skipSuggestions;
    const country: string = req.body.country;
    const typology: number = req.body.typology;
    const ambit: string = req.body.ambit;

    try {
      const query = new CreateSupplierEncoderQuery({
        name,
        isGroup,
        typeOfTaxIdentifier,
        taxIdentifier,
        skipSuggestions,
        country,
        typology,
        ambit
      });
      const historicalData = await this.queryBus.ask<CreateSupplierEncoderResponse>(query);

      res.status(httpStatus.OK).send(historicalData.data);
    } catch (e) {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        message: e.message
      });
    }
  }
}
