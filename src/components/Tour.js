import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h3>{name}</h3>
          <h3 className="tour-price">${price}</h3>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 220)}...`}
          <button onClick={() =>setReadMore(!readMore)}>
            {readMore ? 'Read less' : 'Read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
