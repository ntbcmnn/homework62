import React from 'react';
import { APICountry } from '../../types';

interface Props {
  country: APICountry;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Country: React.FC<Props> = ({country, onClick}) => {
  return (
    <div
      onClick={onClick}
      role="button"
      className="bg-light mb-3 rounded-3 p-3"
    >
      <h6>{country.name}</h6>
    </div>
  );
};

export default Country;