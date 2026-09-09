import {QueryHandler} from '../../../../Shared/domain/QueryHandler';
import {CreateSellerEncoderQuery} from './CreateSellerEncoderQuery';
import {CreateSellerEncoderResponse} from './CreateSellerEncoderResponse';
import {Query} from '../../../../Shared/domain/Query';
import {SellerEncoderCreator} from './SellerEncoderCreator';

export class CreateSellerEncoderQueryHandler
  implements QueryHandler<CreateSellerEncoderQuery, CreateSellerEncoderResponse> {
  constructor(private finder: SellerEncoderCreator) {
  }

  subscribedTo(): Query {
    return CreateSellerEncoderQuery;
  }

  handle(_query: CreateSellerEncoderQuery): Promise<CreateSellerEncoderResponse> {
    return this.finder.run(_query);
  }
}
