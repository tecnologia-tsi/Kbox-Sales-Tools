import {CustomerEncoder} from '../../domain/CustomerEncoder';

export class CreateCustomerEncoderResponse {
  readonly data: any;

  constructor(data: CustomerEncoder) {
    this.data = {
      encoderId: data.toPrimitives().id,
      customerCode: data.toPrimitives().code
    };
  }
}
