import React from "react";

import { Img, Text, Line } from "components";
import Footer1 from "components/Footer1";
import { useNavigate } from "react-router-dom";

const WorksPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-sourcesanspro gap-[54px] items-center justify-start mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex flex-row md:gap-[40px] items-center justify-between ml-[164px] mr-[181px] my-[15px] w-[76%]">
            <div className="header-row ">
              <Img
                src="images/img_group642.svg"
                className="h-[50px]"
                alt="Group645"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-row sm:hidden items-start justify-between pt-[7px] w-[38%]">
              <Text
                className="common-pointer font-bold text-black_900 text-left w-[auto]"
                variant="body3"
                onClick={() => navigate("/")}
              >
                Home
              </Text>
              <Text
                className="common-pointer font-bold text-black_900 text-left w-[auto]"
                variant="body3"
                onClick={() => navigate("/about")}
              >
                About
              </Text>
              <div className="flex flex-col gap-[11px] items-center justify-start w-[auto]">
                <Text
                  className="font-bold text-left text-red_401 w-[auto]"
                  variant="body3"
                >
                  Works
                </Text>
                <div className="bg-red_401 h-[6px] rounded-[50%] w-[6px]"></div>
              </div>
              <Text
                className="common-pointer font-bold text-black_900 text-left w-[auto]"
                variant="body3"
                onClick={() => navigate("/contact")}
              >
                Contact
              </Text>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-start justify-start max-w-[1384px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="bg-green_A100 md:h-[581px] h-[646px] md:ml-[0] ml-[130px] p-[4px] relative rounded-[90px] md:w-[100%] w-[86%]">
            <div className="flex flex-col md:gap-[40px] gap-[82px] h-[100%] justify-start m-[auto] w-[auto]">
              <Text
                className="md:ml-[0] ml-[285px] text-black_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              ></Text>
              <Text
                className="font-normal leading-[40.00px] not-italic text-center text-gray_700 w-[100%]"
                variant="body2"
              >
                We have completed many projects from various companies in the
                world, we have made many of our clients feel happy and satisfied
                with the results we have provided
              </Text>
            </div>
            <div className="absolute bottom-[1%] flex inset-x-[0] items-center justify-start mx-[auto] w-[96%]">
              <div className="flex flex-col justify-start w-[100%]">
                <div className="flex flex-row sm:gap-[40px] gap-[767px] items-start justify-start md:w-[100%] w-[80%]">
                  <Img
                    src="images/img_rectangle57.svg"
                    className="h-[114px] rounded-[10px] w-[114px]"
                    alt="RectangleFiftySeven"
                  />
                  <div className="bg-deep_orange_A100 h-[14px] mb-[88px] mt-[12px] rounded-[50%] w-[14px]"></div>
                </div>
                <div className="bg-light_blue_400 h-[14px] md:ml-[0] ml-[109px] mr-[1004px] mt-[74px] rounded-[50%] w-[14px]"></div>
                <div className="flex md:flex-col flex-row md:gap-[20px] items-start justify-start md:ml-[0] ml-[26px] mt-[175px] md:w-[100%] w-[98%]">
                  <Img
                    src="images/img_group776.svg"
                    className="h-[114px] md:mt-[0] mt-[31px] w-[114px]"
                    alt="group776"
                  />
                  <Img
                    src="images/img_polygon1.svg"
                    className="h-[196px] md:ml-[0] ml-[745px] md:mt-[0] mt-[7px] rounded-[15px] w-[196px]"
                    alt="PolygonOne"
                  />
                  <div className="bg-deep_purple_800 h-[14px] mb-[189px] md:ml-[0] ml-[31px] rounded-[50%] w-[14px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[129px] mt-[100px] pt-[17px] md:w-[100%] w-[91%]">
            <div className="flex md:flex-col flex-row gap-[58px] items-center justify-start md:w-[100%] w-[59%]">
              <Text
                className="text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Latest Project
              </Text>
              <Text
                className="font-normal not-italic text-gray_700 text-left w-[auto]"
                variant="body2"
              >
                this is the last variety of projects we have worked on
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[100%]">
              <div className="md:h-[496px] h-[527px] relative md:w-[100%] w-[95%]">
                <div className="absolute bg-orange_A200 h-[496px] inset-x-[0] mx-[auto] rounded-[30px] top-[0] w-[100%]"></div>
                <div className="absolute bottom-[0] h-[482px] right-[0] md:w-[100%] w-[92%]">
                  <Img
                    src="images/img_group21.png"
                    className="absolute h-[482px] inset-y-[0] my-[auto] object-cover right-[0] w-[73%]"
                    alt="groupTwentyOne"
                  />
                  <div className="absolute flex flex-col items-start justify-start left-[0] top-[0] w-[28%]">
                    <Text
                      className="font-extrabold font-nunito text-left text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Foodie.
                    </Text>
                    <Text
                      className="font-bold font-sourcesanspro mt-[136px] text-left text-white_A700 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Launching website for Apps
                    </Text>
                    <Line className="bg-white_A700 h-[2px] mt-[68px] w-[24%]" />
                  </div>
                </div>
              </div>
              <div className="md:h-[1034px] h-[580px] sm:h-[680px] mt-[100px] relative w-[100%]">
                <div className="absolute bg-indigo_800 h-[580px] inset-y-[0] left-[0] my-[auto] rounded-[30px] w-[95%]"></div>
                <div className="absolute flex md:flex-col flex-row md:gap-[40px] items-end justify-between right-[0] top-[7%] w-[92%]">
                  <div className="flex flex-col items-start justify-start md:mt-[0] mt-[20px] md:w-[100%] w-[auto]">
                    <Text
                      className="bg-clip-text bg-gradient  font-bold text-left text-transparent w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Floops
                    </Text>
                    <Text
                      className="font-bold mt-[193px] text-left text-white_A700 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Landing page for Website Service
                    </Text>
                    <Line className="bg-white_A700 h-[2px] mt-[68px] w-[24%]" />
                  </div>
                  <Img
                    src="images/img_group790.png"
                    className="h-[456px] sm:h-[auto] object-cover md:w-[100%] w-[auto]"
                    alt="group790"
                  />
                </div>
              </div>
              <div className="bg-red_A200 h-[580px] md:h-[690px] mt-[110px] relative rounded-[30px] md:w-[100%] w-[95%]">
                <div className="flex flex-col h-[100%] items-start justify-start ml-[101px] my-[auto] w-[26%]">
                  <div className="flex flex-row gap-[16px] items-start justify-start md:w-[100%] w-[58%]">
                    <Img
                      src="images/img_group511.png"
                      className="h-[38px] md:h-[auto] object-cover w-[31%]"
                      alt="Group511"
                    />
                    <Img
                      src="images/img_insight.svg"
                      className="h-[32px] mt-[4px] w-[60%]"
                      alt="Insight"
                    />
                  </div>
                  <Text
                    className="font-bold mt-[173px] text-left text-white_A700 w-[100%]"
                    as="h4"
                    variant="h4"
                  >
                    Website for creative agency
                  </Text>
                  <Line className="bg-white_A700 h-[2px] mt-[68px] w-[24%]" />
                </div>
                <div className="absolute flex h-[100%] inset-[0] items-center justify-center m-[auto] w-[100%]">
                  <div className="h-[580px] relative w-[100%]">
                    <Img
                      src="images/img_web192021.png"
                      className="h-[580px] ml-[auto] my-[auto] object-cover rounded-[30px] w-[32%]"
                      alt="Web192021"
                    />
                    <Img
                      src="images/img_web192021_580X1181.png"
                      className="absolute h-[580px] inset-[0] justify-center m-[auto] object-cover rounded-[30px] w-[100%]"
                      alt="Web192021 One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer1 className="bg-gray_801 flex items-center justify-center mt-[110px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[50px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default WorksPage;
