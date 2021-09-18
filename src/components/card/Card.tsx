import React from 'react';
import './Card.scss';
import { News } from '../../interfaces';

type CardProps = {
  item: News;
};

const Card: React.FC<CardProps> = ({ item }: CardProps) => {
  return (
    <div className="Card col-xs-12 col-md-3">
      <div className="card bg-dark text-white mx-1 my-1">
        <img src={item.urlToImage} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <p className="card-text">Title: {item.title}</p>
          <p className="card-text">Description: {item.description}</p>
          <p className="card-text">Published: {item.publishedAt}</p>
          <p className="card-text">Author: {item.author}</p>
        </div>
        <div className="card-footer">
          <a href={item.url} target="_blank" rel="noreferrer">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
