import {SupplierEncoder} from '../../domain/SupplierEncoder';

export class ValidateSupplierEncoderResponse {
  readonly data: any;

  constructor(data: SupplierEncoder) {
    this.data = {
      encoderId: data.toPrimitives().id,
      status: 'success'
    };
  }
}
