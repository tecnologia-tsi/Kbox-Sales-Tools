import {ValidateSellerEncoderResponse} from './ValidateSellerEncoderResponse';
import {ValidateSellerEncoderRequest} from './ValidateSellerEncoderRequest';
import {SellerEncoder} from '../../domain/SellerEncoder';
import {SellerEncoderSellerId} from '../../domain/SellerEncoderSellerId';
import {SellerEncoderCountry} from '../../domain/SellerEncoderCountry';
import {SellerEncoderSellerTypology} from '../../domain/SellerEncoderSellerTypology';
import {SellerEncoderCode} from '../../domain/SellerEncoderCode';
import {SellerEncoderName} from '../../domain/SellerEncoderName';
import {SellerEncoderTypeOfTaxIdentifier} from '../../domain/SellerEncoderTypeOfTaxIdentifier';
import {SellerEncoderTaxIdentifier} from '../../domain/SellerEncoderTaxIdentifier';
import {Uuid} from '../../../../Shared/domain/value-object/Uuid';
import { HttpSellerRepository } from '../../infrastructure/persistence/HttpSellerRepository';
import { SellerEncoderId } from '../../domain/SellerEncoderId';

export class SellerEncoderValidator {
  constructor() {
  }

  async run(request: ValidateSellerEncoderRequest) {

    const existSellers = await HttpSellerRepository();

    const sellerEncoder = new SellerEncoder(
      new SellerEncoderId(Uuid.random().value),
      new SellerEncoderName(request.name, request.skipSuggestions, existSellers),
      new SellerEncoderTypeOfTaxIdentifier(request.typeOfTaxIdentifier),
      new SellerEncoderTaxIdentifier(request.taxIdentifier, request.skipSuggestions, existSellers),
      new SellerEncoderCountry(request.country),
      new SellerEncoderSellerTypology(request.typology),
      new SellerEncoderSellerId(null),
      new SellerEncoderCode('')
    );
    sellerEncoder.createCode();

    return new ValidateSellerEncoderResponse(sellerEncoder);
  }
}
