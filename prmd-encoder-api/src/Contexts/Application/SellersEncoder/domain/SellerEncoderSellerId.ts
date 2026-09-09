import { Secuential } from '../../../Shared/domain/Sequential/Sequential';
import { SellerSecuential } from '../../Shared/domain/SellerEncoder/SellersSecuential';

export class SellerEncoderSellerId {
  value: string;

  constructor(value: string | null) {
    this.value = value ? value : this.idCreator();
  }

  private idCreator() {
    return  'V' + Secuential(SellerSecuential(), 4);
  }

}
