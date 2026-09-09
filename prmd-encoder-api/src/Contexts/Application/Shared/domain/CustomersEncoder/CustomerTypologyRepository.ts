import { StandardError } from '../StandardError';

const CUSTOMER__TYPOLOGIES = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440];

export class CustomerTypologyRepository {

    search(value: number) {
      if (!CUSTOMER__TYPOLOGIES.includes(value)) {
        throw new StandardError('El valor introducido en la tipología de cliente es obligatorio');
      }
    }
}
