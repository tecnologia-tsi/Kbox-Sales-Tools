import { COUNTRIES } from '../../infrastructure/CountriesIso366';

export class CountryRepository {
  search(name: string) {
    const country = COUNTRIES.filter((Country: any) =>
      Country.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()
      ));

    if (!country.length) {
      return null;
    }
    return country[0]['alpha-3'];
  }
}
