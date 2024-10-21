import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { APICountryInfo } from '../../types';

import Loader from '../UI/Loader/Loader.tsx';

interface Props {
  code: string | null;
}

const DisplayInfo: React.FC<Props> = ({code}: Props) => {
  const [country, setCountry] = useState<APICountryInfo | null>(null);
  const [borderCountries, setBorderCountries] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect((): void => {
    const getCountryByCode: () => Promise<void> = async (): Promise<void> => {
      setLoading(true);

      try {
        const responseReq: AxiosResponse<APICountryInfo> = await axios.get<APICountryInfo>('alpha/' + code);
        setCountry(responseReq.data);

        const borders: string[] = responseReq.data.borders || [];

        const borderNames: string[] = await Promise.all(
          borders.map(async (borderCode: string): Promise<string> => {
            const borderCountry: AxiosResponse<APICountryInfo> = await axios.get<APICountryInfo>('alpha/' + borderCode);
            return borderCountry.data.name;
          })
        );

        setBorderCountries(borderNames);
        setLoading(false);

      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    if (code) void getCountryByCode();
  }, [code]);

  return country && (
    <>
      {!loading ?
        <>
          {country ?
            <div key={code}
                 className="border border-gray-200 bg-white rounded p-4 m-4 container d-flex justify-content-between align-items-start gap-4">
              <div>
                <h3 className="mb-5 text-uppercase">{country.name}</h3>
                <p className="fw-bold">
                  {country.capital ?
                    `Capital: ${country.capital}`
                    :
                    `${country.name} has no capital`}
                </p>
                <p className="fw-bold">Population: {country.population}</p>
                {
                  borderCountries.length > 0 ? (
                    <div className="mt-5">
                      <p className="fw-bold fs-5">Borders:</p>
                      {borderCountries.map((border: string, id: number) => (<p key={id}>{border}</p>))}
                    </div>
                  ) : (
                    <div className="my-5">
                      <h5>{country.name} has no borders</h5>
                    </div>
                  )
                }
              </div>
              <img
                src={country.flag}
                alt={country.name + 'flag'}
                className="rounded w-50  border border-gray-200"
              />
            </div>
            : null}
        </>
        : <Loader/>
      }
    </>
  );
};

export default DisplayInfo;
