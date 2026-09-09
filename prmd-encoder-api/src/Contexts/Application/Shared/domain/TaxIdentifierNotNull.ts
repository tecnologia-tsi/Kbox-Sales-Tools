export class TaxIdentifierNotNull extends Error {
  constructor() {
    super('El campo de identificación fiscal es obligatorio');
  }
}
