import { CreateSupplierEncoderResponse } from './CreateSupplierEncoderResponse';
import { CreateSupplierEncoderRequest } from './CreateSupplierEncoderRequest';
import { SupplierEncoder } from '../../domain/SupplierEncoder';
import { SupplierEncoderSupplierId } from '../../domain/SupplierEncoderSupplierId';
import { SupplierEncoderCountry } from '../../domain/SupplierEncoderCountry';
import { SupplierEncoderSupplierAmbit } from '../../domain/SupplierEncoderSupplierAmbit';
import { SupplierEncoderSupplierTypology } from '../../domain/SupplierEncoderSupplierTypology';
import { SupplierEncoderCode } from '../../domain/SupplierEncoderCode';
import { SupplierEncoderName } from '../../domain/SupplierEncoderName';
import { SupplierEncoderIsGroup } from '../../domain/SupplierEncoderIsGroup';
import { SupplierEncoderTypeOfTaxIdentifier } from '../../domain/SupplierEncoderTypeOfTaxIdentifier';
import { SupplierEncoderTaxIdentifier } from '../../domain/SupplierEncoderTaxIdentifier';
import { SupplierEncoderSkipSuggestions } from '../../domain/SupplierEncoderSkipSuggestions';
import { Uuid } from '../../../../Shared/domain/value-object/Uuid';
import { SupplierEncoderId } from '../../domain/SupplierEncoderId';
import { SuppliersSecuentialIncrementer } from '../../../Shared/domain/SuppliersEncoder/SuppliersSecuential';
import { HttpSupplierRepository } from '../../infrastructure/persistence/HttpSupplierRepository';
import { PromedApiError } from '../../../Shared/domain/PromedApiError';

export class SupplierEncoderCreator {
  constructor() {
  }

  async run(request: CreateSupplierEncoderRequest) {

    const existSuppliers = await HttpSupplierRepository();

    if (!existSuppliers.length) {
      throw new PromedApiError();
    }

    const cuppliersEncoder = new SupplierEncoder(
      new SupplierEncoderId(Uuid.random().value),
      new SupplierEncoderName(request.name, request.skipSuggestions, existSuppliers),
      new SupplierEncoderIsGroup(request.isGroup),
      new SupplierEncoderTypeOfTaxIdentifier(request.typeOfTaxIdentifier),
      new SupplierEncoderTaxIdentifier(request.taxIdentifier, request.skipSuggestions, existSuppliers),
      new SupplierEncoderSkipSuggestions(request.skipSuggestions),
      new SupplierEncoderCountry(request.country),
      new SupplierEncoderSupplierTypology(request.typology),
      new SupplierEncoderSupplierAmbit(request.ambit),
      new SupplierEncoderSupplierId(null),
      new SupplierEncoderCode('')
    );
    cuppliersEncoder.createCode();

    SuppliersSecuentialIncrementer();

    return new CreateSupplierEncoderResponse(cuppliersEncoder);
  }
}
