import { StandardError } from '../StandardError';
import { StandardFieldNotNull } from '../StandardFieldNotNull';

const CUSTOMER__SIZE = [0, 1, 2, 3, 4, 5];

export class CustomerSizeRepository {

  search(value: number | null) {
    if (!value) {
      throw new StandardFieldNotNull('tamaño de cliente');
    }
    if (!CUSTOMER__SIZE.includes(value)) {
      throw new StandardError('El valor introducido en el tamaño de cliente es obligatorio');
    }
  }
}
