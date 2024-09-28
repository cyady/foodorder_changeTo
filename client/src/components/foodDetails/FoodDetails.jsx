import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import classes from './foodDetails.module.css';

const PostDetails = () => {
  const [postDetails, setPostDetails] = useState(''); // 게시글 데이터 처리 상태
  const { id } = useParams(); // URL에서 게시글 ID 추출
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchPostDetails = async () => {
      const res = await fetch(`http://localhost:5000/product/find/${id}`, {
        headers: {
           "Authorization": `Bearer ${token}`,
        },
     });
     
      const data = await res.json();
      setPostDetails(data);
    };

    fetchPostDetails();
  }, [id, token]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
        <img src={`http://localhost:5000/uploads/${postDetails?.img}`} alt={postDetails?.title} />
        </div>
        <div className={classes.right}>
          <h2 className={classes.title}>{postDetails?.title}</h2>
          <div className={classes.category}>
            <h3>Category: </h3>
            <span className={classes.categoryName}>{postDetails?.category}</span>
          </div>
          <div className={classes.postDesc}>
            <div>Description: </div>
            <p>{postDetails?.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
