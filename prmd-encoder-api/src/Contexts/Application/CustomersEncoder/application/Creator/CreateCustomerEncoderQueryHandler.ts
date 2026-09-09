import {QueryHandler} from '../../../../Shared/domain/QueryHandler';
import {CreateCustomerEncoderQuery} from './CreateCustomerEncoderQuery';
import {CreateCustomerEncoderResponse} from './CreateCustomerEncoderResponse';
import {Query} from '../../../../Shared/domain/Query';
import {CustomerEncoderCreator} from './CustomerEncoderCreator';

export class CreateCustomerEncoderQueryHandler
  implements QueryHandler<CreateCustomerEncoderQuery, CreateCustomerEncoderResponse> {
  constructor(private finder: CustomerEncoderCreator) {
  }

  subscribedTo(): Query {
    return CreateCustomerEncoderQuery;
  }

  handle(_query: CreateCustomerEncoderQuery): Promise<CreateCustomerEncoderResponse> {
    return this.finder.run(_query);
  }
}
