import { CalculateIfTheValuesAreSimilar } from '../../Shared/domain/CalculateIfTheValuesAreSimilar';

export class CustomerEncoderRepository {
  readonly calculateIfTheValuesAreSimilar: CalculateIfTheValuesAreSimilar;

  constructor() {
    this.calculateIfTheValuesAreSimilar = new CalculateIfTheValuesAreSimilar();
  }

  searchByCriteria(label: string, value: string, existCustomers: Array<any>): Array<any> {
    const exist = existCustomers.filter((customer: any) => {
      let compareValue;
      if (customer[label]) {
        compareValue =  this.sanityName(customer[label].toLowerCase());
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
    return value.replace(/[\#|\*|\|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }
}
