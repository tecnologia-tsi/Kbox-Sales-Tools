
export class BrandEncoderAliases {
  value: string;

  constructor(value: string) {
    this.value = value;
    this.createAliases(value);
  }

  private createAliases(value: string) {
    this.value = value.substr(0, 4).toUpperCase();
  }
}
