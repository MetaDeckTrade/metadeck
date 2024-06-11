import React, { useEffect, memo, useState, useRef } from 'react'
import { NextPage } from 'next';
import { useInView } from 'react-intersection-observer';
import { animated, useIsomorphicLayoutEffect } from '@react-spring/web';
import styled from "styled-components";
import { colors } from '@/styles';

const StyledText = styled.span`
  display: flex;
  flex-wrap: wrap;
  color: ${colors.white2};
  .hidden {
    overflow: hidden;
  }
`
interface text {
    children?: any,
    columnGap?: number,
    speed?: number,
    mode?: 'once' | 'forward' | 'none'
    className?: string
    delay?: number,
    duration?: number
}

const Text: NextPage<text> = memo(function Text({ children, duration=0.45,columnGap, speed = 0.01, delay = 0, mode = 'none', ...props }) {
  const textRef = useRef<HTMLElement | null>(null)
  const [ref, inView] = useInView();
  const [words, setWords] = useState<string[][]>([]);
  const showed = useRef(false)
  useIsomorphicLayoutEffect(() => ref(textRef.current), [textRef.current])
  useEffect(() => {
    if (mode !== 'forward') { return }
    function handler() {
      if (textRef.current) {
        if (textRef.current.getBoundingClientRect().top > 0) {
          showed.current = false
        } else {
          showed.current = true
        }
      }
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [mode])

  useEffect(() => {
    if (inView /*&& fullyLoaded*/ && mode === 'once') {
      showed.current = true
    }
  }, [inView/*, fullyLoaded*/])



  useEffect(() => {
    if (children) {
      const splittedWords: string[] = children.toString().split(' ');
      setWords(
        splittedWords.map((word: string) => word.split(''))
      );
    }
  }, [children]);

  //Function for transition between letters calculations
  const calculateTransitionDelay = (wordIndex: number, duration: number) => {
    let lineDelay = speed * wordIndex;

    let wordDelay = delay / 1000;
  
    for (let i = 0; i < wordIndex; i++) {
      wordDelay += speed ? words[i].length * speed : words[i].length * 0.02;
    }
  
    return inView /*&& fullyLoaded*/ ? `transform ease ${duration}s ${wordDelay + lineDelay}s` : '0s';
  };

  return (
    <StyledText style={{ columnGap: `${columnGap ? columnGap : 0.3}em` }} {...props} ref={textRef}>
      {words.map((word: string[], wordIndex: number) => (
        <span key={wordIndex} className='hidden'>
          {word.map((letter: string, letterIndex: number) => (
            <animated.span
              key={letterIndex}
              style={{
                display: 'inline-block',
                opacity: 0.6,
                transform: `translateY(${(inView /*&& fullyLoaded*/) || showed.current ? 0 : 110}%)`,
                transition: calculateTransitionDelay(wordIndex, duration),
                color: `${colors.white2}`,
              }}
            >
              {letter}
            </animated.span>
          ))}
        </span>
      ))}
    </StyledText>
  );
});

export default Text;