import { StandardFieldNotNull } from '../../../Application/Shared/domain/StandardFieldNotNull';
import { CountryNotValid } from '../../../Application/Shared/domain/Countries/CountryNotValid';
import { CountryRepository } from '../../../Application/Shared/domain/Countries/CountryRepository';

export abstract class CountryValueObject {
  value: string;
  repository: CountryRepository;

  constructor(value: string) {
    this.repository = new CountryRepository();
    this.value = value;
    this.ensureNotNull(value);
    this.ensureTheValueIsCorrect(this.sanity(value));
  }

  toString(): string {
    return this.value;
  }

  sanity(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    return value.replace(/[\#|\*|\.|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }

  ensureNotNull(value: string): void {
    if (!value) {
      throw new StandardFieldNotNull(`pais`);
    }
  }

  ensureTheValueIsCorrect(value: string): void {
    const country = this.repository.search(value);
    if (!country) {
      throw new CountryNotValid();
    }
    this.value = country;
  }
}
