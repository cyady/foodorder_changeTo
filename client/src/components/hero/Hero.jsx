import React from 'react'
import classes from './hero.module.css'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Homeimg from '../../assets/introimg.png'  // 이전에 사용하던 이미지 경로

const Hero = () => {
  return (
    <section style={{height: '100vh'}} id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}> 증권투자연구회 </h2>
          <p className={classes.firstMsg}>Ajou Securities Investment Academy 'ASIA'</p>
          <p className={classes.secondMsg}>
          증권투자연구회는
          자본의 독립을 위해 노력합니다.
          </p>
          <p className={classes.desc}>
          증권투자연구회는 1988년 개설되어 국내에서 두 번째로 설립된 비법인 학술단체로 아주대 최고(最古)이자 최고(最高)의 소학회입니다.
          주요 사업으로는 지역사회와 학생들에게 공헌하기 위해 한 학기당 8회 정기수업을 진행하고있으며, MT, 홍보활동, 봉사활동 등의 다양한 활동을 진행중에 있습니다.
          </p>

          <p className={classes.desc}>
          증권투자연구회의 최종적인 목표는 이러한 사회공헌 활동을 통해 긍정적으로 성장해나가는 커뮤니티를 만들고 발전시키는 것 입니다.
          현재 증권투자연구회 커뮤니티는 은행, 증권사, 자산운용사, 금융사, 회계법인, 기타등등 여러 방면으로 뻗어있으며
          더욱 성장하여 증권투자연구회가 하나의 증명서이자 하나의 자부심으로 남게되는 커뮤니티가 되도록 하는 목표를 가지고 있습니다.
          </p>
          <div className={classes.buttons}>
            <button className={classes.buttonSee}><a href='#foods'> 시작하기 <AiOutlineArrowDown/> </a></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={Homeimg} alt="" className={classes.Homeimg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero
