import { useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface TextShuffleProps {
  text: string;
  isHoveredOn?: boolean;
  isNavbar?: boolean;
}

const TextShuffle: React.FC<TextShuffleProps> = ({
  text,
  isHoveredOn = false,
  isNavbar,
}) => {
  const textRef = useRef<HTMLSpanElement>(null); // Changed to HTMLSpanElement
  const inView = useInView(textRef, {
    margin: '-10%',
  });

  const shuffleText = (
    finalText: string,
    duration: number,
    callback?: () => void
  ) => {
    let i = 0;

    const shuffleInterval = setInterval(() => {
      if (i < duration) {
        if (textRef.current) {
          textRef.current.innerHTML = Math.random()
            .toString(36)
            .substring(2, 8);
        }
        i++;
      } else {
        clearInterval(shuffleInterval);
        if (textRef.current) {
          textRef.current.innerHTML = finalText;
        }
        if (callback) callback();
        return;
      }
    }, 100);
  };

  useEffect(() => {
    if (isNavbar) {
      isHoveredOn && shuffleText(text, 10);
    } else {
      inView && shuffleText(text, 10);
    }
  }, [text, inView, isHoveredOn, isNavbar]);

  return <span ref={textRef}>{text}</span>;
};

export default TextShuffle;
