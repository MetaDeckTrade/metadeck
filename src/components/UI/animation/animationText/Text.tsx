import React, { memo, useState, useRef, useEffect } from 'react';
import { NextPage } from 'next';
import { useInView } from 'react-intersection-observer';
import { animated, useSprings } from '@react-spring/web';
import styled from 'styled-components';
import { colors } from '@/styles';

const StyledText = styled.span`
  display: flex;
  flex-wrap: wrap;
  color: ${colors.white2};
  .hidden {
    overflow: hidden;
  }
`;

interface TextProps {
  children?: any;
  columnGap?: number;
  speed?: number;
  mode: 'once' | 'forward' | 'none';
  className?: string;
  delay?: number;
  duration?: number;
}

const Text: NextPage<TextProps> = memo(function Text({
  children,
  duration = 0.45,
  columnGap,
  speed = 0.01,
  delay = 0,
  mode,
  ...props
}) {
  const [words, setWords] = useState<string[][]>([]);
  const showed = useRef(false);
  const { ref, inView } = useInView({
    triggerOnce: mode === 'once',
  });

  useEffect(() => {
    if (children) {
      const splittedWords: string[] = children.toString().split(' ');
      setWords(splittedWords.map((word: string) => word.split('')));
    }
  }, [children]);

  const letters = words.flat();

  const [springs, api] = useSprings(letters.length, index => ({
    opacity: 0.6,
    transform: 'translateY(110%)',
    config: { duration: duration * 1000 },
    immediate: !inView // Убедитесь, что начальные состояния применяются немедленно
  }));

  useEffect(() => {
    if (inView) {
      api.start(index => ({
        opacity: 1,
        transform: 'translateY(0%)',
        delay: delay + index * speed * 1000,
        config: { duration: duration * 1000 },
      }));
      if (mode === 'forward') {
        showed.current = true;
      }
    } else if (mode === 'forward' && showed.current) {
      api.start(index => ({
        opacity: 0.6,
        transform: 'translateY(110%)',
        config: { duration: duration * 1000 },
      }));
    }
  }, [inView, api, delay, duration, speed, mode]);

  return (
    <StyledText ref={ref} style={{ columnGap: `${columnGap ? columnGap : 0.3}em` }} {...props}>
      {words.map((word: string[], wordIndex: number) => (
        <span key={wordIndex} className='hidden'>
          {word.map((letter: string, letterIndex: number) => {
            const index = words.slice(0, wordIndex).flat().length + letterIndex;
            return (
              <animated.span key={letterIndex} style={springs[index]} >
                {letter}
              </animated.span>
            );
          })}
        </span>
      ))}
    </StyledText>
  );
});

export default Text;
