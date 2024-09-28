import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './foodCatalog.module.css';

const FoodCatalog = () => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const location = useLocation();
  const categoryEndpoint = location.pathname.split('/')[2];  // URL에서 category 추출
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchPostsByCategory = async () => {
      try {
        const res = await fetch(`http://localhost:5000/product?category=${categoryEndpoint}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });

        if (!res.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await res.json();
        setFilteredPosts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setFilteredPosts([]); // 오류 발생 시 빈 배열로 설정
      }
    };
    fetchPostsByCategory();
  }, [categoryEndpoint, token]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {filteredPosts.length !== 0 && <h2 className={classes.title}>Posts in {categoryEndpoint}</h2>}
        <div className={classes.foods}>
          {filteredPosts.length !== 0 ? (
            filteredPosts.map((post) => (
              <Link to={`/post/${post._id}`} key={post._id} className={classes.food}>
                <div className={classes.imgContainer}>
                  <img src={`http://localhost:5000/images/${post.img}`} alt={post.title} className={classes.foodImg} />
                </div>
                <div className={classes.foodDetails}>
                  <h4 className={classes.foodTitle}>{post.title}</h4>
                </div>
              </Link>
            ))
          ) : (
            <h1 className={classes.noQuantity}>No posts in {categoryEndpoint} right now</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCatalog;
