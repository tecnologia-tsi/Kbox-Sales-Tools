import {SellerEncoder} from '../../domain/SellerEncoder';

export class CreateSellerEncoderResponse {
  readonly data: any;

  constructor(data: SellerEncoder) {
    this.data = {
      encoderId: data.toPrimitives().id,
      sellerCode: data.toPrimitives().code
    };
  }
}
