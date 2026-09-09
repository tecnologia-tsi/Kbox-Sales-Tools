import {Query} from '../../../../Shared/domain/Query';

type Params = {
  name: string,
  skipSuggestions: boolean,
};

export class ValidateBrandEncoderQuery implements Query {
  name: string;
  skipSuggestions: boolean;

  constructor({
                name,
                skipSuggestions
              }: Params) {
    this.name = name;
    this.skipSuggestions = skipSuggestions;
  }
}
