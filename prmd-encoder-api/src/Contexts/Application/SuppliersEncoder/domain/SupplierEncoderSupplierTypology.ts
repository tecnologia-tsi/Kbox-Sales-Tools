import {NumberValueObject} from '../../../Shared/domain/value-object/IntValueObject';

const SUPPLIER__TYPOLOGIES = [110, 120, 130, 140, 210, 220];

export class SupplierEncoderSupplierTypology extends NumberValueObject {
  constructor(value: number) {
    super(value);
    this.ensureNotNull(value);
    this.ensureTheValueIsCorrect(value);
  }

  private ensureNotNull(value: number): void {
    if (!value) {
      throw new CustomerEncoderTypologyNotExist();
    }
  }

  private ensureTheValueIsCorrect(value: number): void {
    if (!SUPPLIER__TYPOLOGIES.includes(value)) {
      throw new Error();
    }
  }
}

class CustomerEncoderTypologyNotExist extends Error {
  constructor() {
    super('El campo de la tipología de cliente es obligatorio');
  }
}
