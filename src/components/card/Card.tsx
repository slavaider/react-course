import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import { News } from '../../interfaces';

type CardProps = {
  item: News;
  details: boolean;
};

const Card: React.FC<CardProps> = ({ item, details }: CardProps) => {
  return (
    <div className={`Card col-xs-12 ${details ? '' : 'col-md-3'}`}>
      <div className="card bg-dark text-white mx-1 my-1">
        <img src={item.urlToImage} className="card-img-top" alt={item.title} />
        <div className="card-body">
          <p className="card-text">Title: {item.title}</p>
          <p className="card-text">Description: {item.description}</p>
          <p className="card-text">Published: {item.publishedAt}</p>
          <p className="card-text">Author: {item.author}</p>
        </div>
        <div className="card-footer">
          <a
            href={item.url}
            className="card-link"
            target="_blank"
            rel="noreferrer"
          >
            Source
          </a>
          {details ? (
            <Link className="card-link ml-2" to="/">
              Return
            </Link>
          ) : (
            <Link className="card-link ml-2" to={`/details/${item.title}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
