import React from 'react';
import './CategoryCard.scss';

interface props {
  backgroundImageUrl: string;
  icon: string;
  title: string;
  isLarge: boolean;
}

function CategoryCard({ backgroundImageUrl, icon, title, isLarge }: props) {
  return (
    // Single Card
    <div className={`category-card ${isLarge ? 'large' : ''}`}>
      <div
        className="category-card__background-image"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      ></div>
      <div className="category-card__details">
        <img className="category-card__image" src={icon} alt="Xbox" />
        <div className="category-card__title">{title.toUpperCase()}</div>
      </div>
    </div>
  );
}

export default CategoryCard;
