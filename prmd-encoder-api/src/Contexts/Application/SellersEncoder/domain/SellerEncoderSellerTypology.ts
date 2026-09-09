import { NumberValueObject } from '../../../Shared/domain/value-object/IntValueObject';
import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { SellerTypologyRepository } from '../../Shared/domain/SellerEncoder/SellerTypologyRepository';

export class SellerEncoderSellerTypology extends NumberValueObject {
  readonly repository: SellerTypologyRepository;

  constructor(value: number) {
    super(value);
    this.repository = new SellerTypologyRepository();
    this.ensureNotNull(value);
    this.ensureTheValueIsCorrect(value);
  }

  private ensureNotNull(value: number): void {
    if (!value) {
      throw new StandardFieldNotNull('tipología de vendedores');
    }
  }

  private ensureTheValueIsCorrect(value: number): void {
    this.repository.search(value);
  }
}

