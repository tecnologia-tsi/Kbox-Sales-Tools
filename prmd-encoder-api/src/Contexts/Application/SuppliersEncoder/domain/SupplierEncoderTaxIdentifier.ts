import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { StandardFieldSimilar } from '../../Shared/domain/StandardFieldSimilar';
import { SupplierEncoderRepository } from './SupplierEncoderRepository';

export class SupplierEncoderTaxIdentifier extends StringValueObject {
  readonly supplierEncoderRepository: SupplierEncoderRepository;
  readonly skip: boolean;

  constructor(value: string, skip: boolean, existCustomers: Array<any>) {
    super(value);
    this.supplierEncoderRepository = new SupplierEncoderRepository();
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

    const existingCustomers = this.supplierEncoderRepository.searchByCriteria('identificador_fiscal', this.sanityName(value), existCustomers);

    if (existingCustomers.length) {
      throw new StandardFieldSimilar('un proveedor con un identificador fiscal', existingCustomers[0].nombre);
    }
  }

  private sanityName(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    return value.replace(/[\#|\*|\|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }

}
