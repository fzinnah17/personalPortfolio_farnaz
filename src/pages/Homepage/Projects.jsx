import React from "react";
import { Text, Button, Img } from "components";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <div className="project-card">
          <Button className="cut-button" shape="icbRoundedBorder10" size="smIcn" variant="icbFillRed401">
            <Img src="images/img_group683.svg" alt="group683" className="group683-icon" />
          </Button>
          <div className="project-details">
            <Text className="project-text" variant="body3">
              I am very satisfied with the work on the Nexus team.
              good service, satisfying work results and can also
              increase my business turnover. Thank you so much to
              the Nexus team.
            </Text>
            <div className="project-info">
              <Img src="images/img_rectangle52.png" alt="RectangleFiftyTwo" className="project-image" />
              <div className="project-info-details">
                <Text className="project-name" variant="body2">John Richard</Text>
                <Text className="project-role" variant="body5">Businessman</Text>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <Button className="cut-button" shape="icbRoundedBorder10" size="smIcn" variant="icbFillRed401">
            <Img src="images/img_group684.svg" alt="group684" className="group684-icon" />
          </Button>
          <div className="project-details">
            <Text className="project-text" variant="body3">
              since branding with the oracle team i feel my business
              has a very fast and good development, everything also
              always goes through a process of discussion that is
              really valid
            </Text>
            <div className="project-info">
              <Img src="images/img_rectangle52_49X49.png" alt="RectangleFiftyTwo One" className="project-image" />
              <div className="project-info-details">
                <Text className="project-name" variant="body2">Andrew Smith</Text>
                <Text className="project-role" variant="body5">Founder Ulala</Text>
              </div>
            </div>
          </div>
        </div>

        <div className="project-card">
          <Button className="cut-button" shape="icbRoundedBorder10" size="smIcn" variant="icbFillRed401">
            <Img src="images/img_group684.svg" alt="group684" className="group684-icon" />
          </Button>
          <div className="project-details">
            <Text className="project-text" variant="body3">
              I can say, this team is indeed extraordinarily
              perfect. I will do a lot of teamwork with this team
              next time. I do not hesitate to cooperate because the
              results are very satisfying
            </Text>
            <div className="project-info">
              <Img src="images/img_rectangle52_49X49.png" alt="RectangleFiftyTwo Two" className="project-image" />
              <div className="project-info-details">
                <Text className="project-name" variant="body2">Steve John</Text>
                <Text className="project-role" variant="body5">CEO rumahku.ox</Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
