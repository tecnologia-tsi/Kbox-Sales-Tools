import { CalculateIfTheValuesAreSimilar } from '../../Shared/domain/CalculateIfTheValuesAreSimilar';

export class SellerEncoderRepository {
  readonly calculateIfTheValuesAreSimilar: CalculateIfTheValuesAreSimilar;

  constructor() {
    this.calculateIfTheValuesAreSimilar = new CalculateIfTheValuesAreSimilar();
  }

  searchByCriteria(label: string, value: string, existSellers: Array<any>): Array<any> {
    const exist = existSellers.filter((seller: any) => {
      let compareValue;
      if (seller[label]) {
        compareValue = this.sanityName(seller[label].toLowerCase());
      } else {
        compareValue = 'NullName';
      }
      const compare = this.calculateIfTheValuesAreSimilar.run(compareValue, value.toLowerCase());
      if (compare) {
        return seller;
      }
    });
    return exist;

  }

  private sanityName(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    return value.replace(/[\#|\*|\|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }
}
