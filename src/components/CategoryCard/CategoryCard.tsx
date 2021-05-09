import React from 'react';
import './CategoryCard.scss';

import { RouteComponentProps, withRouter } from 'react-router-dom';

interface props extends RouteComponentProps {
  backgroundImageUrl: string;
  icon: string;
  title: string;
  isLarge: boolean;
  id: string;
}

function CategoryCard({ backgroundImageUrl, icon, title, isLarge, id, history }: props) {
  return (
    // Single Card
    <div
      className={`category-card ${isLarge ? 'large' : ''}`}
      onClick={() => {
        history.push(`/category/${id}`);
      }}
    >
      <div
        className="category-card__background-image"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      ></div>
      <div className="category-card__details">
        <img className="category-card__image" src={icon} alt={icon} />
        <div className="category-card__title">{title.toUpperCase()}</div>
      </div>
    </div>
  );
}

export default withRouter(CategoryCard);
