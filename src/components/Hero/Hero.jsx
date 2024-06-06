import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexBetween hero-container">
        {/* left Section */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1 initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring"
              }}
            >Discover <br />
              Most Suitable <br />
              Property</motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </div>

          <div className="search-bar">
            <HiLocationMarker color='var(--blue)' />
            <input type="text" name="" id="" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats" >
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8600} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={195} end={220} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={5} end={21} duration={4} />
                <span>+</span>
              </span>
              <span className='secondaryText'>Award Winning</span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ y: "7rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring"
            }}
            className="image-container">
            <img src="./hero-image.jpg" alt="" />
          </motion.div>
        </div>
      </div>
    </section >
  )
}

export default Hero