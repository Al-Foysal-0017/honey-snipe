"use client";

import React from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const TextWrapper = ({ children }: Props) => {
  const text = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: text,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [1, 0.8, 0], [1, 1, 0]);
  const x = useTransform(scrollYProgress, [1, 0.4, 0], [0, 0, -1000]);
  const colorChange = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "hsla(180, 7%, 75%, 0.9)",
      "hsla(180, 7%, 75%, 0.9)",
      "#f2994a",
      "#f2994a",
      "#f2994a",
      "#f2994a",
    ]
  );

  return (
    <div ref={text}>
      <motion.p style={{ opacity, x, color: colorChange }}>{children}</motion.p>
    </div>
  );
};

function TextSection() {
  return (
    <TextSectionStyled>
      {/* <TextWrapper>
      Join Honey Snipe
      </TextWrapper>
      <TextWrapper>
      and 
      </TextWrapper>
      <TextWrapper>
      Unlock Limitless Possibilities 
      </TextWrapper>
      <TextWrapper>
      in Crypto Trading!
      </TextWrapper> */}
      {/* <TextWrapper>
      Join Honey Snipe and Unlock Limitless Possibilities in Crypto Trading!
      </TextWrapper> */}
      <TextWrapper>
      Join us at Honey Snipe and open the door to endless potential in crypto trading!
      </TextWrapper>
      <TextWrapper>
      Explore boundless opportunities in crypto trading by becoming a part of Honey Snipe!
      </TextWrapper>
      <TextWrapper>
      Unleash the power of limitless possibilities with Honey Snipe in the world of cryptocurrency trading!
      </TextWrapper>
      <TextWrapper>
      Discover a world of possibilities in crypto trading – join Honey Snipe today!
      </TextWrapper>
      <TextWrapper>
      Embark on a journey of limitless potential in crypto trading by joining Honey Snipe!
      </TextWrapper>
      <TextWrapper>
      Unlock countless opportunities in crypto trading by becoming a member of Honey Snipe!
      </TextWrapper>
      <TextWrapper>
      Join Honey Snipe now and tap into the infinite possibilities of crypto trading!
      </TextWrapper>
      <TextWrapper>
      Become a part of Honey Snipe and step into a realm of limitless opportunities in crypto trading!
      </TextWrapper>
      <TextWrapper>
      Experience the limitless potential of crypto trading by joining Honey Snipe!
      </TextWrapper>
    </TextSectionStyled>
  );
}

const TextSectionStyled = styled.section`
  p {
    font-size: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
  }
`;

export default TextSection;
