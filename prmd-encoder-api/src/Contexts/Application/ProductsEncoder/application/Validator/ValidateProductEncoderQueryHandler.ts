import {QueryHandler} from '../../../../Shared/domain/QueryHandler';
import {ValidateProductEncoderQuery} from './ValidateProductEncoderQuery';
import {ValidateProductEncoderResponse} from './ValidateProductEncoderResponse';
import {Query} from '../../../../Shared/domain/Query';
import {ProductEncoderValidator} from './ProductEncoderValidator';

export class ValidateProductEncoderQueryHandler
  implements QueryHandler<ValidateProductEncoderQuery, ValidateProductEncoderResponse> {
  constructor(private finder: ProductEncoderValidator) {
  }

  subscribedTo(): Query {
    return ValidateProductEncoderQuery;
  }

  handle(_query: ValidateProductEncoderQuery): Promise<ValidateProductEncoderResponse> {
    return this.finder.run(_query);
  }
}
