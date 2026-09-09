import { CalculateIfTheValuesAreSimilarLess } from '../../Shared/domain/CalculateIfTheValuesAreSimilarLess';
import { HttpProductRepository } from '../infrastructure/persistence/HttpProductRepository';

export class ProductEncoderRepository {
  readonly calculateIfTheValuesAreSimilar: CalculateIfTheValuesAreSimilarLess;

  constructor() {
    this.calculateIfTheValuesAreSimilar = new CalculateIfTheValuesAreSimilarLess();
  }

  searchByCriteria(label: string, value: string, existProducts: Array<any>): Array<any> {
    const exist = existProducts.filter((product: any) => {
      let compareValue;
      if (product[label]) {
        compareValue = this.sanityName(product[label].toLowerCase());
      } else {
        compareValue = 'NullName';
      }
      const compare = this.calculateIfTheValuesAreSimilar.run(compareValue, value.toLowerCase());
      if (compare) {
        return product;
      }
    });
    return exist;
  }

  searchByTwoCriteria(labelOne: string, valueOne: string, labelTwo: string, valueTwo: string, existProducts: Array<any>): Array<any> {
    const exist = existProducts.filter((product: any) => {
      let compareValueOne;
      if (product[labelOne]) {
        compareValueOne = product[labelOne].toLowerCase();
      } else {
        compareValueOne = 'NullName';
      }
      let compareValueTwo;
      if (product[labelTwo]) {
        compareValueTwo = product[labelTwo].slice(0, 5).toLowerCase();
      } else {
        compareValueTwo = 'NullName';
      }

      if (compareValueOne === valueOne.toLowerCase() && compareValueTwo === valueTwo.slice(0, 5).toLowerCase()) {
        return product;
      }
    });
    return exist;
  }

  async searchAll() {
    const allProducts = [];
    for (let step = 1; step < 13; step++) {
      const offset = `${step}0000`;
      const products = await HttpProductRepository(parseInt(offset));
      if (products.length) {
        allProducts.push(...products);
      }
    }
    return allProducts;
  }

  private sanityName(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    return value.replace(/[\#|\*|\|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }
}
