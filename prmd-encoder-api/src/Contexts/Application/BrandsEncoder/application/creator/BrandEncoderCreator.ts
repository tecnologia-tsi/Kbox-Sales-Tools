import {CreateBrandEncoderResponse} from './CreateBrandEncoderResponse';
import {CreateBrandEncoderRequest} from './CreateBrandEncoderRequest';
import {BrandEncoder} from '../../domain/BrandEncoder';
import {BrandEncoderBrandId} from '../../domain/BrandEncoderBrandId';
import {BrandEncoderCode} from '../../domain/BrandEncoderCode';
import {BrandEncoderName} from '../../domain/BrandEncoderName';
import {BrandEncoderSkipSuggestions} from '../../domain/BrandEncoderSkipSuggestions';
import {BrandEncoderAliases} from '../../domain/BrandEncoderAliases';
import {Uuid} from '../../../../Shared/domain/value-object/Uuid';
import { HttpBrandRepository } from '../../infrastructure/persistence/HttpBrandRepository';
import { BrandSecuentialIncrementer } from '../../../Shared/domain/BrandsEncoder/BrandsSecuential';
import { BrandEncoderId } from '../../domain/BrandEncoderId';
import { PromedApiError } from '../../../Shared/domain/PromedApiError';

export class BrandEncoderCreator {
  constructor() {
  }

  async run(request: CreateBrandEncoderRequest) {

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

    BrandSecuentialIncrementer();

    return new CreateBrandEncoderResponse(brandEncoder);
  }
}
