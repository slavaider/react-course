import React from 'react';
import Card from '../Card';

const CardWrapper: React.FC = () => {
  const cardList = new Array(10);
  cardList.fill(0);

  return (
    <div className="row">
      {cardList.map((_, index) => {
        return <Card key={`card-${index}`} name={`card-${index}`} />;
      })}
    </div>
  );
};

export default CardWrapper;
