import React from 'react';
import './Card.scss';
import img from '../../assets/img/test.jpg';
import { User } from '../../interfaces';

type CardProps = {
  item: User;
};

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  return (
    <div className="Card col-xs-12 col-md-4">
      <div className="card bg-dark text-white mx-1 my-1">
        <img src={img} className="card-img-top" alt={item.firstName} />
        <div className="card-body">
          <p className="card-text text-center">FirstName: {item.firstName}</p>
          <p className="card-text text-center">LastName: {item.lastName}</p>
          <p className="card-text text-center">Country: {item.country}</p>
          <p className="card-text text-center">Zip: {item.zip}</p>
          <p className="card-text text-center">Birthday: {item.birthday}</p>
          <p className="card-text text-center">Sex: {item.sex}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
