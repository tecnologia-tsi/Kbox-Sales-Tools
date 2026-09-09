export class StandardFieldSimilar extends Error {
  constructor(field: string, value: string) {
    super(`Existe ${field} muy similar: ${value}`);
  }
}
