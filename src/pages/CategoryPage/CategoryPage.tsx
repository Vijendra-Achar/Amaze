import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './CategoryPage.scss';

interface MatchParams {
  categoryId: string;
}

interface CategoryProps extends RouteComponentProps<MatchParams> {
  categoryId: string;
}

function CategoryPage({ match }: CategoryProps) {
  return <div className="container__main">Hello From the {match.params.categoryId.toUpperCase()} Page</div>;
}

export default CategoryPage;
