import {BrandEncoder} from '../../domain/BrandEncoder';

export class CreateBrandEncoderResponse {
  readonly data: any;

  constructor(data: BrandEncoder) {
    this.data = {
      encoderId: data.toPrimitives().id,
      brandCode: data.toPrimitives().code
    };
  }
}
