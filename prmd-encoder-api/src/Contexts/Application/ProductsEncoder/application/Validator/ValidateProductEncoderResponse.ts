import { ProductEncoder } from '../../domain/ProductEncoder';

export class ValidateProductEncoderResponse {
  readonly data: any;

  constructor(data: ProductEncoder) {
    this.data = {
      encoderId: data.toPrimitives().id,
      status: 'success'
    };
  }
}
