import { StandardError } from '../StandardError';

const SELLER__TYPOLOGIES = [100, 200];

export class SellerTypologyRepository {

    search(value: number) {
      if (!SELLER__TYPOLOGIES.includes(value)) {
        throw new StandardError('El valor introducido en la tipología de vendedores es erroneo');
      }
    }
}
