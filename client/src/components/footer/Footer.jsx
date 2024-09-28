import React from 'react';
import classes from './footer.module.css';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.wrapper}>
        {/* 문의 정보 및 설명 문구 */}
        <div className={classes.textWrapper}>
          <p className={classes.contact}>문의: ajouinvest@google.com</p>
          <p className={classes.description}>
            증권투자연구회는 지식 공유와 금융 지혜를 나누는 것을 목표로 하고 있습니다.
            함께 성장하며 배워나가는 커뮤니티를 만들어가고자 합니다.
          </p>
        </div>

        {/* 소셜 미디어 아이콘과 링크 */}
        <div className={classes.socialIcons}>
          <a href="https://www.instagram.com/lgelectronics_kr/" target="_blank" rel="noopener noreferrer">
            <AiOutlineInstagram />
          </a>
          <a href="https://open.kakao.com/o/sGhnYdYb" target="_blank" rel="noopener noreferrer">
            <BsChatDots />
          </a>
        </div>

        {/* 저작권 정보 */}
        <div className={classes.copyRight}>
          © 2024 증권투자연구회. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
