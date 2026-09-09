import {QueryHandler} from '../../../../Shared/domain/QueryHandler';
import {CreateBrandEncoderQuery} from './CreateBrandEncoderQuery';
import {CreateBrandEncoderResponse} from './CreateBrandEncoderResponse';
import {Query} from '../../../../Shared/domain/Query';
import {BrandEncoderCreator} from './BrandEncoderCreator';

export class CreateBrandEncoderQueryHandler
  implements QueryHandler<CreateBrandEncoderQuery, CreateBrandEncoderResponse> {
  constructor(private finder: BrandEncoderCreator) {
  }

  subscribedTo(): Query {
    return CreateBrandEncoderQuery;
  }

  handle(_query: CreateBrandEncoderQuery): Promise<CreateBrandEncoderResponse> {
    return this.finder.run(_query);
  }
}
