import { client } from '@/sanity/lib/client';
import React from 'react';
import Image from "next/image";
import Carousel from './components/carousel';
import { urlForImage } from '@/sanity/lib/image';
export const revalidate = 5;

export default async function Resources() {
  async function getReceipe() {
    const query = `*[_type == "receipe"]`;
    const receipe = await client.fetch(query);
    return receipe;
  }

  const allReceipe = await getReceipe();
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
        allReceipe.map((receipe) => (
        <div key={receipe._id} style={rectangleStyle}>
          <Image src={urlForImage(receipe.image)} width={600} height={300} style={imageStyle} alt="meal of the week"/>

        <div style={textButtStyle}>
          <h1 className="font-martel-sans" style={RecipeTextStyle}  >{receipe.dish}</h1>
          <p style={textStyle}>{receipe.description}</p>
          <a href={receipe.link} target="_blank"><button style={ViewRecipebuttonStyle}>View Recipe</button></a>
        </div>
        </div>
        ))
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
      <div className="containerTitlePage" style={{ position: "relative", margin: 0, padding: 0 }}>
        <Image src="/ankith/images/mealbackground.png" width={1300} height={900} style={{marginBottom: "100px", paddingTop:"0"}} className="giraffe" alt="meal background"/>
        <div className="pageName" style={{ color:"white", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontFamily: "Martel Sans, sans-serif", fontSize: 64 }}>MEAL</div>
      </div>

      <div className="recipestitle" style={{ position: "relative" }}>
        <div className="recipestxt" style={{ top: "50%", left: "50%", transform: "translate(-325%, -50%)", fontFamily: "Martel Sans, sans-serif", fontSize: 36, color: 'black', fontWeight: 'bold' }}>Recipes</div>
      </div>

      <div className="recipes" style={{ position: "relative" }}>
        <div className="recommendationtxt" style={{ top: "50%", left: "50%", transform: "translate(0%, -25%)", fontFamily: "Martel Sans, sans-serif", fontSize: 36, color: 'black' }}>This week&apos;s recommendation</div>
      </div>

      <BlueRectangle />
      <ViewMore />

      <div className="containerRestaurantsPage" style={{ position: "relative" }}>
        <Image src="/ankith/images/restaurantspic.png" width={1400} height={1000} className=" restBg" alt="restaurants"/>

         <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "100%" }}>
         <div className="resttxt" style={{  position: "absolute", top: -50, left: 100, fontFamily: "Martel Sans, sans-serif", fontSize: 36, color: 'black', fontWeight: 'bold' }}>Restaurants</div>
          <Carousel />
            <div style={{ marginLeft: "43%" }}>
          <ViewMore />
        </div>
        </div>

      </div>
    </div>
  );
}

