import {QueryHandler} from '../../../../Shared/domain/QueryHandler';
import {CreateSupplierEncoderQuery} from './CreateSupplierEncoderQuery';
import {CreateSupplierEncoderResponse} from './CreateSupplierEncoderResponse';
import {Query} from '../../../../Shared/domain/Query';
import {SupplierEncoderCreator} from './SupplierEncoderCreator';

export class CreateSupplierEncoderQueryHandler
  implements QueryHandler<CreateSupplierEncoderQuery, CreateSupplierEncoderResponse> {
  constructor(private finder: SupplierEncoderCreator) {
  }

  subscribedTo(): Query {
    return CreateSupplierEncoderQuery;
  }

  handle(_query: CreateSupplierEncoderQuery): Promise<CreateSupplierEncoderResponse> {
    return this.finder.run(_query);
  }
}
