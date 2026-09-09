import { Secuential } from '../../../Shared/domain/Sequential/Sequential';
import { SuppliersSecuential } from '../../Shared/domain/SuppliersEncoder/SuppliersSecuential';

export class SupplierEncoderSupplierId {
  value: string;

  constructor(value: string | null) {
    this.value = value ? value : this.idCreator();
  }

  private idCreator() {
    return  'P' + Secuential(SuppliersSecuential(), 6);
  }

}
