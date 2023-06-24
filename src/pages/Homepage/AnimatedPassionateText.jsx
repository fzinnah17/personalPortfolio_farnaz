import React, { useEffect } from "react";
import { animated, useSpring } from 'react-spring';
import { Text } from "components";

const AnimatedText = animated(Text);

const AnimatedPassionateText = () => {
  const [style, set] = useSpring(() => ({ opacity: 0, y: 100 }));

  useEffect(() => {
    const timeout = setTimeout(() => {
      set({ opacity: 1, y: 0 });
    }, 1500);

    return () => clearTimeout(timeout);
  }, [set]);

  return (
    <AnimatedText style={style}>
      Passionate about crafting captivating and intuitive web experiences,
      exceeding expectations is always the goal.
      Passionate about crafting captivating and intuitive web experiences,
      exceeding expectations is always the goal.
      Passionate about crafting captivating and intuitive web experiences,
      exceeding expectations is always the goal.
      Passionate about crafting captivating and intuitive web experiences,
      exceeding expectations is always the goal.
      Passionate about crafting captivating and intuitive web experiences,
      exceeding expectations is always the goal.
      Passionate about crafting captivating and intuitive web experiences,
      exceeding expectations is always the goal.
      
    </AnimatedText>
  );
};

export default AnimatedPassionateText;
