import {Query} from '../../../../Shared/domain/Query';

type Params = {
  name: string,
  isGroup: boolean,
  typeOfTaxIdentifier: string,
  taxIdentifier: string,
  skipSuggestions: boolean,
  country: string,
  typology: number,
  size: number,
};

export class CreateCustomerEncoderQuery implements Query {
  name: string;
  isGroup: boolean;
  typeOfTaxIdentifier: string;
  taxIdentifier: string;
  skipSuggestions: boolean;
  country: string;
  typology: number;
  size: number;

  constructor({
                name,
                isGroup,
                typeOfTaxIdentifier,
                taxIdentifier,
                skipSuggestions,
                country,
                typology,
                size
              }: Params) {
    this.name = name;
    this.isGroup = isGroup;
    this.typeOfTaxIdentifier = typeOfTaxIdentifier;
    this.taxIdentifier = taxIdentifier;
    this.skipSuggestions = skipSuggestions;
    this.country = country;
    this.typology = typology;
    this.size = size;
  }
}
