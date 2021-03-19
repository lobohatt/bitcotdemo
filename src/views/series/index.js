import React from 'react';
import raw from '../../Json-data/raw.json';
import Moviegrid from '../../components/atoms/grids/gridmovie';
import './index.css';

const Series = () => {

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
    <div>
      <div className="series-banner">
        <div className="title">
          <h1>Popular Series</h1>
        </div>
        <div className="movgrd">
          {raw
            .sort(dynamicSort("title"))
            .filter((data) => {
              return data.releaseYear >= 2010 && data.programType === 'series';
            })
            .map((data) => (
              <Moviegrid det={data} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Series;
