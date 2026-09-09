import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { ProductEncoderRepository } from './ProductEncoderRepository';
import { StandardFieldSimilar } from '../../Shared/domain/StandardFieldSimilar';

export class ProductEncoderName {
  readonly value: string;
  readonly skip: boolean;
  readonly productEncoderRepository: ProductEncoderRepository;

  constructor(value: string, skip: boolean, existProducts: Array<any>) {
    this.productEncoderRepository = new ProductEncoderRepository();
    this.skip = skip;
    this.value = this.sanityName(value);
    this.ensureNotNull(this.sanityName(value));
    this.searchName(this.sanityName(value), skip, existProducts);
  }

  private sanityName(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    return value.replace(/[\#|\*|\|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }

  private ensureNotNull(value: string): void {
    if (!value) {
      throw new StandardFieldNotNull(`nombre del producto`);
    }
  }

  private searchName(value: string, skip: boolean, existProducts: Array<any>): void {
    if (skip) {
      return;
    }

    const existingProducts = this.productEncoderRepository.searchByCriteria('descripcion', value, existProducts);

    if (existingProducts?.length) {
      throw new StandardFieldSimilar(`un producto con número de articulo ${existingProducts[0].no_arti} que tiene un nombre`, existingProducts[0].descripcion);
    }
  }
}
