import React from 'react';
import './CardWrapper.scss';
import Card from '../card/Card';
import { News } from '../../interfaces';

type CardProps = {
  items: News[];
};

const CardWrapper: React.FC<CardProps> = ({ items }: CardProps) => {
  return (
    <div className="CardWrapper row">
      {items.map((news, index) => {
        return <Card key={`card-${index}`} news={news} />;
      })}
    </div>
  );
};

export default CardWrapper;
