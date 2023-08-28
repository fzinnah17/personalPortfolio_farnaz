import React from "react";
import { Text } from "components";
import "./AnimatedPassionateText.css"

const AnimatedText = Text;

const AnimatedPassionateText = React.memo(() => {
  const fullText = "Crafting code, shaping experiences. A Computer Engineering graduate with a flair for full-stack development. Diving deep into frontend magic and backend logic, I bring solutions to life.";

  return (
    <AnimatedText className="fade-in-from-bottom">
      <div className="animated-text">
        {fullText}
      </div>
    </AnimatedText>
  );
});

export default AnimatedPassionateText;
