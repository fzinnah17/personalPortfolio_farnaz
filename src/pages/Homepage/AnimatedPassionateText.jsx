import React, { useEffect } from "react";
import { animated, useSpring } from 'react-spring';
import { Text } from "components";

const AnimatedText = animated(Text);

const AnimatedPassionateText = () => {
  const [style, set] = useSpring(() => ({ y: 100, opacity: 0 }));

  useEffect(() => {
    set({ y: 0, opacity: 1 });
  }, [set]);

  return (
    <AnimatedText style={style} className="font-regular text-[#333333] block">
      Passionate about crafting captivating and intuitive web experiences,
      exceeding expectations is always the goal.
    </AnimatedText>
  );
};

export default AnimatedPassionateText;
