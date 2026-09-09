import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {SupplierEncoderCountry} from './SupplierEncoderCountry';
import {SupplierEncoderSupplierAmbit} from './SupplierEncoderSupplierAmbit';
import {SupplierEncoderSupplierTypology} from './SupplierEncoderSupplierTypology';
import {SupplierEncoderSupplierId} from './SupplierEncoderSupplierId';
import {SupplierEncoderCode} from './SupplierEncoderCode';
import {SupplierEncoderName} from './SupplierEncoderName';
import {SupplierEncoderIsGroup} from './SupplierEncoderIsGroup';
import {SupplierEncoderTypeOfTaxIdentifier} from './SupplierEncoderTypeOfTaxIdentifier';
import {SupplierEncoderTaxIdentifier} from './SupplierEncoderTaxIdentifier';
import {SupplierEncoderSkipSuggestions} from './SupplierEncoderSkipSuggestions';
import { SupplierEncoderId } from './SupplierEncoderId';

export class SupplierEncoder extends AggregateRoot {
  private id: SupplierEncoderId;
  private name: SupplierEncoderName;
  private isGroup: SupplierEncoderIsGroup;
  private typeOfTaxIdentifier: SupplierEncoderTypeOfTaxIdentifier;
  private taxIdentifier: SupplierEncoderTaxIdentifier;
  private skipSuggestions: SupplierEncoderSkipSuggestions;
  private country: SupplierEncoderCountry;
  private typology: SupplierEncoderSupplierTypology;
  private ambit: SupplierEncoderSupplierAmbit;
  private cuppliersId: SupplierEncoderSupplierId;
  private code: SupplierEncoderCode;

  constructor(
    id: SupplierEncoderId,
    name: SupplierEncoderName,
    isGroup: SupplierEncoderIsGroup,
    typeOfTaxIdentifier: SupplierEncoderTypeOfTaxIdentifier,
    taxIdentifier: SupplierEncoderTaxIdentifier,
    skipSuggestions: SupplierEncoderSkipSuggestions,
    country: SupplierEncoderCountry,
    typology: SupplierEncoderSupplierTypology,
    ambit: SupplierEncoderSupplierAmbit,
    cuppliersId: SupplierEncoderSupplierId,
    code: SupplierEncoderCode,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.isGroup = isGroup;
    this.typeOfTaxIdentifier = typeOfTaxIdentifier;
    this.taxIdentifier = taxIdentifier;
    this.skipSuggestions = skipSuggestions;
    this.country = country;
    this.typology = typology;
    this.ambit = ambit;
    this.cuppliersId = cuppliersId;
    this.code = code;
  }

  createCode() {
    this.code.value = `${this.country.value}-${this.typology.value}-${this.ambit.value}-${this.cuppliersId.value}`;
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      isGroup: this.isGroup.value,
      typeOfTaxIdentifier: this.typeOfTaxIdentifier.value,
      taxIdentifier: this.taxIdentifier.value,
      skipSuggestions: this.skipSuggestions.value,
      country: this.country.value,
      typology: this.typology.value,
      ambit: this.ambit.value,
      cuppliersId: this.cuppliersId.value,
      code: this.code.value,
    };
  }

  static fromPrimitives(data: {
    id: string,
    name: string,
    isGroup: boolean,
    typeOfTaxIdentifier: string,
    taxIdentifier: string,
    skipSuggestions: boolean,
    country: string,
    typology: number,
    ambit: string,
    cuppliersId: string,
    code: string,
  }): SupplierEncoder {
    return new SupplierEncoder(
      new SupplierEncoderId(data.id),
      new SupplierEncoderName(data.name, data.skipSuggestions, []),
      new SupplierEncoderIsGroup(data.isGroup),
      new SupplierEncoderTypeOfTaxIdentifier(data.typeOfTaxIdentifier),
      new SupplierEncoderTaxIdentifier(data.taxIdentifier, data.skipSuggestions, []),
      new SupplierEncoderSkipSuggestions(data.skipSuggestions),
      new SupplierEncoderCountry(data.country),
      new SupplierEncoderSupplierTypology(data.typology),
      new SupplierEncoderSupplierAmbit(data.ambit),
      new SupplierEncoderSupplierId(data.cuppliersId),
      new SupplierEncoderCode(data.code)
    );
  }
}
