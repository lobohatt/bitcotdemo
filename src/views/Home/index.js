import React from 'react';
import Grid from '../../components/atoms/grids/grid';
import './index.css';

const Home = () => {
  const data = ['Movies', 'Series'];

  return (
    <div className="home-banner">
      <div className="title">
        <h1>Popular Tiles</h1>
      </div>
      <div className="home-grid">
        {data.map((title) => (
          <Grid title={title} />
        ))}
      </div>
    </div>
  );
};

export default Home;
