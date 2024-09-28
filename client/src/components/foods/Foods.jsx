import React from 'react';
import classes from './foods.module.css';
import { categories } from '../../data/data';
import { Link } from 'react-router-dom';

const Foods = () => {
  return (
    <section id="foods" className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>증권투자연구회 활동 목록</h2>
        <div className={classes.foods}>
          {Array.isArray(categories) && categories.length > 0 ? (
            categories.map((category) => (
              <Link to={`/category/${category.name}`} key={category.id} className={classes.food}>
                <h4>{category.name}</h4>
                <div className={classes.imgContainer}>
                  <img src={category.img} alt={`${category.name} 이미지`} />
                </div>
              </Link>
            ))
          ) : (
            <p>활동 목록이 없습니다.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Foods;
