import { StandardError } from '../StandardError';

const PRODUCT__TYPOLOGIES = ['producto', 'servicio', 'licencia', 'kit propio', 'producto de valor agregado'];

const PRODUCT__SIMPLIFIED = {
  'producto': 'PRO',
  'servicio': 'SER',
  'licencia': 'LIC',
  'kit propio': 'KIT',
  'producto de valor agregado': 'PVA'
};

export class ProductTypologyRepository {
  search(value: string) {
    if (!PRODUCT__TYPOLOGIES.includes(value)) {
      throw new StandardError('El valor introducido en la tipologia de producto es incorrecto');
    }
  }

  save(value: string): string {
    //@ts-ignore
    return PRODUCT__SIMPLIFIED[value];
  }
}
