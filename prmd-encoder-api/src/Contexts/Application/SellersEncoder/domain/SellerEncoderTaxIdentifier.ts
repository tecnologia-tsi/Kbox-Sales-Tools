import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { StandardFieldSimilar } from '../../Shared/domain/StandardFieldSimilar';
import { SellerEncoderRepository } from './SellerEncoderRepository';

export class SellerEncoderTaxIdentifier extends StringValueObject {
  readonly customerEncoderRepository: SellerEncoderRepository;
  readonly skip: boolean;

  constructor(value: string, skip: boolean, existSellers: Array<any>) {
    super(value);
    this.customerEncoderRepository = new SellerEncoderRepository();
    this.value = value;
    this.skip = skip;
    this.ensureNotNull(value);
    this.searchTaxId(value, skip, existSellers);
  }

  private ensureNotNull(value: string): void {
    if (!value) {
      throw new StandardFieldNotNull('identificador fiscal');
    }
  }

  private searchTaxId(value: string, skip: boolean, existSellers: Array<any>): void {
    if (skip) {
      return;
    }

    const existingSellers = this.customerEncoderRepository.searchByCriteria('identificador_fiscal', this.sanityName(value), existSellers);

    if (existingSellers.length) {
      throw new StandardFieldSimilar('un vendedor con un identificador fiscal', existingSellers[0].nombre);
    }
  }

  private sanityName(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    return value.replace(/[\#|\*|\|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }

}
