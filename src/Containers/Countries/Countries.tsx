import { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { APICountry } from '../../types';

import DisplayInfo from '../../Components/DisplayInfo/DisplayInfo.tsx';
import Country from '../../Components/Country/Country.tsx';
import Loader from '../../Components/UI/Loader/Loader.tsx';
import BackLink from '../../Components/BackLink/BackLink.tsx';


const Countries = () => {
  const [countries, setCountries] = useState<APICountry[]>([]);
  const [clickedCountry, setClickedCountry] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData: () => Promise<void> = useCallback(async (): Promise<void> => {
    try {
      const responseReq: AxiosResponse<APICountry[]> = await axios.get<APICountry[]>('all?fields=alpha3Code,name');

      const promises: Promise<APICountry>[] = responseReq.data.map(async (country: APICountry): Promise<APICountry> => {
        const resCountry: AxiosResponse<APICountry> = await axios.get<APICountry>('alpha/' + country.alpha3Code);
        return {
          name: resCountry.data.name,
          alpha3Code: resCountry.data.alpha3Code,
        };
      });

      setCountries(await Promise.all(promises));
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('Failed to fetch data:', err);
    }
  }, []);

  useEffect((): void => {
    void fetchData();
  }, [fetchData]);

  return (
    <>
      <div className="container mt-5 mb-4">
        <BackLink page="projects"/>
      </div>

      <div className="container d-flex">
        <div className="col-3 vh-100 overflow-y-scroll rounded-3 mt-4">
          {loading ? (
            <Loader/>
          ) : (
            countries.map((country: APICountry) => (
              <Country
                country={country}
                key={country.alpha3Code}
                onClick={(): void => setClickedCountry(country.alpha3Code)}
              />
            ))
          )}
        </div>
        <div className="col-9 position-relative">
          {clickedCountry ? (
            <div className="fixed-scrollable-info">
              <DisplayInfo code={clickedCountry}/>
            </div>

          ) : (
            <div className="d-flex justify-content-center mt-5">
              <h3>
                Pick a country to get info
              </h3>
            </div>
          )}
        </div>
      </div>
    </>

  );
};

export default Countries;