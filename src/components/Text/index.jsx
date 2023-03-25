import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-[48px] md:text-[48px] text-[75px]",
  h2: "font-bold sm:text-[40px] md:text-[46px] text-[50px]",
  h3: "font-bold sm:text-[36px] md:text-[38px] text-[40px]",
  h4: "sm:text-[31px] md:text-[33px] text-[35px]",
  h5: "font-bold sm:text-[26px] md:text-[28px] text-[30px]",
  h6: "sm:text-[21px] md:text-[23px] text-[25px]",
  body1: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  body2: "text-[20px]",
  body3: "text-[18px]",
  body4: "font-semibold text-[17px]",
  body5: "text-[15px]",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
