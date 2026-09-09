import { CalculateIfTheValuesAreSimilarLess } from '../../Shared/domain/CalculateIfTheValuesAreSimilarLess';

export class BrandEncoderRepository {
  readonly calculateIfTheValuesAreSimilar: CalculateIfTheValuesAreSimilarLess;

  constructor() {
    this.calculateIfTheValuesAreSimilar = new CalculateIfTheValuesAreSimilarLess();
  }

  searchByCriteria(label: string, value: string, existBrands: Array<any>): Array<any> {
    const exist = existBrands.filter((customer: any) => {
      let compareValue;
      if (customer[label]) {
        compareValue = this.sanityName(customer[label].toLowerCase());
      } else {
        compareValue = 'NullName';
      }
      const compare = this.calculateIfTheValuesAreSimilar.run(compareValue, value.toLowerCase());
      if (compare) {
        return customer;
      }
    });
    return exist;

  }

  private sanityName(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    value = value.replace(/\s/g, '');
    return value.replace(/[\#|\*|\|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }
}
