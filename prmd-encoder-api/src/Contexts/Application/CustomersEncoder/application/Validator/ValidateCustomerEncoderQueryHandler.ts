import {QueryHandler} from '../../../../Shared/domain/QueryHandler';
import {ValidateCustomerEncoderQuery} from './ValidateCustomerEncoderQuery';
import {ValidateCustomerEncoderResponse} from './ValidateCustomerEncoderResponse';
import {Query} from '../../../../Shared/domain/Query';
import {CustomerEncoderValidator} from './CustomerEncoderValidator';

export class ValidateCustomerEncoderQueryHandler
  implements QueryHandler<ValidateCustomerEncoderQuery, ValidateCustomerEncoderResponse> {
  constructor(private finder: CustomerEncoderValidator) {
  }

  subscribedTo(): Query {
    return ValidateCustomerEncoderQuery;
  }

  handle(_query: ValidateCustomerEncoderQuery): Promise<ValidateCustomerEncoderResponse> {
    return this.finder.run(_query);
  }
}
