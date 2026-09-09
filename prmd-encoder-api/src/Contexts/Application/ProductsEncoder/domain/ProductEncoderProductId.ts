import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { StandardFieldSimilar } from '../../Shared/domain/StandardFieldSimilar';
import { ProductEncoderRepository } from './ProductEncoderRepository';

export class ProductEncoderProductId {
  value: string;
  readonly brandCode: string;
  readonly productEncoderRepository: ProductEncoderRepository;

  constructor(value: string, brandCode: string, existProducts: Array<any>) {
    this.productEncoderRepository = new ProductEncoderRepository();
    this.value = value;
    this.brandCode = brandCode;
    this.ensureNotNull();
    this.searchProduct(existProducts);
    this.idCreator();
  }

  private idCreator() {
    const zero = '0';
    this.value = 'NP' + `${zero.repeat(18 - this.value.length )}${this.value}`;
  }

  private ensureNotNull(): void {
    if (!this.value) {
      throw new StandardFieldNotNull(`código de producto del proveedor`);
    }
  }

  private searchProduct(existProducts: Array<any>) {

    const existingProducts = this.productEncoderRepository.searchByTwoCriteria('no_arti', this.value, 'marca_art', this.brandCode, existProducts);

    if (existingProducts?.length) {
      throw new StandardFieldSimilar(`un producto de la misma marca ${existingProducts[0].marca_art} con número de articulo`, existingProducts[0].no_arti);
    }

  }
}
