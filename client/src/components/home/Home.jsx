import React from 'react'
import  Hero from '../hero/Hero'
import classes from './home.module.css'
import illustration1 from '../../assets/male-delivery-guy-riding-scooter.svg'
import illustration2 from '../../assets/delivery-location.svg'
import illustration3 from '../../assets/deliveryman-with-pizza.svg'
import Foods from '../foods/Foods'
import Newslatter from '../newslatter/Newslatter'


const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        
        <Foods />
        <Newslatter />

      </div>
    </div>
  )
}

export default Home