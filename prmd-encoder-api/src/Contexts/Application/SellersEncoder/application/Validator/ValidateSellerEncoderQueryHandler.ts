import {QueryHandler} from '../../../../Shared/domain/QueryHandler';
import {ValidateSellerEncoderQuery} from './ValidateSellerEncoderQuery';
import {ValidateSellerEncoderResponse} from './ValidateSellerEncoderResponse';
import {Query} from '../../../../Shared/domain/Query';
import {SellerEncoderValidator} from './SellerEncoderValidator';

export class ValidateSellerEncoderQueryHandler
  implements QueryHandler<ValidateSellerEncoderQuery, ValidateSellerEncoderResponse> {
  constructor(private finder: SellerEncoderValidator) {
  }

  subscribedTo(): Query {
    return ValidateSellerEncoderQuery;
  }

  handle(_query: ValidateSellerEncoderQuery): Promise<ValidateSellerEncoderResponse> {
    return this.finder.run(_query);
  }
}
