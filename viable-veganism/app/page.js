'use client'
import React from 'react';
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import { useClient, ClientComponent } from 'next/client'; // Import useClient and ClientComponent
import Carousel from './components/carousel';

const Resources = () => {
  //useClient();
  const BlueRectangle = () => {
    const rectangleStyle = {
      width: '80vw',
      backgroundColor: '#CFE2FA',
      borderRadius: '25px',
      display: 'flex',
      alignItems: 'center',
      position: 'relative', // Set position to relative
    };
  
    const imageStyle = {
       borderRadius: '25px 0px 0px 25px'
    };
  
    const textStyle = {
      fontFamily: "Martel Sans, sans-serif",
      fontSize: 20,
      color: 'black',
      marginBottom: '20px', 
      padding: '20px 30px',
    };
  
    const ViewRecipebuttonStyle = {
      backgroundColor: 'white',
      color: 'black',
      padding: '5px 20px',
      borderRadius: '25px',
      border: 'none',
      fontWeight: 'bold', // Make the text bold
      cursor: 'pointer',
      position: 'absolute',
      bottom: '20px', // Position the button at the bottom of the rectangle
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Add a bit of shadow
      marginLeft: '250px',
      fontFamily: "Martel Sans, sans-serif",
    };    

    const textButtStyle = {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "Martel Sans, sans-serif",
    };

    const RecipeTextStyle = {
      color: 'black',
      fontSize: 42,
      fontWeight: 'bold',
      padding: '25px 25px 0px 25px',
      fontFamily: "Martel Sans, sans-serif",
    };
  
    return (
      <div style={rectangleStyle}>
        <Image src="/images/mealOfWeek.png" width={600} height={300} style={imageStyle} />

        <div style={textButtStyle}>
          <h1 className="font-martel-sans" style={RecipeTextStyle}  >Miso Carbonara</h1>
          <p style={textStyle}>A mound comforting, carb-y, deliciousness – this vegan carbonara is creamy, savoury, salty, only uses a few ingredients, and is incredibly quick and easy to make. Ideal for a speedy no-fuss dinner that tastes like you’ve made far more of an effort.</p>
          <button style={ViewRecipebuttonStyle}>View Recipe</button>
        </div>
      </div>
    );
  };

  const ViewMore = () => {
    const ViewMoreButtonStyle = {
      backgroundColor: 'blue',
      color: 'white',
      padding: '5px 50px',
      borderRadius: '25px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Add a bit of shadow
      marginTop: '20px',
    };

    return (
      <a href="https://www.instagram.com/viableveganismuw/?theme=dark" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <button style={ViewMoreButtonStyle}>View More</button>
      </a>
    );
  };

  return (
    
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', margin: 0, padding: 0 }}>
       <link rel="preconnect" href="https://fonts.googleapis.com"/>
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
       <link href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet"></link>
      <Header />

      <div className="containerTitlePage" style={{ position: "relative", margin: 0, padding: 0 }}>
        <Image src="/images/mealbackground.png" width={1300} height={900} style={{marginBottom: "100px", paddingTop:"0"}} className="giraffe" />
        <div className="pageName" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontFamily: "Martel Sans, sans-serif", fontSize: 64 }}>MEALS</div>
      </div>

      <div className="recipestitle" style={{ position: "relative" }}>
        <div className="recipestxt" style={{ top: "50%", left: "50%", transform: "translate(-325%, -50%)", fontFamily: "Martel Sans, sans-serif", fontSize: 36, color: 'black', fontWeight: 'bold' }}>Recipes</div> 
      </div>

      <div className="recipes" style={{ position: "relative" }}>
        <div className="recommendationtxt" style={{ top: "50%", left: "50%", transform: "translate(0%, -25%)", fontFamily: "Martel Sans, sans-serif", fontSize: 36, color: 'black' }}>This week's recommendation</div> 
      </div>

      <BlueRectangle />
      <ViewMore />

      <div className="containerRestaurantsPage" style={{ position: "relative" }}>
        <Image src="/images/restaurantspic.png" width={1400} height={1000} className=" restBg" />
        
         <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%" }}>
         <div className="resttxt" style={{  position: "absolute", top: -50, left: 100, fontFamily: "Martel Sans, sans-serif", fontSize: 36, color: 'black', fontWeight: 'bold' }}>Restaurants</div> 
          <Carousel />
            <div style={{ marginLeft: "43%" }}>
          <ViewMore />
        </div>
        </div>
      
      </div>

      <Footer />
    </div>
  );
}

export default Resources;
