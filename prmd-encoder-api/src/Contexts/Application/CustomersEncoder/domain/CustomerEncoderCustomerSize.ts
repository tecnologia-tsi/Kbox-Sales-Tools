import { CustomerSizeRepository } from '../../Shared/domain/CustomersEncoder/CustomerSizeRepository';

export class CustomerEncoderCustomerSize {
  value: number | string | null;
  readonly repository: CustomerSizeRepository;

  constructor(value: number | null) {
    this.value = value;
    this.repository = new CustomerSizeRepository();
    this.ensureTheValueIsCorrect(value);
    this.ifNotExistAddPredefinedValue(value);
  }

  private ensureTheValueIsCorrect(value: number | null): void {
    this.repository.search(value);
  }

  private ifNotExistAddPredefinedValue(value: number | string | null): void {
    if (!value) {
      this.value = 'X';
    }
  }
}
