import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { StandardFieldSimilar } from '../../Shared/domain/StandardFieldSimilar';
import { SupplierEncoderRepository } from './SupplierEncoderRepository';

export class SupplierEncoderName {
  readonly value: string;
  readonly skip: boolean;
  readonly supplierEncoderRepository: SupplierEncoderRepository;

  constructor(value: string, skip: boolean, existSuppliers: Array<any>) {
    this.supplierEncoderRepository = new SupplierEncoderRepository();
    this.skip = skip;
    this.value = this.sanityName(value);
    this.ensureNotNull(this.sanityName(value));
    this.searchName(this.sanityName(value), skip, existSuppliers);
  }

  private sanityName(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    return value.replace(/[\#|\*|\|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }

  private ensureNotNull(value: string): void {
    if (!value) {
      throw new StandardFieldNotNull(`nombre del proveedor`);
    }
  }

  private searchName(value: string, skip: boolean, existSuppliers: Array<any>): void {
    if (skip) {
      return;
    }

    const existingSuppliers = this.supplierEncoderRepository.searchByCriteria('nombre', value, existSuppliers);

    if (existingSuppliers.length) {
      throw new StandardFieldSimilar('un proveedor con un nombre', existingSuppliers[0].nombre);
    }
  }
}
