import React from 'react';
import { useHistory } from 'react-router-dom';
import './grid.css';

const Grid = (props) => {
  const history = useHistory();

  return (
    <div>
      <div
        className="grid-banner"
        onClick={() => {
          if (props.title === 'Movies') {
            history.push('/movies');
          } else {
            history.push('/series');
          }
        }}
      >
        <div className="box">
          <div className="clapper-img">
            <img src="images/clapper.svg" />
          </div>
          <h2>{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Grid;
