import { Secuential } from '../../../Shared/domain/Sequential/Sequential';
import { customerSecuential } from '../../Shared/domain/CustomersEncoder/CustomersSecuential';

export class CustomerEncoderCustomerId {
  value: string;

  constructor(value: string | null) {
    this.value = value ? value : this.idCreator();
  }

  private idCreator() {
    return  'C' + Secuential(customerSecuential(), 6);
  }

}
