import React from 'react';
import './gridmovie.css';

const Moviegrid = (props) => {
  return (
    <div>
      {console.log(props.det.images['Poster Art'].url)}
      <div className="grid-banner-movie">
        <div className="box">
          <div className="clapper-img">
            <img src={props.det.images['Poster Art'].url} />
          </div>
        </div>
      </div>
      <div className="movies-title">{props.det.title}</div>
    </div>
  );
};

export default Moviegrid;
