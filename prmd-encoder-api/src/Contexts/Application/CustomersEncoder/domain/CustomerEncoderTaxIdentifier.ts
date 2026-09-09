import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { StandardFieldSimilar } from '../../Shared/domain/StandardFieldSimilar';
import { CustomerEncoderRepository } from './CustomerEncoderRepository';

export class CustomerEncoderTaxIdentifier extends StringValueObject {
  readonly customerEncoderRepository: CustomerEncoderRepository;
  readonly skip: boolean;

  constructor(value: string, skip: boolean, existCustomers: Array<any>) {
    super(value);
    this.customerEncoderRepository = new CustomerEncoderRepository();
    this.value = value;
    this.skip = skip;
    this.ensureNotNull(value);
    this.searchTaxId(value, skip, existCustomers);
  }

  private ensureNotNull(value: string): void {
    if (!value) {
      throw new StandardFieldNotNull('identificador fiscal');
    }
  }

  private searchTaxId(value: string, skip: boolean, existCustomers: Array<any>): void {
    if (skip) {
      return;
    }

    const existingCustomers = this.customerEncoderRepository.searchByCriteria('identificador_fiscal', this.sanityName(value), existCustomers);

    if (existingCustomers.length) {
      throw new StandardFieldSimilar('un cliente con un identificador fiscal', existingCustomers[0].nombre);
    }
  }

  private sanityName(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    return value.replace(/[\#|\*|\|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }

}
