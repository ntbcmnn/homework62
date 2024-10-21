export interface APICountry {
  name: string;
  alpha3Code: string;
}

export interface APICountryInfo {
  name: string;
  capital: string;
  population: number;
  flag: string;
  borders: string[];
  currency: string;
}

export interface IMessage {
  message: string;
  author: string;
  _id: string;
  datetime: string;
}

export interface IProduct {
  name: string;
  count: number;
  price: number;
  image: string;
}