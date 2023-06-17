import React from "react";
import { Text, Button, Img } from "components";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience-container">
        <div className="experience-card">
          <Button className="cut-button" shape="icbRoundedBorder10" size="smIcn" variant="icbOutlineRed3007c">
            <Img src="images/img_cut.svg" alt="cut" className="cut-icon" />
          </Button>
          <div className="experience-details">
            <Text className="experience-role" variant="h6">UIUX Design</Text>
            <Text className="experience-company" variant="body5">We can make your website or application design better with this service</Text>
          </div>
        </div>

        <div className="experience-card bg-white_A700">
          <Button className="settings-button" shape="icbRoundedBorder10" size="smIcn" variant="icbOutlineCyan40087">
            <Img src="images/img_settings.svg" alt="settings" className="settings-icon" />
          </Button>
          <div className="experience-details">
            <Text className="experience-role" variant="h6">Website Dev</Text>
            <Text className="experience-company" variant="body5">Make your business more leverage by having an optimal website and we are ready to help</Text>
          </div>
        </div>

        <div className="experience-card">
          <Button className="lightbulb-button" shape="icbRoundedBorder10" size="smIcn" variant="icbOutlineLime80087">
            <Img src="images/img_lightbulb.svg" alt="lightbulb" className="lightbulb-icon" />
          </Button>
          <div className="experience-details">
            <Text className="experience-role" variant="h6">Branding & Product</Text>
            <Text className="experience-company" variant="body5">We can also help you in the affairs of product branding so that your products can be more riveting</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
