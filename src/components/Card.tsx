import { CardProps } from '../shared/types';

const Card = ({ name, population, region, flag }: CardProps) => {
  return (
    <div>
      <h3>
        {name?.common} {flag}
      </h3>
      <p>Region: {region}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default Card;
