import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { BrandEncoderRepository } from './BrandEncoderRepository';
import { StandardFieldSimilar } from '../../Shared/domain/StandardFieldSimilar';

export class BrandEncoderName {
  readonly value: string;
  readonly skip: boolean;
  readonly brandEncoderRepository: BrandEncoderRepository;

  constructor(value: string, skip: boolean, existBrands: Array<any>) {
    this.brandEncoderRepository = new BrandEncoderRepository();
    this.skip = skip;
    this.value = this.sanityName(value);
    this.ensureNotNull(this.sanityName(value));
    this.searchName(this.sanityName(value), skip, existBrands);
  }

  private sanityName(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    value = value.replace(/\s/g, '');
    return value.replace(/[\#|\*|\|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }

  private ensureNotNull(value: string): void {
    if (!value) {
      throw new StandardFieldNotNull(`nombre de la marca`);
    }
  }

  private searchName(value: string, skip: boolean, existBrands: Array<any>): void {
    if (skip) {
      return;
    }

    const existingBrands = this.brandEncoderRepository.searchByCriteria('descripcion', value, existBrands);

    if (existingBrands?.length) {
      throw new StandardFieldSimilar('una marca con nombre', existingBrands[0].descripcion);
    }
  }
}
