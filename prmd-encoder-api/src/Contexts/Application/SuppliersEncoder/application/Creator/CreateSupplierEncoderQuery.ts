import {Query} from '../../../../Shared/domain/Query';

type Params = {
  name: string,
  isGroup: boolean,
  typeOfTaxIdentifier: string,
  taxIdentifier: string,
  skipSuggestions: boolean,
  country: string,
  typology: number,
  ambit: string,
};

export class CreateSupplierEncoderQuery implements Query {
  name: string;
  isGroup: boolean;
  typeOfTaxIdentifier: string;
  taxIdentifier: string;
  skipSuggestions: boolean;
  country: string;
  typology: number;
  ambit: string;

  constructor({
                name,
                isGroup,
                typeOfTaxIdentifier,
                taxIdentifier,
                skipSuggestions,
                country,
                typology,
                ambit
              }: Params) {
    this.name = name;
    this.isGroup = isGroup;
    this.typeOfTaxIdentifier = typeOfTaxIdentifier;
    this.taxIdentifier = taxIdentifier;
    this.skipSuggestions = skipSuggestions;
    this.country = country;
    this.typology = typology;
    this.ambit = ambit;
  }
}
