import {SellerEncoder} from '../../domain/SellerEncoder';

export class ValidateSellerEncoderResponse {
  readonly data: any;

  constructor(data: SellerEncoder) {
    this.data = {
      encoderId: data.toPrimitives().id,
      status: 'success'
    };
  }
}
