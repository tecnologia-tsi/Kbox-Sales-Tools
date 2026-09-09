import { AggregateRoot } from '../../../Shared/domain/AggregateRoot';
import { ProductEncoderProductId } from './ProductEncoderProductId';
import { ProductEncoderCode } from './ProductEncoderCode';
import { ProductEncoderName } from './ProductEncoderName';
import { ProductEncoderType } from './ProductEncoderType';
import { ProductEncoderSpecialty } from './ProductEncoderSpecialty';
import { ProductEncoderBrandCode } from './ProductEncoderBrandCode';
import { ProductEncoderId } from './ProductEncoderId';

export class ProductEncoder extends AggregateRoot {
  private id: ProductEncoderId;
  private name: ProductEncoderName;
  type: ProductEncoderType;
  private specialty: ProductEncoderSpecialty;
  private brandCode: ProductEncoderBrandCode;
  private ProductSupplierCode: ProductEncoderProductId;
  private code: ProductEncoderCode;

  constructor(
    id: ProductEncoderId,
    name: ProductEncoderName,
    type: ProductEncoderType,
    specialty: ProductEncoderSpecialty,
    brandCode: ProductEncoderBrandCode,
    ProductSupplierCode: ProductEncoderProductId,
    code: ProductEncoderCode
  ) {
    super();
    this.id = id;
    this.name = name;
    this.type = type;
    this.specialty = specialty;
    this.brandCode = brandCode;
    this.ProductSupplierCode = ProductSupplierCode;
    this.code = code;
  }

  createCode() {
    this.code.value = `${this.type.value}-${this.specialty.value}-${this.brandCode.value}-${this.ProductSupplierCode.value}`;
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      type: this.type.value,
      specialty: this.specialty.value,
      brandCode: this.brandCode.value,
      ProductSupplierCode: this.ProductSupplierCode.value,
      code: this.code.value
    };
  }

  static fromPrimitives(data: {
    id: string,
    name: string,
    type: string,
    group: string,
    category: string,
    brandCode: string,
    ProductSupplierCode: string,
    code: string,
    skipSuggestions: boolean
  }): ProductEncoder {
    return new ProductEncoder(
      new ProductEncoderId(data.id),
      new ProductEncoderName(data.name, data.skipSuggestions, []),
      new ProductEncoderType(data.type),
      new ProductEncoderSpecialty(data.group, data.category),
      new ProductEncoderBrandCode(data.brandCode),
      new ProductEncoderProductId(data.ProductSupplierCode, '', []),
      new ProductEncoderCode(data.code)
    );
  }
}
