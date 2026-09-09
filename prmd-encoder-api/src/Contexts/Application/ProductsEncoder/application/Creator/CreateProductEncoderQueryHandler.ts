import {QueryHandler} from '../../../../Shared/domain/QueryHandler';
import {CreateProductEncoderQuery} from './CreateProductEncoderQuery';
import {CreateProductEncoderResponse} from './CreateProductEncoderResponse';
import {Query} from '../../../../Shared/domain/Query';
import {ProductEncoderCreator} from './ProductEncoderCreator';

export class CreateProductEncoderQueryHandler
  implements QueryHandler<CreateProductEncoderQuery, CreateProductEncoderResponse> {
  constructor(private finder: ProductEncoderCreator) {
  }

  subscribedTo(): Query {
    return CreateProductEncoderQuery;
  }

  handle(_query: CreateProductEncoderQuery): Promise<CreateProductEncoderResponse> {
    return this.finder.run(_query);
  }
}
