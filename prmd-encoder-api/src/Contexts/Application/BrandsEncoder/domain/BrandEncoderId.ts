import { Secuential } from '../../../Shared/domain/Sequential/Sequential';
import { BrandSecuential } from '../../Shared/domain/BrandsEncoder/BrandsSecuential';

export class BrandEncoderId {
  value: string;

  constructor(value: string | null) {
    this.value = value ? value : this.idCreator();
  }

  private idCreator() {
    return  'M' + Secuential(BrandSecuential(), 4);
  }

}
