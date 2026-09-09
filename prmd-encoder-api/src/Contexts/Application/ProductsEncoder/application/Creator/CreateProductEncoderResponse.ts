import {ProductEncoder} from '../../domain/ProductEncoder';

export class CreateProductEncoderResponse {
  readonly data: any;

  constructor(data: ProductEncoder) {
    this.data = {
      encoderId: data.toPrimitives().id,
      productCode: data.toPrimitives().code
    };
  }
}
