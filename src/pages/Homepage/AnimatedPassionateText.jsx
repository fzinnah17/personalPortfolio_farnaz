import React, { useEffect, useState } from "react";
import { Text } from "components";
import "./AnimatedPassionateText.css"

const AnimatedText = Text; // Since you're not using animated anymore
const AnimatedPassionateText = React.memo(() => {
  const [currentText, setCurrentText] = useState("");

  const fullText = "Crafting code, shaping experiences. A Computer Engineering graduate with a flair for full-stack development. Diving deep into frontend magic and backend logic, I bring solutions to life.";
  const delay = 90;

  useEffect(() => {
    let textIndex = 0;
    const interval = setInterval(() => {
      if (textIndex < fullText.length) {
        setCurrentText(prev => prev + fullText.charAt(textIndex));
        textIndex++;
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedText className="fade-in-from-bottom">
      <div className="animated-text">
        {currentText}
      </div>
    </AnimatedText>
  );
});


export default AnimatedPassionateText;
