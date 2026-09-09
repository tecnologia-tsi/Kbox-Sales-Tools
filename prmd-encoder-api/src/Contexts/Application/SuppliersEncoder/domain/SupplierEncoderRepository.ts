import { CalculateIfTheValuesAreSimilar } from '../../Shared/domain/CalculateIfTheValuesAreSimilar';

export class SupplierEncoderRepository {
  readonly calculateIfTheValuesAreSimilar: CalculateIfTheValuesAreSimilar;

  constructor() {
    this.calculateIfTheValuesAreSimilar = new CalculateIfTheValuesAreSimilar();
  }

  searchByCriteria(label: string, value: string, existSuppliers: Array<any>): Array<any> {
    const exist = existSuppliers.filter((supplier: any) => {
      let compareValue;
      if (supplier[label]) {
        compareValue = this.sanityName(supplier[label].toLowerCase());
      } else {
        compareValue = 'NullName';
      }
      const compare = this.calculateIfTheValuesAreSimilar.run(compareValue, value.toLowerCase());
      if (compare) {
        return supplier;
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
