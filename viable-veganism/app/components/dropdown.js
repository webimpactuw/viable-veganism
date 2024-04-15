import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function DropDownTabs() {
  const accordionStyle = {
    padding: "40px",
    borderRadius: "20px",
    marginBottom: "10px",
    marginLeft: "100px",
    marginRight: "100px",
  };
  
  

  return (
    <Accordion variant="splitted">
      <AccordionItem key="1" aria-label="Dropdown 1" title="How do you get enough protein as a vegan?" className="font-bold text-xl bg-customPurple" style={accordionStyle}>
        <div className="font-normal leading-loose pt-5">
          There are plenty of high protein plant-based protein sources. Tofu is a common and versatile option, and can even serve as an ingredient in plant-based cheeses and egg recipes. Other options include quinoa, beans, nuts, seeds, and nut butters. As for products, there are many protein powders and bars that can supplement unprocessed protein sources. For those craving the flavor of animal products, plant-based meat burgers also pack in the protein.
        </div>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Dropdown 2" title="Do you think individuals going vegan actually has a positive impact?" className="font-bold text-xl bg-customPurple" style={accordionStyle}>
        <div className="font-normal leading-loose pt-5">
          Yes, even though the exploitation of animals for animal husbandry and research is systemic, industries making use of animals rely on the demand from consumers. If our demand is reduced, they will respond by reducing supply until eventually the industry becomes obsolete.
        </div>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Dropdown 3" title="How do you make sure you get enough vitamins and minerals as a vegan?" className="font-bold text-xl bg-customPurple" style={accordionStyle}>
        <div className="font-normal leading-loose pt-5"> 
          Many brands of supplements offer certified vegan versions of their products. It should not be assumed that supplements are vegan if not labeled as such, but most common grocery stores and pharmacies sell vegan vitamins/minerals such as calcium, B12, Vitamin D3, iron, etc. that can be low in a plant-based diet. 
        </div>
      </AccordionItem>
      <AccordionItem key="4" aria-label="Dropdown 4" title="What is the difference between veganism and vegetarianism?" className="font-bold text-xl bg-customPurple" style={accordionStyle}>
        <div className="font-normal leading-loose pt-5">
          Traditionally, vegetarianism refers to the avoidance of meat, while veganism avoids all animal products. However, veganism and vegetarianism is not viewed the same way by everybody. For example, some people consider honey to be vegan as long as it is harvested from sustainable beehives, while others believe honey farms exploit bees and should be avoided.
        </div>
      </AccordionItem>
      <AccordionItem key="5" aria-label="Dropdown 5" title="But what if I just love the taste of meat?" className="font-bold text-xl bg-customPurple" style={accordionStyle}>
        <div className="font-normal leading-loose pt-5">
          The demand for plant-based meat analogs is rising and there are now several mainstream meat substitutes that attempt to emulate the taste of meat. The same is true for plant-based cheese and eggs. If nothing else, you can rest assured that the market is expanding and actively working on matching the flavor and texture combinations many love about animal products.
        </div>
      </AccordionItem>
    </Accordion>
  );
}
