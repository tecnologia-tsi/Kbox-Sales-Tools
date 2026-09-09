import {StringValueObject} from '../../../Shared/domain/value-object/StringValueObject';
import {COUNTRIES} from '../../Shared/infrastructure/CountriesIso366';

export class SellerEncoderCountry extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.value = value;
    this.ensureNotNull(value);
    this.ensureTheValueIsCorrect(this.sanity(value));
  }

  private ensureNotNull(value: string): void {
    if (!value) {
      throw new SellerEncoderCountryNotExist();
    }
  }


  private ensureTheValueIsCorrect(value: string): void {
    const country = COUNTRIES.filter((Country: any) =>
      Country.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()
      ));
    if (!country.length) {
      throw new SellerEncoderCountryNotValid();
    }
    this.value = country[0]['alpha-3'];
  }
}

class SellerEncoderCountryNotExist extends Error {
  constructor() {
    super('El campo del país del cliente es obligatorio');
  }
}

class SellerEncoderCountryNotValid extends Error {
  constructor() {
    super('Introduce el nombre del país correcto según la ISO-366-1');
  }
}


