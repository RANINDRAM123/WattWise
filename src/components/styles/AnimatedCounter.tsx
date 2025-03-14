import React from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value, duration = 2 }) => {
  const spring = useSpring(0, {
    duration,
    bounce: 0.25,
  });

  React.useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  const display = useTransform(spring, (latest) => Math.round(latest).toLocaleString());

  return <motion.span>{display}</motion.span>;
};

export default AnimatedCounter;