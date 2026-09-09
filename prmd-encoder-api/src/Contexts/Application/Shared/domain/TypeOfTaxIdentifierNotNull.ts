export class TypeOfTaxIdentifierNotNull extends Error {
  constructor() {
    super('El campo del tipo de identificación fiscal es obligatorio');
  }
}
