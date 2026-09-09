export type ValidateCustomerEncoderRequest = {
  name: string,
  isGroup: boolean,
  typeOfTaxIdentifier: string,
  taxIdentifier: string,
  skipSuggestions: boolean,
  country: string,
  typology: number,
  size: number,
};
