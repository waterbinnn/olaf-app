import React from 'react';
import './TodoItem.scss';

const TodoItem = () => {
  return (
    <div className="list-item">
      <div className="item-top-wrapper">
        <button className="check-box" type="button"></button>
        <strong className="item-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, libero
          tempore aliquid optio nulla repellat vitae sapiente hic! Cum, ipsa.
        </strong>
        <button className="btn-delete" type="button">
          ✕
        </button>
      </div>
      <div className="item-bottom-wrapper">
        <p className="item-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          doloribus praesentium rem repudiandae blanditiis perferendis? Minus,
          debitis quidem dolore, voluptatum sint ratione hic veniam provident
          repellendus voluptate, blanditiis architecto molestias?
        </p>
      </div>
    </div>
  );
};

export default TodoItem;
