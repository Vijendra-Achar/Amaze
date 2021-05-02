import React, { useState } from 'react';
import './CategoryContainer.scss';

import xboxIcon from '../../assets/xbox.svg';
import playstationIcon from '../../assets/playstation.svg';
import windowsIcon from '../../assets/windows-10.svg';
import appleIcon from '../../assets/apple.svg';
import accessoriesIcon from '../../assets/accessories.svg';

import CategoryCard from '../CategoryCard/CategoryCard';

function CategoryContainer() {
  const [cards] = useState([
    {
      title: "Windows PC's",
      icon: windowsIcon,
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1563498235049-17d731a89124?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
      isLarge: true,
      id: 3,
    },
    {
      title: "Apple Mac's",
      icon: appleIcon,
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1532615470080-39f17172bc1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1373&q=80',
      isLarge: true,
      id: 4,
    },
    {
      title: 'Xbox',
      icon: xboxIcon,
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1601406983773-70763912886a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      isLarge: false,
      id: 1,
    },
    {
      title: 'Playstation',
      icon: playstationIcon,
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80',
      isLarge: false,
      id: 2,
    },
    {
      title: 'Accessories',
      icon: accessoriesIcon,
      backgroundImageUrl:
        'https://images.unsplash.com/photo-1616668010115-8f8ce69a4d04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1481&q=80',
      isLarge: false,
      id: 5,
    },
  ]);

  return (
    <div className="category--container">
      {cards.map((card) => (
        <CategoryCard
          key={card.id}
          backgroundImageUrl={card.backgroundImageUrl}
          icon={card.icon}
          title={card.title}
          isLarge={card.isLarge}
        />
      ))}
    </div>
  );
}

export default CategoryContainer;
