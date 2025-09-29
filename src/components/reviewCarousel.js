/*Website by Divya Rao
Github Link: https://github.com/divyarao54*/
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import '../styles/reviewCarousel.css';
import reviewer1 from '../assets/reviewer-1.jpg'
import reviewer2 from '../assets/reviewer-2.jpg'
import reviewer3 from '../assets/reviewer-3.jpg'

const ReviewCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return(
    <div className='review-carousel'>
        <div className='review-title'>Student Testimonials</div>
        <Slider {...settings}>
            <div className='review-card'>
                <div className='review-card-contents'>
                    <div className='review-img-container'>
                        <img className='review-img' src={reviewer1} alt='review-image' />
                    </div>
                    <div className='review-text'>
                        <div className='stars'>⭐⭐⭐⭐⭐</div>
                        <div className='review-heading'>Inspiring Heading</div>
                        <div className='review-description'>An absolutely fantastic experience from start to finish—everything exceeded my expectations!</div>
                        <div className='reviewer-name'>- Jane Doe</div>
                    </div>
                </div>
            </div>
            <div className='review-card'>
                <div className='review-card-contents'>
                    <div className='review-img-container'>
                        <img className='review-img' src={reviewer2} alt='review-image' />
                    </div>
                    <div className='review-text'>
                        <div className='stars'>⭐⭐⭐⭐⭐</div>
                        <div className='review-heading'>Inspiring Heading</div>
                        <div className='review-description'>An absolutely fantastic experience from start to finish—everything exceeded my expectations!</div>
                        <div className='reviewer-name'>- John Doe</div>
                    </div>
                </div>
            </div>
            <div className='review-card'>
                <div className='review-card-contents'>
                    <div className='review-img-container'>
                        <img className='review-img' src={reviewer3} alt='review-image' />
                    </div>
                    <div className='review-text'>
                        <div className='stars'>⭐⭐⭐⭐⭐</div>
                        <div className='review-heading'>Inspiring Heading</div>
                        <div className='review-description'>An absolutely fantastic experience from start to finish—everything exceeded my expectations!</div>
                        <div className='reviewer-name'>- Jane Doe</div>
                    </div>
                </div>
            </div>
        </Slider>
    </div>
  );
};

export default ReviewCarousel;