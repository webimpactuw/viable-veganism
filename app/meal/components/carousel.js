import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

export default function Carousel() {
  const slides = [
    {
      imageUrl: "/ankith/images/carousel_images/flying apron.png",

      header: 'Flying Apron',
    },
    {
      imageUrl: '/ankith/images/carousel_images/wayward cafe.png',
      header: 'Wayward Cafe',
    },
    {
      imageUrl: '/ankith/images/carousel_images/life on mars.png',
      header: 'Life on Mars',
    },
    {
      imageUrl: '/ankith/images/carousel_images/arayasplace.png',
      header: 'Araya\'s Place',
    },
    {
      imageUrl: '/ankith/images/carousel_images/menya.png',
      header: 'Menya\'s Noodles',
    },
    {
      imageUrl: '/ankith/images/carousel_images/dough_joy.png',
      header: 'Dough Joy',
    },
  ];

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '33%',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '10%',
        }
      }
    ],
    afterChange: (index) => {
      setCurrentSlideIndex(index);
    }
  };

  const goToPrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const getButtonStyle = () => {
    return {
      backgroundColor: slides[currentSlideIndex].backgroundColor,
      borderRadius: '25px',
      padding: '30px',
      margin: '0 10px',
      cursor: 'pointer'
    };
  };

  return (
    <div className="carousel-wrapper">
      <button className="custom-button left-button" onClick={goToPrevSlide}>
        <img src="/ankith/images/carousel_images/left-image.png" alt="Previous" />
      </button>
      <div className="carousel-container">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div className="slide-content">
                <div className="rounded-image-wrapper">
                  <img className="rounded-image" src={slide.imageUrl} alt={slide.header} style={{paddingBottom: "0", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}}/>
                  <img className='whiteRect' src="/ankith/images/whiterect.png" alt="blank" width={300} style={{borderRadius: "0 0 25px 25px", paddingTop: "0", marginTop: "0", position:"relative", zIndex: "1"}}/>
                  <h3 style={{ fontSize: '18px', textAlign: 'center', position:"relative", zIndex: "10", bottom: "110px", left: "10px"}}>{slide.header}</h3>
                </div>



                <img src={slide.logo} alt={slide.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button className="custom-button right-button" onClick={goToNextSlide}>
        <img src="/ankith/images/carousel_images/right-image.png" alt="Next" />
      </button>
    </div>
  );
}