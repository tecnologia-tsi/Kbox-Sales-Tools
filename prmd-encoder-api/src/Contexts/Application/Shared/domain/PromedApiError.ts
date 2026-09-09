export class PromedApiError extends Error {
  constructor() {
    super('An error has occurred. The PROMED infrastructure does not return any results');
  }
}
