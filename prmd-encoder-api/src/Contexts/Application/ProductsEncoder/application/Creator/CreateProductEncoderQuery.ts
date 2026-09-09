import {Query} from '../../../../Shared/domain/Query';

type Params = {
  name: string,
  type: string,
  group: string,
  category: string,
  brandCode: string,
  productSupplierCode: string,
  skipSuggestions: boolean
};

export class CreateProductEncoderQuery implements Query {
  name: string;
  type: string;
  group: string;
  category: string;
  brandCode: string;
  productSupplierCode: string;
  skipSuggestions: boolean;

  constructor({
                name,
                type,
                group,
                category,
                brandCode,
                productSupplierCode,
                skipSuggestions
              }: Params) {
      this.name = name;
      this.type = type;
      this.group = group;
      this.category = category;
      this.brandCode = brandCode;
      this.productSupplierCode = productSupplierCode;
      this.skipSuggestions = skipSuggestions;
  }
}
