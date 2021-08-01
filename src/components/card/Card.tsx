import React from 'react';
import './Card.scss';
import { News } from '../../interfaces';

type CardProps = {
  news: News;
};

const Card: React.FC<CardProps> = ({ news }: CardProps) => {
  return (
    <div className="Card col-xs-12 col-md-3">
      <div className="card bg-dark text-white mx-1 my-1">
        <img src={news.urlToImage} className="card-img-top" alt={news.title} />
        <div className="card-body">
          <p className="card-text">Title: {news.title}</p>
          <p className="card-text">Description: {news.description}</p>
          <p className="card-text">Published: {news.publishedAt}</p>
          <p className="card-text">Author: {news.author}</p>
        </div>
        <div className="card-footer">
          <a href={news.url} target="_blank" rel="noreferrer">
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
