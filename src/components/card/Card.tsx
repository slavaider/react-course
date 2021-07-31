import React from 'react';
import './Card.scss';
import img from '../../assets/img/test.jpg';
import { User } from '../../interfaces';

type CardProps = {
  user: User;
};

const Card: React.FC<CardProps> = ({ user }: CardProps) => {
  return (
    <div className="Card col-xs-12 col-md-4">
      <div className="card bg-dark text-white mx-1 my-1">
        <img src={img} className="card-img-top" alt={user.firstName} />
        <div className="card-body">
          <p className="card-text text-center">FirstName: {user.firstName}</p>
          <p className="card-text text-center">LastName: {user.lastName}</p>
          <p className="card-text text-center">Country: {user.country}</p>
          <p className="card-text text-center">Zip: {user.zip}</p>
          <p className="card-text text-center">Birthday: {user.birthday}</p>
          <p className="card-text text-center">Sex: {user.sex}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
