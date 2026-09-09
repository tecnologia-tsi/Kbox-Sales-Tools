import {QueryHandler} from '../../../../Shared/domain/QueryHandler';
import {ValidateSupplierEncoderQuery} from './ValidateSupplierEncoderQuery';
import {ValidateSupplierEncoderResponse} from './ValidateSupplierEncoderResponse';
import {Query} from '../../../../Shared/domain/Query';
import {SupplierEncoderValidator} from './SupplierEncoderValidator';

export class ValidateSupplierEncoderQueryHandler
  implements QueryHandler<ValidateSupplierEncoderQuery, ValidateSupplierEncoderResponse> {
  constructor(private finder: SupplierEncoderValidator) {
  }

  subscribedTo(): Query {
    return ValidateSupplierEncoderQuery;
  }

  handle(_query: ValidateSupplierEncoderQuery): Promise<ValidateSupplierEncoderResponse> {
    return this.finder.run(_query);
  }
}
