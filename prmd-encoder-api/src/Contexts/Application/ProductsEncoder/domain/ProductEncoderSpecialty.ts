import { StandardFieldNotNull } from '../../Shared/domain/StandardFieldNotNull';

export class ProductEncoderSpecialty {
  readonly type: string;
  readonly category: string;
  value: string | undefined;

  constructor(type: string, category: string) {
    this.type = type;
    this.category = category;
    this.ensureNotNull(type, category, 'clase y especialidad');
    this.ensureTheValueIsCorrect(type, category);
    this.generate();
  }

  private ensureNotNull(
    type: string,
    category: string,
    message: string): void {
    if (!type || !category) {
      throw new StandardFieldNotNull(message);
    }
  }

  private ensureTheValueIsCorrect(type: string, category: string): void {
    // Pendiente de las opciones segun PROMED
    /*this.repository.search(value);*/
  }

  private generate(): void {
    this.value = `${this.type.substr(0, 3).toUpperCase()}${this.category.substr(0, 3).toUpperCase()}`;
  }
}

