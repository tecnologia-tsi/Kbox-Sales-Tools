export class CustomerEncoderNotExist extends Error {
  constructor() {
    super('The are no results for this search');
  }
}
