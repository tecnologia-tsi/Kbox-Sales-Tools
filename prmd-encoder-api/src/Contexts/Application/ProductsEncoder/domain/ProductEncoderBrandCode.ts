import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';

export class ProductEncoderBrandCode extends StringValueObject {

  constructor(value: string) {
    super(value);
    this.value = value;
    this.ensureNotNull(value);
  }

  private ensureNotNull(value: string): void {
    if (!value) {
      throw new StandardFieldNotNull('código del marca');
    }
  }
}
