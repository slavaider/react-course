import React from 'react';
import './Card.scss';
import img from '../../assets/img/test.jpg';
import User from '../../interfaces/user';

type CardProps = {
  user: User;
};

const Card: React.FC<CardProps> = ({ user }: CardProps) => {
  return (
    <div className="Card col-xs-12 col-md-4">
      <div className="card bg-dark text-white mx-1 my-1">
        <img src={img} className="card-img-top" alt={user.name} />
        <div className="card-body">
          <p className="card-text text-center">{user.name}</p>
        </div>
        <div className="card-footer">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus,
          quod.
        </div>
      </div>
    </div>
  );
};

export default Card;
