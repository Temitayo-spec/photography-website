import { motion } from 'framer-motion';
import { heroTextVariant } from '../../../../constants';

export const HeroText = ({ title }: { title: string }) => {
  const splitText = title.split('');
  return (
    <motion.h1>
      {splitText.map((word, index) => {
        return (
          <motion.span key={index} variants={heroTextVariant}>
            {word}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

export const NormalText = ({ title }: { title: string }) => {
  return (
    <p>
      <motion.span variants={heroTextVariant}>{title}</motion.span>
    </p>
  );
};
