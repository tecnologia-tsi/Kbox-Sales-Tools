export class SupplierEncoderNotExist extends Error {
  constructor() {
    super('The are no results for this search');
  }
}
