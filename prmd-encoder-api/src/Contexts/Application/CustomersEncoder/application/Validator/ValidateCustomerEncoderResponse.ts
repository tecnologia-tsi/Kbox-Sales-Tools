import {CustomerEncoder} from '../../domain/CustomerEncoder';

export class ValidateCustomerEncoderResponse {
  readonly data: any;

  constructor(data: CustomerEncoder) {
    this.data = {
      encoderId: data.toPrimitives().id,
      status: 'success'
    };
  }
}
