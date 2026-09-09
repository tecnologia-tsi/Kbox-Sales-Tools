import {SupplierEncoder} from '../../domain/SupplierEncoder';

export class CreateSupplierEncoderResponse {
  readonly data: any;

  constructor(data: SupplierEncoder) {
    this.data = {
      encoderId: data.toPrimitives().id,
      supplierCode: data.toPrimitives().code
    };
  }
}
