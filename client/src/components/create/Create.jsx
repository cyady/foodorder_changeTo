import React from 'react';
import classes from './create.module.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("donors"); // 기본 카테고리 설정
  const [image, setImage] = useState("");
  
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCloseImg = () => {
    setImage('');
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      // 게시글 정보 추가
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("category", category);

      // 이미지 정보 추가
      if (image) {
        formData.append("image", image); // 파일만 추가 (multer가 처리)
      }

      // 게시글과 이미지 함께 업로드
      const res = await fetch(`https://foodorder-changeto-ajouinvest.onrender.com/product`, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${token}`, // 토큰은 필요하지만 Content-Type은 자동 설정
        },
        body: formData, // formData 사용
      });

      if (!res.ok) {
        throw new Error('Post creation failed');
      }

      const food = await res.json();
      navigate(`/category/${food.category}/${food._id}`); // 게시글 상세 페이지로 이동
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Create Post</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className={classes.inputWrapper}>
            <label>Title: </label>
            <input type="text"
              placeholder='Title...'
              className={classes.input}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Description: </label>
            <textarea
              placeholder='Write your post...'
              className={classes.textarea} // 넓은 description 입력란
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          <div className={classes.inputWrapper}>
            <label>Category: </label>
            <select
              className={classes.select} // 드롭다운 스타일
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="donors">Donors</option>
              <option value="investment-reports">Investment Reports</option>
              <option value="achievements">Achievements</option>
              <option value="history">History</option>
            </select>
          </div>
          <div className={classes.inputWrapperImage}>
            <label htmlFor="image" className={classes.uploadButton}>Image: <span>Upload here</span></label>
            <input type="file"
              id="image"
              className={classes.input}
              onChange={onChangeFile}
              style={{ display: 'none' }}
            />
            {image && <p className={classes.imageName}>{image.name} <AiOutlineCloseCircle onClick={handleCloseImg} className={classes.closeIcon} /></p>}
          </div>

          <div className={classes.buttonWrapper}>
            <button type="submit" className={classes.submitBtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
