export abstract class StringValueObject {
  value: string;

  constructor(value: string) {
    this.value = value;
  }

  toString(): string {
    return this.value;
  }
  sanity(value: string) {
    value = value.replace(/^\s/, '');
    value = value.replace(/\s$/, '');
    return value.replace(/[\#|\*|\.|\/|\_|\<|\>|\@|\-|\:]/g, '');
  }
}
