/*Website Design by Divya Rao
Github Link: https://github.com/divyarao54*/
import React from 'react';
import heroImg from '../assets/hero-img.jpg';
import heroImg2 from '../assets/hero-img-2.jpg';
import heroImg3 from '../assets/hero-img-3.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../styles/hero.css';

const Hero = () => {
  var settings = {
    fade: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    <div className='hero-container'>
      <Slider {...settings}>
        <div className='hero-section'>
          <div className='hero-img-container'>
              <img src={heroImg} className='hero-img' alt='hero-img'/>
          </div>
          <div className='hero-text'>
              <div className='hero-title'>Experience some text</div>
              <div className='hero-tagline'>This is a tagline</div>
          </div>
        </div>
        <div className='hero-section'>
          <div className='hero-img-container'>
              <img src={heroImg2} className='hero-img' alt='hero-img'/>
          </div>
          <div className='hero-text'>
              <div className='hero-title'>Experience some text</div>
              <div className='hero-tagline'>This is a tagline</div>
          </div>
        </div>
        <div className='hero-section'>
          <div className='hero-img-container'>
              <img src={heroImg3} className='hero-img' alt='hero-img'/>
          </div>
          <div className='hero-text'>
              <div className='hero-title'>Experience some text</div>
              <div className='hero-tagline'>This is a tagline</div>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Hero