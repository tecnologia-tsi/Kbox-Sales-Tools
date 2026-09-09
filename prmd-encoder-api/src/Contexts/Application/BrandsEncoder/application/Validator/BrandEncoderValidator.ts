import {ValidateBrandEncoderResponse} from './ValidateBrandEncoderResponse';
import {ValidateBrandEncoderRequest} from './ValidateBrandEncoderRequest';
import {BrandEncoder} from '../../domain/BrandEncoder';
import {BrandEncoderBrandId} from '../../domain/BrandEncoderBrandId';
import {BrandEncoderCode} from '../../domain/BrandEncoderCode';
import {BrandEncoderName} from '../../domain/BrandEncoderName';
import {BrandEncoderSkipSuggestions} from '../../domain/BrandEncoderSkipSuggestions';
import {BrandEncoderAliases} from '../../domain/BrandEncoderAliases';
import {Uuid} from '../../../../Shared/domain/value-object/Uuid';
import { HttpBrandRepository } from '../../infrastructure/persistence/HttpBrandRepository';
import { BrandEncoderId } from '../../domain/BrandEncoderId';
import { PromedApiError } from '../../../Shared/domain/PromedApiError';

export class BrandEncoderValidator {
  constructor() {
  }

  async run(request: ValidateBrandEncoderRequest) {

    const existBrands = await HttpBrandRepository();

    if (!existBrands.length) {
      throw new PromedApiError();
    }

    const brandEncoder = new BrandEncoder(
      new BrandEncoderBrandId(Uuid.random().value),
      new BrandEncoderName(request.name, request.skipSuggestions, existBrands),
      new BrandEncoderSkipSuggestions(request.skipSuggestions),
      new BrandEncoderId(null),
      new BrandEncoderAliases(request.name),
      new BrandEncoderCode('')
    );
    brandEncoder.createCode();

    return new ValidateBrandEncoderResponse(brandEncoder);
  }
}
