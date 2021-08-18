import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';
import { News } from '../../interfaces';

type CardProps = {
  news: News;
  details: boolean;
};

const Card: React.FC<CardProps> = ({ news, details }: CardProps) => {
  return (
    <div className={`Card col-xs-12 ${details ? '' : 'col-md-3'}`}>
      <div className="card bg-dark text-white mx-1 my-1">
        <img
          aria-label="image"
          src={news.urlToImage}
          className="card-img-top"
          alt={news.title}
        />
        <div className="card-body">
          <p aria-label="title" className="card-text">
            Title: {news.title}
          </p>
          <p aria-label="description" className="card-text">
            Description: {news.description}
          </p>
          <p aria-label="publishedAt" className="card-text">
            Published: {news.publishedAt}
          </p>
          <p aria-label="author" className="card-text">
            Author: {news.author}
          </p>
        </div>
        <div className="card-footer">
          <a
            href={news.url}
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
            <Link className="card-link ml-2" to={`/details/${news.title}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
