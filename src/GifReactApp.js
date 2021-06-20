import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifReactApp = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState( defaultCategories );

  return (
    <Fragment>
      <h2>GifReactApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ol>
        {
          categories.map(category => (
            <GifGrid 
              key={ category }
              category={ category } 
            />
          ))
        }
      </ol>
    </Fragment>
  )
}
