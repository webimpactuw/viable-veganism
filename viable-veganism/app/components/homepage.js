import React from "react";

export default function HomePage() {
    return (
        <div className="text-black">
            <div className="bg-customGreen h-screen w-full flex flex-row justify-around items-center">
                <div class="w-1/2 pl-10">
                    <h1 className="text-7xl p-4">Viable Veganism</h1>
                        <p className="text-2xl p-4 leading-10">
                            Viable Veganism is a student organization <br />at UW working to promote veganism <br />
                            through education about the realities of <br /> the livestock industry and commercial use <br />
                            of animals, in general.
                        </p>
                </div>
                <div class="w-1/2">
                    <img src="vegan_bowl.png" alt="Vegan Bowl"/>
                </div>
            </div>
            <div className="bg-white min-h-screen w-full flex flex-col items-center">
                <div className="mt-20">
                    <h1 className="text-5xl font-bold m-20">WHAT WE ARE</h1>
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

                    <div class="w-1/2">
                        <p className="text-3xl pl-10 pr-10 ml-10 mr-10 leading-loose">
                            Viable Veganism is a student organization at UW working to promote veganism through education about the realities of the livestock industry and commercial use of animals, in general. We welcome both vegans and nonvegans because we believe progress occurs through mutual understanding and the willingness to better oneself over time. We frequently hold social events, such as cooking sessions or restaurant runs, and we also communicate with UW Dining about improving vegan options on campus. Overall, we believe in a world without animal cruelty.
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold m-20">FAQS</h1>
                </div>
                <div className="bg-customPurple p-10 rounded-3xl w-5/6 mt-5">
                    <p className="text-2xl font-bold">How do you get enough protein as a vegan?</p>
                </div>
                <div className="bg-customPurple p-10 rounded-3xl w-5/6 mt-5">
                    <p className="text-2xl font-bold">Do you think individuals going vegan actually has a positive impact?</p>
                </div>
                <div className="bg-customPurple p-10 rounded-3xl w-5/6 mt-5">
                    <p className="text-2xl font-bold">How do you make sure you get enough vitamins and minerals as a vegan?</p>
                </div>
                <div className="bg-customPurple p-10 rounded-3xl w-5/6 mt-5">
                    <p className="text-2xl font-bold">What is the difference between veganism and vegetarianism?</p>
                </div>
                <div className="bg-customPurple p-10 rounded-3xl w-5/6 mt-5 mb-10">
                    <p className="text-2xl font-bold">But what if I just love the taste of meat?</p>
                </div>
                <div className="mt-20">
                    <h1 className="text-5xl font-bold m-20">MYTHS</h1>
                </div>
            </div>
        </div>
    )
}