import React from "react";

import { Img, Text, Button, List } from "components";
import Footer from "components/Footer";
import { useNavigate } from "react-router-dom";

const HomepagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-sourcesanspro gap-[54px] items-center justify-start mx-[auto] w-[100%]">
        <header className="flex items-center justify-center md:px-[20px] w-[100%]">
          <div className="flex flex-row md:gap-[40px] items-center justify-between ml-[164px] mr-[181px] my-[15px] w-[76%]">
            <div className="header-row ">
              <Img
                src="/images/fz-low-resolution-color-logo-transparent.png"
                className="h-[50px]"
                alt="Group642"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-row sm:hidden items-start justify-between pl-[7px] pt-[7px] w-[40%]">
              <div className="flex flex-col gap-[10px] items-center justify-start ml-[18px] w-[auto]">
                <Text
                  className="font-bold text-left text-red_401 w-[auto]"
                  variant="body3"
                >
                  Home
                </Text>
                <div className="bg-red_401 h-[6px] rounded-[50%] w-[6px]"></div>
              </div>
              <Text
                className="common-pointer font-bold text-black_900 text-left w-[auto]"
                variant="body3"
                onClick={() => navigate("/about")}
              >
                About
              </Text>
              <Text
                className="common-pointer font-bold text-black_900 text-left w-[auto]"
                variant="body3"
                onClick={() => navigate("/works")}
              >
                Works
              </Text>
              <Text
                className="common-pointer font-bold text-black_900 text-left w-[auto]"
                variant="body3"
                onClick={() => navigate("/contact")}
              >
                Contact
              </Text>

              <a
                href="https://drive.google.com/file/d/1vw2aeYxvKTqKue3OSG-MW7-0sHUwYIwx/view?usp=sharing"
                target="_blank"
              >
                <Text
                  className="common-pointer font-bold text-black_900 text-left w-[auto]"
                  variant="body3"
                >
                  Resume
                </Text>
              </a>




            </div>
          </div>
        </header>
        <div className="flex flex-col items-start justify-start w-[100%]">
          <div className="h-[646px] max-w-[1181px] mx-[auto] md:px-[20px] relative w-[100%]">
            <div className="absolute bg-cyan_50 h-[646px] inset-[0] justify-center m-[auto] rounded-[35px] w-[100%]"></div>
            <div className="absolute h-[473px] inset-y-[0] my-[auto] right-[0] md:w-[100%] w-[94%]">
              <Img
                src="images/img_group665.png"
                className="absolute h-[473px] inset-y-[0] my-[auto] object-cover right-[0] w-[50%]"
                alt="group665"
              />
              <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[5px] top-[10%] w-[55%]">
                <Text
                  className="leading-[80.00px] text-black_900 text-left w-[100%]"
                  as="h1"
                  variant="h1"
                ></Text>
                <Text
                  className="font-normal leading-[35.00px] md:ml-[0] ml-[3px] mt-[25px] not-italic text-black_900_60 text-left sm:w-[100%] w-[73%]"
                  variant="body2"
                >
                  Maximize your business with a variety of services and services
                  from us
                </Text>
                <div className="flex sm:flex-col flex-row gap-[24px] items-center justify-start mt-[39px] rounded-[5px] md:w-[100%] w-[71%]">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[201px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="FillBlack900"
                  >
                    Contact Us
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[201px] text-[16px] text-black_900 text-center w-[auto]"
                    shape="RoundedBorder5"
                    size="md"
                    variant="OutlineBlack900"
                  >
                    About Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1181px] mt-[100px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <Text
                className="text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Meet our team
              </Text>
              <Text
                className="font-bold text-left text-red_401 w-[auto]"
                variant="body2"
              >
                View All
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-[42px] items-center justify-start pb-[7px] rounded-[10px] w-[100%]">
                <Img
                  src="images/img_rectangle16.png"
                  className="h-[460px] sm:h-[auto] object-cover rounded-[10px] w-[100%]"
                  alt="RectangleSixteen"
                />
                <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Sarah Jae
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    variant="body2"
                  >
                    Branding Specialist
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[42px] items-center justify-start pb-[7px] w-[100%]">
                <Img
                  src="images/img_rectangle15.png"
                  className="h-[460px] sm:h-[auto] object-cover rounded-[10px] w-[100%]"
                  alt="RectangleFifteen"
                />
                <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    John Doe
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    variant="body2"
                  >
                    Product Designer
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[42px] items-center justify-start pb-[8px] rounded-[10px] w-[100%]">
                <Img
                  src="images/img_rectangle17.png"
                  className="h-[460px] sm:h-[auto] object-cover rounded-[10px] w-[100%]"
                  alt="RectangleSeventeen"
                />
                <div className="flex flex-col gap-[19px] items-center justify-start md:w-[100%] w-[auto]">
                  <Text
                    className="font-bold text-gray_800 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Samantha
                  </Text>
                  <Text
                    className="font-normal not-italic text-black_900_68 text-left w-[auto]"
                    variant="body2"
                  >
                    SEO Specialist
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="flex flex-col gap-[40px] items-center justify-start max-w-[1180px] mt-[100px] mx-[auto] md:px-[20px] w-[100%]">
            <Text
              className="text-black_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              What we do
            </Text>
            <div className="bg-red_50 flex items-center justify-start p-[112px] sm:px-[20px] md:px-[40px] rounded-[90px] w-[100%]">
              <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-start mb-[6px] md:w-[100%] w-[95%]">
                <div className="flex flex-col gap-[40px] items-start justify-start md:w-[100%] w-[23%]">
                  <Button
                    className="flex h-[46px] items-center justify-center w-[46px]"
                    shape="icbRoundedBorder10"
                    size="smIcn"
                    variant="icbOutlineRed3007c"
                  >
                    <Img
                      src="images/img_cut.svg"
                      className="h-[23px]"
                      alt="cut"
                    />
                  </Button>
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      UIUX Design
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_700 text-left w-[100%]"
                      variant="body5"
                    >
                      We can make your website or application design better with
                      this service
                    </Text>
                  </div>
                </div>
                <div className="bg-white_A700 flex items-start justify-start md:ml-[0] ml-[102px] p-[25px] sm:px-[20px] rounded-[30px] shadow-bs4 md:w-[100%] w-[31%]">
                  <div className="flex flex-col gap-[37px] items-start justify-start mb-[8px] mt-[12px] md:w-[100%] w-[95%]">
                    <Button
                      className="flex h-[46px] items-center justify-center w-[46px]"
                      shape="icbRoundedBorder10"
                      size="smIcn"
                      variant="icbOutlineCyan40087"
                    >
                      <Img
                        src="images/img_settings.svg"
                        className="h-[23px]"
                        alt="settings"
                      />
                    </Button>
                    <div className="flex flex-col gap-[19px] items-start justify-start w-[100%]">
                      <Text
                        className="font-bold text-black_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Website Dev
                      </Text>
                      <Text
                        className="font-normal leading-[30.00px] not-italic text-gray_700 text-left w-[100%]"
                        variant="body5"
                      >
                        Make your business more leverage by having an optimal
                        website and we are ready to help
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] ml-[86px] md:w-[100%] w-[27%]">
                  <Button
                    className="flex h-[46px] items-center justify-center w-[46px]"
                    shape="icbRoundedBorder10"
                    size="smIcn"
                    variant="icbOutlineLime80087"
                  >
                    <Img
                      src="images/img_lightbulb.svg"
                      className="h-[23px]"
                      alt="lightbulb"
                    />
                  </Button>
                  <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                    <Text
                      className="font-bold text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Branding & Product
                    </Text>
                    <Text
                      className="font-normal leading-[30.00px] not-italic text-gray_700 text-left w-[100%]"
                      variant="body5"
                    >
                      we can also help you in the affairs of product branding so
                      that your products can be more riveting
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[559px] md:h-[625px] mt-[100px] md:px-[20px] relative w-[100%]">
            <div
              className="absolute bg-cover bg-no-repeat bottom-[0] flex h-[525px] inset-x-[0] items-center justify-end mx-[auto] p-[50px] sm:px-[20px] md:px-[40px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group839.png')" }}
            >
              <div className="flex items-center justify-start mt-[22px] md:w-[100%] w-[89%]">
                <div className="flex flex-col md:gap-[40px] gap-[68px] items-center justify-start w-[100%]">
                  <div className="flex md:flex-col flex-row md:gap-[40px] items-start justify-between w-[100%]">
                    <Text
                      className="text-black_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      What our clients are saying
                    </Text>
                    <div className="flex md:flex-1 flex-row gap-[9px] items-center justify-between md:w-[100%] w-[13%]">
                      <Button
                        className="flex items-center justify-center w-[auto]"
                        size="smIcn"
                        variant="icbFillRed401"
                      >
                        <Img
                          src="images/img_group683.svg"
                          className=""
                          alt="group683"
                        />
                      </Button>
                      <Button
                        className="flex items-center justify-center w-[auto]"
                        size="smIcn"
                        variant="icbFillRed401"
                      >
                        <Img
                          src="images/img_group684.svg"
                          className=""
                          alt="group684"
                        />
                      </Button>
                    </div>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="bg-white_A700 flex flex-1 items-center justify-start p-[30px] sm:px-[20px] rounded-[10px] shadow-bs5 w-[100%]">
                      <div className="flex flex-col gap-[20px] items-start justify-start mb-[12px] rounded-[12px] md:w-[100%] w-[99%]">
                        <Text
                          className="font-normal leading-[30.00px] not-italic text-gray_700 text-left w-[100%]"
                          variant="body3"
                        >
                          I am very satisfied with the work on the Nexus team.
                          good service, satisfying work results and can also
                          increase my business turnover. Thank you so much to
                          the Nexus team.
                        </Text>
                        <div className="flex flex-row gap-[25px] items-center justify-start pr-[7px] rounded-[12px] md:w-[100%] w-[64%]">
                          <Img
                            src="images/img_rectangle52.png"
                            className="h-[49px] md:h-[auto] object-cover rounded-[12px] w-[49px]"
                            alt="RectangleFiftyTwo"
                          />
                          <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-black_900 text-left w-[auto]"
                              variant="body2"
                            >
                              John Richard
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_700 text-left w-[auto]"
                              variant="body5"
                            >
                              Businessman
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start p-[30px] sm:px-[20px] rounded-[10px] shadow-bs5 w-[100%]">
                      <div className="flex flex-col gap-[20px] items-start justify-start mb-[12px] rounded-[12px] md:w-[100%] w-[99%]">
                        <Text
                          className="font-normal leading-[30.00px] not-italic text-gray_700 text-left w-[100%]"
                          variant="body3"
                        >
                          since branding with the oracle team i feel my business
                          has a very fast and good development, everything also
                          always goes through a process of discussion that is
                          really valid
                        </Text>
                        <div className="flex flex-row gap-[24px] items-center justify-start pr-[14px] rounded-[12px] md:w-[100%] w-[69%]">
                          <Img
                            src="images/img_rectangle52_49X49.png"
                            className="h-[49px] md:h-[auto] object-cover rounded-[12px] w-[49px]"
                            alt="RectangleFiftyTwo One"
                          />
                          <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-black_900 text-left w-[auto]"
                              variant="body2"
                            >
                              Andrew Smith
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_700 text-left w-[auto]"
                              variant="body5"
                            >
                              Founder Ulala
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white_A700 flex flex-1 items-center justify-start p-[30px] sm:px-[20px] rounded-[10px] shadow-bs5 w-[100%]">
                      <div className="flex flex-col gap-[20px] items-start justify-start mb-[12px] rounded-[12px] md:w-[100%] w-[99%]">
                        <Text
                          className="font-normal leading-[30.00px] not-italic text-gray_700 text-left w-[100%]"
                          variant="body3"
                        >
                          I can say, this team is indeed extraordinarily
                          perfect. I will do a lot of teamwork with this team
                          next time. I do not hesitate to cooperate because the
                          results are very satisfying
                        </Text>
                        <div className="flex flex-row gap-[25px] items-center justify-start pr-[15px] rounded-[12px] md:w-[100%] w-[64%]">
                          <Img
                            src="images/img_rectangle52_1.png"
                            className="h-[49px] md:h-[auto] object-cover rounded-[12px] w-[49px]"
                            alt="RectangleFiftyTwo Two"
                          />
                          <div className="flex flex-col gap-[12px] items-start justify-start w-[auto]">
                            <Text
                              className="font-semibold text-black_900 text-left w-[auto]"
                              variant="body2"
                            >
                              Steve John
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_700 text-left w-[auto]"
                              variant="body5"
                            >
                              CEO rumahku.ox
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <Button
              className="absolute flex h-[68px] items-center justify-center left-[9%] rounded-[50%] top-[0] w-[68px]"
              size="mdIcn"
              variant="icbOutlineWhiteA700"
            >
              <Img
                src="images/img_settings_68X68.svg"
                className=""
                alt="settings One"
              />
            </Button>
          </div>
          <Footer className="bg-gray_801 flex items-center justify-center mt-[70px] md:px-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[50px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default HomepagePage;
