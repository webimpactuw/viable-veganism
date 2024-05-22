import React from "react";
import DropDownTabs from "./dropdown";
import Carousel from "./carousel";
import './css/homepage.css';

export default function HomePage() {
    return (
        <div className="text-black">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200;300;400;600;700;800;900&family=Moulpali&display=swap" rel="stylesheet"/>
            <div className="bg-customGreen h-screen w-full flex flex-row justify-around items-center greenSection">
                <div className="w-1/2 pl-10 flex flex-col homeContent">
                    <div className="flex justify-betweem h-1/3">
                        <div>
                            <img src="leaf1.png" alt="background floating leaf" className="leafOne"/>
                        </div>
                        <div>
                            <img src="leaf3.png" alt="background floating leaf" className="leafTwo"/>
                        </div>
                    </div>
                    <div className="h-1/3">
                        <h1 className="mainHeader">Viable Veganism</h1>
                        <p className="introParagraph">
                            Viable Veganism is a student organization at UW working to promote veganism through education about the realities of the livestock industry and commercial use of animals, in general.
                        </p>
                    </div>
                    <div className="flex justify-end h-1/3 mb-20 ">
                        <img src="leaf2.png" className="leafThree"/>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center homeImage">
                    <img src="vegan_bowl.png" alt="Vegan Bowl" className="max-w-full h-auto"/>
                </div>
            </div>
            <img src="wavyGreen.png" alt="A wavy green border" className="wavyBorderOne"/>
            <div className="bg-white min-h-screen w-full flex flex-col items-center">
                <div className="whiteHeaderBox">
                    <img src="purple1.png" alt="A purple decorative background image" className="purpleImage"/>
                    <h1 className="text-5xl font-bold m-20">WHAT WE ARE</h1>
                    <div className="placeHolderDivOne"></div>
                </div>
                <div className="flex flex-row p-10 pb-0 mt-20 relative imageContainer">
                    <div className="w-1/2">
                        <img src="vegan_rice_dish.png" alt="Vegan Rice Bowl" className="riceDish"/>
                        <img src="vegan_noodle_dish.png" alt="Vegan Noodle Dish" className="noodleDish"/>
                    </div>
                    <div className="w-1/2">
                        <p className="whatWeAreText">
                            Viable Veganism is a student organization at UW working to promote veganism through education about the realities of the livestock industry and commercial use of animals, in general. We welcome both vegans and nonvegans because we believe progress occurs through mutual understanding and the willingness to better oneself over time. We frequently hold social events, such as cooking sessions or restaurant runs, and we also communicate with UW Dining about improving vegan options on campus. Overall, we believe in a world without animal cruelty.
                        </p>
                    </div>
                </div>
                <div className="faqBox">
                    <div className="placeHolderDivTwo"></div>
                    <h1 className="text-5xl font-bold m-20 faqHeader">FAQS</h1>
                    <img src="fruits1.png" alt="Background image of two fruits" className="fruitsImage"/>
                </div>
                <DropDownTabs />
                <div className="whiteHeaderBox mt-20">
                    <img src="purple1.png" alt="A purple decorative background image" className="purpleImage"/>
                    <h1 className="text-5xl font-bold m-20">MYTHS</h1>
                    <div className="placeHolderDivOne"></div>
                </div>
            </div>
            <img src="wavyTan.png" alt="A wavy tan border" className="wavyBorderOne"/>
            <div className="bg-customTan min-h-screen w-full">
                <div className="carouselContainer">
                    <Carousel />
                </div>
            </div>
        </div>
    )
}