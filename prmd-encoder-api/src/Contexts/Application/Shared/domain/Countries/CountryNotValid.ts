export class CountryNotValid extends Error {
  constructor() {
    super('Introduce el nombre del país correcto según la ISO-366-1');
  }
}
