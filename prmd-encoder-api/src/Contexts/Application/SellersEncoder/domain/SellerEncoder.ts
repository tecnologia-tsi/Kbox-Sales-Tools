import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {SellerEncoderCountry} from './SellerEncoderCountry';
import {SellerEncoderSellerTypology} from './SellerEncoderSellerTypology';
import {SellerEncoderSellerId} from './SellerEncoderSellerId';
import {SellerEncoderCode} from './SellerEncoderCode';
import {SellerEncoderName} from './SellerEncoderName';
import {SellerEncoderTypeOfTaxIdentifier} from './SellerEncoderTypeOfTaxIdentifier';
import {SellerEncoderTaxIdentifier} from './SellerEncoderTaxIdentifier';
import { SellerEncoderId } from './SellerEncoderId';

export class SellerEncoder extends AggregateRoot {
  private id: SellerEncoderId;
  private name: SellerEncoderName;
  private typeOfTaxIdentifier: SellerEncoderTypeOfTaxIdentifier;
  private taxIdentifier: SellerEncoderTaxIdentifier;
  private country: SellerEncoderCountry;
  private typology: SellerEncoderSellerTypology;
  private sellerId: SellerEncoderSellerId;
  private code: SellerEncoderCode;

  constructor(
    id: SellerEncoderId,
    name: SellerEncoderName,
    typeOfTaxIdentifier: SellerEncoderTypeOfTaxIdentifier,
    taxIdentifier: SellerEncoderTaxIdentifier,
    country: SellerEncoderCountry,
    typology: SellerEncoderSellerTypology,
    sellerId: SellerEncoderSellerId,
    code: SellerEncoderCode,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.typeOfTaxIdentifier = typeOfTaxIdentifier;
    this.taxIdentifier = taxIdentifier;
    this.country = country;
    this.typology = typology;
    this.sellerId = sellerId;
    this.code = code;
  }

  createCode() {
    this.code.value = `${this.country.value}-${this.typology.value}-${this.sellerId.value}`;
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      typeOfTaxIdentifier: this.typeOfTaxIdentifier.value,
      taxIdentifier: this.taxIdentifier.value,
      country: this.country.value,
      typology: this.typology.value,
      sellerId: this.sellerId.value,
      code: this.code.value,
    };
  }

  static fromPrimitives(data: {
    id: string,
    name: string,
    typeOfTaxIdentifier: string,
    taxIdentifier: string,
    skipSuggestions: boolean,
    country: string,
    typology: number,
    sellerId: string,
    code: string,
  }): SellerEncoder {
    return new SellerEncoder(
      new SellerEncoderId(data.id),
      new SellerEncoderName(data.name, data.skipSuggestions, []),
      new SellerEncoderTypeOfTaxIdentifier(data.typeOfTaxIdentifier),
      new SellerEncoderTaxIdentifier(data.taxIdentifier, data.skipSuggestions, []),
      new SellerEncoderCountry(data.country),
      new SellerEncoderSellerTypology(data.typology),
      new SellerEncoderSellerId(data.sellerId),
      new SellerEncoderCode(data.code)
    );
  }
}
