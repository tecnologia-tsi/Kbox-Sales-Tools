import {AggregateRoot} from '../../../Shared/domain/AggregateRoot';
import {BrandEncoderBrandId} from './BrandEncoderBrandId';
import {BrandEncoderCode} from './BrandEncoderCode';
import {BrandEncoderName} from './BrandEncoderName';
import {BrandEncoderSkipSuggestions} from './BrandEncoderSkipSuggestions';
import {BrandEncoderAliases} from './BrandEncoderAliases';
import { BrandEncoderId } from './BrandEncoderId';

export class BrandEncoder extends AggregateRoot {
  private id: BrandEncoderBrandId;
  private name: BrandEncoderName;
  private skipSuggestions: BrandEncoderSkipSuggestions;
  private BrandId: BrandEncoderId;
  private brandAliases: BrandEncoderAliases;
  private code: BrandEncoderCode;

  constructor(
    id: BrandEncoderBrandId,
    name: BrandEncoderName,
    skipSuggestions: BrandEncoderSkipSuggestions,
    BrandId: BrandEncoderId,
    brandAliases: BrandEncoderAliases,
    code: BrandEncoderCode,
  ) {
    super();
    this.id = id;
    this.name = name;
    this.skipSuggestions = skipSuggestions;
    this.BrandId = BrandId;
    this.brandAliases = brandAliases;
    this.code = code;
  }

  createCode() {
    this.code.value = `${this.BrandId.value}-${this.brandAliases.value}`;
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      skipSuggestions: this.skipSuggestions.value,
      BrandId: this.BrandId.value,
      brandAliases: this.brandAliases.value,
      code: this.code.value,
    };
  }

  static fromPrimitives(data: {
    id: string,
    name: string,
    typeOfTaxIdentifier: string,
    taxIdentifier: string,
    skipSuggestions: boolean,
    BrandId: string,
    brandAliases: string,
    code: string,
  }): BrandEncoder {
    return new BrandEncoder(
      new BrandEncoderBrandId(data.id),
      new BrandEncoderName(data.name, data.skipSuggestions, []),
      new BrandEncoderSkipSuggestions(data.skipSuggestions),
      new BrandEncoderId(data.BrandId),
      new BrandEncoderAliases(data.brandAliases),
      new BrandEncoderCode(data.code)
    );
  }
}
