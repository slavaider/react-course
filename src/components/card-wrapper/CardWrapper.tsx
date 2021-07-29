import React from 'react';
import './CardWrapper.scss';
import Card from '../card/Card';

const CardWrapper: React.FC = () => {
  const arr = new Array(10);
  arr.fill(0);
  return (
    <div className="CardWrapper row">
      {arr.map((_, index) => {
        return <Card key={`card-${index}`} name={`card-${index}`} />;
      })}
    </div>
  );
};

export default CardWrapper;
