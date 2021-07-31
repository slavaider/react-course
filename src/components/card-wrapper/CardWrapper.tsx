import React from 'react';
import './CardWrapper.scss';
import Card from '../card/Card';
import { User } from '../../interfaces';

type CardProps = {
  items: User[];
};

const CardWrapper: React.FC<CardProps> = ({ items }: CardProps) => {
  return (
    <div className="CardWrapper row">
      {items.map((user, index) => {
        return <Card key={`card-${index}`} user={user} />;
      })}
    </div>
  );
};

export default CardWrapper;
