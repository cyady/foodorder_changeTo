import React from 'react';
import { Link } from 'react-router-dom'; // react-router-dom의 Link 사용
import classes from './navbar.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/authSlice';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth); // 로그인 상태 확인

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={`${classes.container} ${isScrolled && classes.scrolled}`}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/' className={classes.title}>
            증권투자연구회
          </Link>
        </div>
        <div className={classes.center}>
          <ul className={classes.list}>
            <li className={classes.listItem}>
              <Link to="/#intro">Intro</Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/#newslatter">Contacts</Link>
            </li>
            <li className={classes.listItem}>
              <Link to="/#foods">Contents</Link>
            </li>
            {token && (
              <li className={classes.listItem}>
                <Link to='/create'>Create</Link>
              </li>
            )}
          </ul>
        </div>
        <div className={classes.right}>
          {token ? (
            <>
              <button onClick={handleLogout} className={classes.logout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
