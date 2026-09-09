export type ValidateSellerEncoderRequest = {
  name: string,
  typeOfTaxIdentifier: string,
  taxIdentifier: string,
  skipSuggestions: boolean,
  country: string,
  typology: number,
};
