import React from "react";
import DropDownTabs from "./dropdown";
import Carousel from "./carousel";
import './homepage.css';

export default function HomePage() {
    return (
        <div className="text-black">
            <div className="bg-customGreen h-screen w-full flex flex-row justify-around items-center">
                <div className="w-1/2 pl-10 flex flex-col ">
                    <div className="flex justify-betweem h-1/3">
                        <div>
                            <img src="leaf1.png" alt="background floating leaf" className="leafOne"/>
                        </div>
                        <div>
                            <img src="leaf3.png" alt="background floating leaf" className="leafTwo"/>
                        </div>
                    </div>
                    <div className="h-1/3">
                        <h1 className="text-7xl pl-4 pb-4">Viable Veganism</h1>
                        <p className="introParagraph">
                            Viable Veganism is a student organization at UW working to promote veganism through education about the realities of the livestock industry and commercial use of animals, in general.
                        </p>
                    </div>
                    <div className="flex justify-end h-1/3 mb-20 ">
                        <img src="leaf2.png" className="leafThree"/>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <img src="vegan_bowl.png" alt="Vegan Bowl" className="max-w-full h-auto"/>
                </div>
            </div>




            <div className="bg-white min-h-screen w-full flex flex-col items-center">
                <div className="whiteHeaderBox">
                    <img src="purple1.png" alt="A purple decorative background image" className="purpleImage"/>
                    <h1 className="text-5xl font-bold m-20">WHAT WE ARE</h1>
                    <div className="placeHolderDivOne"></div>
                </div>
                <div className="flex flex-row p-10 relative">
                    <div className="w-1/2">
                        <div>
                            <img src="vegan_rice_dish.png" alt="Vegan Rice Bowl" class="w-5/6 h-auto"/>
                        </div>
                        <div>
                            <img src="vegan_noodle_dish.png" alt="Vegan Noodle Dish" class="w-5/6 h-auto transform translate-x-20 -translate-y-20"/>
                        </div>
                    </div>

                    <div className="w-1/2">
                        <p className="text-3xl pl-10 pr-10 ml-10 mr-10 leading-loose">
                            Viable Veganism is a student organization at UW working to promote veganism through education about the realities of the livestock industry and commercial use of animals, in general. We welcome both vegans and nonvegans because we believe progress occurs through mutual understanding and the willingness to better oneself over time. We frequently hold social events, such as cooking sessions or restaurant runs, and we also communicate with UW Dining about improving vegan options on campus. Overall, we believe in a world without animal cruelty.
                        </p>
                    </div>
                </div>
                <div className="faqBox">
                    <div className="placeHolderDivTwo"></div>
                    <h1 className="text-5xl font-bold m-20">FAQS</h1>
                    <img src="fruits1.png" alt="Background image of two fruits" className="fruitsImage"/>
                </div>
                <DropDownTabs />
                <div className="whiteHeaderBox">
                    <img src="purple1.png" alt="A purple decorative background image" className="purpleImage"/>
                    <h1 className="text-5xl font-bold m-20">MYTHS</h1>
                    <div className="placeHolderDivOne"></div>
                </div>
                <Carousel />
            </div>
        </div>
    )
}