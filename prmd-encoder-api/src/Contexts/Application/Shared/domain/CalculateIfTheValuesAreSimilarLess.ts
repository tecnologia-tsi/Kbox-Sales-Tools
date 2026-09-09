export class CalculateIfTheValuesAreSimilarLess {

  run(a: any, b: any) {
    let equivalency = 0;
    const minLength = (a.length > b.length) ? b.length : a.length;
    const maxLength = (a.length < b.length) ? b.length : a.length;
    for (let i = 0; i < minLength; i++) {
      if (a[i] === b[i]) {
        equivalency++;
      }
    }
    const weight = equivalency / maxLength;
    if ((weight * 100) < 80) {
      return false;
    }
    return true;
  }
}
