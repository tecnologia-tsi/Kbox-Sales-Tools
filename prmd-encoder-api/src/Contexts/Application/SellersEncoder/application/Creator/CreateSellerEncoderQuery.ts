import {Query} from '../../../../Shared/domain/Query';

type Params = {
  name: string,
  typeOfTaxIdentifier: string,
  taxIdentifier: string,
  skipSuggestions: boolean,
  country: string,
  typology: number,
};

export class CreateSellerEncoderQuery implements Query {
  name: string;
  typeOfTaxIdentifier: string;
  taxIdentifier: string;
  skipSuggestions: boolean;
  country: string;
  typology: number;

  constructor({
                name,
                typeOfTaxIdentifier,
                taxIdentifier,
                skipSuggestions,
                country,
                typology,
              }: Params) {
    this.name = name;
    this.typeOfTaxIdentifier = typeOfTaxIdentifier;
    this.taxIdentifier = taxIdentifier;
    this.skipSuggestions = skipSuggestions;
    this.country = country;
    this.typology = typology;
  }
}
