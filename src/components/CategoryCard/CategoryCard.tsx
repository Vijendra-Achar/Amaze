import React from 'react';
import './CategoryCard.scss';

import XboxLogo from '../../assets/xbox.svg';

function CategoryCard() {
  return (
    <div className="category--container">
      <div className="category-card large">
        <div
          className="category-card__background-image"
          style={{
            backgroundImage: `url(${'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1478&q=80'})`,
          }}
        ></div>
        <div className="category-card__details">
          <img className="category-card__image" src={XboxLogo} alt="Xbox" />
          <div className="category-card__title">XBOX</div>
        </div>
      </div>
      <div className="category-card large">
        <div
          className="category-card__background-image"
          style={{
            backgroundImage: `url(${'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1478&q=80'})`,
          }}
        ></div>
        <div className="category-card__details">
          <img className="category-card__image" src={XboxLogo} alt="Xbox" />
          <div className="category-card__title">XBOX</div>
        </div>
      </div>

      <div className="category-card">
        <div
          className="category-card__background-image"
          style={{
            backgroundImage: `url(${'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1478&q=80'})`,
          }}
        ></div>
        <div className="category-card__details">
          <img className="category-card__image" src={XboxLogo} alt="Xbox" />
          <div className="category-card__title">XBOX</div>
        </div>
      </div>

      <div className="category-card">
        <div
          className="category-card__background-image"
          style={{
            backgroundImage: `url(${'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1478&q=80'})`,
          }}
        ></div>
        <div className="category-card__details">
          <img className="category-card__image" src={XboxLogo} alt="Xbox" />
          <div className="category-card__title">XBOX</div>
        </div>
      </div>

      <div className="category-card">
        <div
          className="category-card__background-image"
          style={{
            backgroundImage: `url(${'https://images.unsplash.com/photo-1605901309584-818e25960a8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1478&q=80'})`,
          }}
        ></div>
        <div className="category-card__details">
          <img className="category-card__image" src={XboxLogo} alt="Xbox" />
          <div className="category-card__title">XBOX</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
