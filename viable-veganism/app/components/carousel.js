import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

export default function Carousel() {
  const slides = [
    {
      imageUrl: 'myth1.webp',
      header: 'Myth 1',
      title: 'Vegetarianism is sufficient to eliminate the suffering of animals',
      description: 'Although avoiding meat is a start, unfortunately the reality of the livestock industry is that many animals used for non-meat purposes are still killed and are always still exploited. For example, dairy cows are forced to give birth in order to induce milk lactation, and their calves are sent to the slaughterhouse. Chickens are forced to lay eggs from which they are then separated, and they are often slaughtered as well at the ends of their lives.',
      logo: 'logo1.png',
      backgroundColor: '#D5F5DE'
    },
    {
      imageUrl: 'myth2.jpg',
      header: 'Myth 2',
      title: 'Humans are meant to eat meat and other animal products',
      description: 'Although humans have evolved to have both molars and canines, our evolutionary history does not mean we are “meant” to consume animals. Many people live plant-based lives and are quite healthy. If you still don’t believe us, look into vegan athletes such as Venus Williams, Colin Kaepernick and Alex Morgan.',
      logo: 'logo2.png',
      backgroundColor: '#FEE0FA'
    },
    {
      imageUrl: 'myth3.jpeg',
      header: 'Myth 3',
      title: 'Vegan lifestyles are expensive',
      description: 'Vegan diets can actually be cheaper than non vegan diets because vegans don’t buy meat or cheese that is often expensive. Although it is true that some plant-based substitutes can be more expensive than their animal product counterparts, naturally vegan food such as tofu, beans, and rice is relatively inexpensive and provides ingredients for a hearty meal. Vegan skincare and hygiene products are often more expensive, but strategies such as timing purchases with sales or subscribing to vegan brands can help decrease the investment. Over time, as more people become vegan, vegan products will not have to keep such high prices because there will be high enough demand for their products.',
      logo: 'logo3.png',
      backgroundColor: '#D3EEF5'
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
      border: '2px solid black',
      borderRadius: '25px',
      padding: '30px',
      margin: '0 10px',
      cursor: 'pointer'
    };
  };

  return (
    <div className="carousel-wrapper">
      <button className="custom-button left-button" onClick={goToPrevSlide} style={getButtonStyle()}>
        <img src="left-arrow.png" alt="Previous" />
      </button>
      <div className="carousel-container" style={{ backgroundColor: slides[currentSlideIndex].backgroundColor }}>
        <h1 style={{ backgroundColor: slides[currentSlideIndex].backgroundColor }}>{slides[currentSlideIndex].header}</h1>
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide flex">
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <img src={slide.imageUrl} alt={slide.title} />
                <p>{slide.description}</p>
                <img src={slide.logo} alt={slide.title} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <button className="custom-button right-button" onClick={goToNextSlide} style={getButtonStyle()}>
        <img src="right-arrow.png" alt="Next" />
      </button>
    </div>
  );
}
