import React, { useEffect } from 'react';
import Moviegrid from '../../components/atoms/grids/gridmovie';
import raw from '../../Json-data/raw.json';
import './index.css';

const Movies = () => {

  function dynamicSort(title) {
    var sortOrder = 1;

    if (title[0] === '-') {
      sortOrder = -1;
      title = title.substr(1);
    }

    return function (a, b) {
      if (sortOrder == -1) {
        return b[title].localeCompare(a[title]);
      } else {
        return a[title].localeCompare(b[title]);
      }
    };
  }
  
  return (
    <div className="movies-banner">
      <div className="title">
        <h1>Popular Movies</h1>
      </div>
      <div className="movgrd">
        {raw
          .sort(dynamicSort('title'))
          .filter((data) => {
            return data.releaseYear >= 2010 && data.programType === 'movie';
          })
          .map((data) => (
            <Moviegrid det={data} />
          ))}
      </div>
    </div>
  );
};

export default Movies;
