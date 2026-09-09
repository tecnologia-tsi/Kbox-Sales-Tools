import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';
import { ProductTypologyRepository } from '../../Shared/domain/ProductEncoder/ProductTypologyRepository';


export class ProductEncoderType extends StringValueObject {
  readonly repository: ProductTypologyRepository;

  constructor(value: string) {
    super(value);
    this.repository = new ProductTypologyRepository();
    this.ensureNotNull(value);
    this.ensureTheValueIsCorrect(value);
    this.value = this.generateValueSimplified(value);
  }

  private ensureNotNull(value: string): void {
    if (!value) {
      throw new StandardFieldNotNull('tipología de producto');
    }
  }

  private ensureTheValueIsCorrect(value: string): void {
    this.repository.search(value);
  }

  private generateValueSimplified(value: string): string {
    return this.repository.save(value);
  }
}
