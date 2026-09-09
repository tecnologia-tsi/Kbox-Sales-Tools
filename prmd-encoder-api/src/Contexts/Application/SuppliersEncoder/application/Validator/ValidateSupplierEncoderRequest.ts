export type ValidateSupplierEncoderRequest = {
  name: string,
  isGroup: boolean,
  typeOfTaxIdentifier: string,
  taxIdentifier: string,
  skipSuggestions: boolean,
  country: string,
  typology: number,
  ambit: string,
};
