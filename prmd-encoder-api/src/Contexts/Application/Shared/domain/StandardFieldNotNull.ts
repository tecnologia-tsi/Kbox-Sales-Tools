export class StandardFieldNotNull extends Error {
  constructor(field: string | number) {
    super(`El campo de ${field} es obligatorio`);
  }
}
