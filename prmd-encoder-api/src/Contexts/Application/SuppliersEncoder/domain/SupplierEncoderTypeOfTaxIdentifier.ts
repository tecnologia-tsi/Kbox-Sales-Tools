import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';

export class SupplierEncoderTypeOfTaxIdentifier extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureNotNull(value);
  }
  private ensureNotNull(value: string): void {
    if (!value) {
      throw new StandardFieldNotNull('tipo de identificador fiscal');
    }
  }
}
