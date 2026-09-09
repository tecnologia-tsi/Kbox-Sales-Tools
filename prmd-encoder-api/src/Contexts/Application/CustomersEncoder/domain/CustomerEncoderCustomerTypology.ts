import { NumberValueObject } from '../../../Shared/domain/value-object/IntValueObject';
import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { CustomerTypologyRepository } from '../../Shared/domain/CustomersEncoder/CustomerTypologyRepository';

export class CustomerEncoderCustomerTypology extends NumberValueObject {
  readonly repository: CustomerTypologyRepository;

  constructor(value: number) {
    super(value);
    this.repository = new CustomerTypologyRepository();
    this.ensureNotNull(value);
    this.ensureTheValueIsCorrect(value);
  }

  private ensureNotNull(value: number): void {
    if (!value) {
      throw new StandardFieldNotNull('tipología de cliente');
    }
  }

  private ensureTheValueIsCorrect(value: number): void {
    this.repository.search(value);
  }
}
