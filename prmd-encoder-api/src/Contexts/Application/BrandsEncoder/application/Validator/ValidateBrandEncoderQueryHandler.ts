import {QueryHandler} from '../../../../Shared/domain/QueryHandler';
import {ValidateBrandEncoderQuery} from './ValidateBrandEncoderQuery';
import {ValidateBrandEncoderResponse} from './ValidateBrandEncoderResponse';
import {Query} from '../../../../Shared/domain/Query';
import {BrandEncoderValidator} from './BrandEncoderValidator';

export class ValidateBrandEncoderQueryHandler
  implements QueryHandler<ValidateBrandEncoderQuery, ValidateBrandEncoderResponse> {
  constructor(private finder: BrandEncoderValidator) {
  }

  subscribedTo(): Query {
    return ValidateBrandEncoderQuery;
  }

  handle(_query: ValidateBrandEncoderQuery): Promise<ValidateBrandEncoderResponse> {
    return this.finder.run(_query);
  }
}
