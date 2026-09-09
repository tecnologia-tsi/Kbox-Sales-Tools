import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {CustomerEncoderCountry} from './CustomerEncoderCountry';
import {CustomerEncoderCustomerSize} from './CustomerEncoderCustomerSize';
import {CustomerEncoderCustomerTypology} from './CustomerEncoderCustomerTypology';
import {CustomerEncoderCustomerId} from './CustomerEncoderCustomerId';
import {CustomerEncoderCode} from './CustomerEncoderCode';
import {CustomerEncoderName} from './CustomerEncoderName';
import {CustomerEncoderIsGroup} from './CustomerEncoderIsGroup';
import {CustomerEncoderTypeOfTaxIdentifier} from './CustomerEncoderTypeOfTaxIdentifier';
import {CustomerEncoderTaxIdentifier} from './CustomerEncoderTaxIdentifier';
import {CustomerEncoderSkipSuggestions} from './CustomerEncoderSkipSuggestions';
import { CustomerEncoderId } from './CustomerEncoderId';

export class CustomerEncoder extends AggregateRoot {
  private id: CustomerEncoderId;
  private name: CustomerEncoderName;
  private isGroup: CustomerEncoderIsGroup;
  private typeOfTaxIdentifier: CustomerEncoderTypeOfTaxIdentifier;
  private taxIdentifier: CustomerEncoderTaxIdentifier;
  private skipSuggestions: CustomerEncoderSkipSuggestions;
  private country: CustomerEncoderCountry;
  private typology: CustomerEncoderCustomerTypology;
  private size: CustomerEncoderCustomerSize;
  private customerId: CustomerEncoderCustomerId;
  private code: CustomerEncoderCode;

  constructor(
    id: CustomerEncoderId,
    name: CustomerEncoderName,
    isGroup: CustomerEncoderIsGroup,
    typeOfTaxIdentifier: CustomerEncoderTypeOfTaxIdentifier,
    taxIdentifier: CustomerEncoderTaxIdentifier,
    skipSuggestions: CustomerEncoderSkipSuggestions,
    country: CustomerEncoderCountry,
    typology: CustomerEncoderCustomerTypology,
    size: CustomerEncoderCustomerSize,
    customerId: CustomerEncoderCustomerId,
    code: CustomerEncoderCode,
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
    this.size = size;
    this.customerId = customerId;
    this.code = code;
  }

  createCode() {
    this.code.value = `${this.country.value}-${this.typology.value}-${this.size.value}-${this.customerId.value}`;
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
      size: this.size.value,
      customerId: this.customerId.value,
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
    size: number,
    customerId: string,
    code: string,
  }): CustomerEncoder {
    return new CustomerEncoder(
      new CustomerEncoderId(data.id),
      new CustomerEncoderName(data.name, data.skipSuggestions, []),
      new CustomerEncoderIsGroup(data.isGroup),
      new CustomerEncoderTypeOfTaxIdentifier(data.typeOfTaxIdentifier),
      new CustomerEncoderTaxIdentifier(data.taxIdentifier, data.skipSuggestions, []),
      new CustomerEncoderSkipSuggestions(data.skipSuggestions),
      new CustomerEncoderCountry(data.country),
      new CustomerEncoderCustomerTypology(data.typology),
      new CustomerEncoderCustomerSize(data.size),
      new CustomerEncoderCustomerId(data.customerId),
      new CustomerEncoderCode(data.code)
    );
  }
}
