import {ValidateProductEncoderResponse} from './ValidateProductEncoderResponse';
import {ValidateProductEncoderRequest} from './ValidateProductEncoderRequest';
import {ProductEncoder} from '../../domain/ProductEncoder';
import {ProductEncoderProductId} from '../../domain/ProductEncoderProductId';
import {ProductEncoderCode} from '../../domain/ProductEncoderCode';
import {ProductEncoderName} from '../../domain/ProductEncoderName';
import {ProductEncoderType} from '../../domain/ProductEncoderType';
import {ProductEncoderSpecialty} from '../../domain/ProductEncoderSpecialty';
import {ProductEncoderBrandCode} from '../../domain/ProductEncoderBrandCode';
import { ProductEncoderId } from '../../domain/ProductEncoderId';
import { Uuid } from '../../../../Shared/domain/value-object/Uuid';
import { ProductEncoderRepository } from '../../domain/ProductEncoderRepository';
import { PromedApiError } from '../../../Shared/domain/PromedApiError';

export class ProductEncoderValidator {
  readonly productEncoderRepository: ProductEncoderRepository;

  constructor() {
    this.productEncoderRepository = new ProductEncoderRepository();
  }

  async run(request: ValidateProductEncoderRequest) {
    const existProducts = await this.productEncoderRepository.searchAll();

    if (!existProducts.length) {
      throw new PromedApiError();
    }

    const productEncoder = new ProductEncoder(
      new ProductEncoderId(Uuid.random().value),
      new ProductEncoderName(request.name, request.skipSuggestions, existProducts),
      new ProductEncoderType(request.type),
      new ProductEncoderSpecialty(request.group, request.category),
      new ProductEncoderBrandCode(request.brandCode),
      new ProductEncoderProductId(request.productSupplierCode, request.brandCode, existProducts),
      new ProductEncoderCode('')
    );
    productEncoder.createCode();

    return new ValidateProductEncoderResponse(productEncoder);
  }
}
