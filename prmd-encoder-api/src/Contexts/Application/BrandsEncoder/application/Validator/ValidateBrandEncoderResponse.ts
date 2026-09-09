import {BrandEncoder} from '../../domain/BrandEncoder';

export class ValidateBrandEncoderResponse {
  readonly data: any;

  constructor(data: BrandEncoder) {
    this.data = {
      encoderId: data.toPrimitives().id,
      status: 'success'
    };
  }
}
