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
  Crafting code, shaping experiences.
  A Computer Engineering graduate with a flair for full-stack development. Diving deep into frontend magic and backend logic, I bring solutions to life.      
    </AnimatedText>
  );
};

export default AnimatedPassionateText;
