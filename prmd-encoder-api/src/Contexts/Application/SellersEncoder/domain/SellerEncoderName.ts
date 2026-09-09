import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { StandardFieldSimilar } from '../../Shared/domain/StandardFieldSimilar';
import { SellerEncoderRepository } from './SellerEncoderRepository';

export class SellerEncoderName {
  readonly value: string;
  readonly skip: boolean;
  readonly sellerEncoderRepository: SellerEncoderRepository;

  constructor(value: string, skip: boolean, existCustomers: Array<any>) {
    this.sellerEncoderRepository = new SellerEncoderRepository();
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
      throw new StandardFieldNotNull(`nombre del vendedor`);
    }
  }

  private searchName(value: string, skip: boolean, existCustomers: Array<any>): void {
    if (skip) {
      return;
    }

    const existingCustomers = this.sellerEncoderRepository.searchByCriteria('nombre', value, existCustomers);
    console.log(existingCustomers);
    if (existingCustomers?.length) {
      throw new StandardFieldSimilar('un vendedor con un nombre', existingCustomers[0].nombre);
    }
  }
}
