import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { CustomerEncoderRepository } from './CustomerEncoderRepository';
import { StandardFieldSimilar } from '../../Shared/domain/StandardFieldSimilar';

export class CustomerEncoderName {
  readonly value: string;
  readonly skip: boolean;
  readonly customerEncoderRepository: CustomerEncoderRepository;

  constructor(value: string, skip: boolean, existCustomers: Array<any>) {
    this.customerEncoderRepository = new CustomerEncoderRepository();
    this.skip = skip;
    this.value = this.sanityName(value);
    this.ensureNotNull(this.sanityName(value));
    this.searchName(this.sanityName(value), skip, existCustomers);
  }

  private sanityName(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    return value.replace(/[\#|\*|\|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }

  private ensureNotNull(value: string): void {
    if (!value) {
      throw new StandardFieldNotNull(`nombre del cliente`);
    }
  }

  private searchName(value: string, skip: boolean, existCustomers: Array<any>): void {
    if (skip) {
      return;
    }

    const existingCustomers = this.customerEncoderRepository.searchByCriteria('nombre', value, existCustomers);

    if (existingCustomers?.length) {
      throw new StandardFieldSimilar('un cliente con un nombre', existingCustomers[0].nombre);
    }
  }
}
