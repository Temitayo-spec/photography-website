import { motion } from 'framer-motion';
import { heroTextVariant } from '../../../../constants';

export const HeroText = ({ title }: { title: string }) => {
  return (
    <h1>
      <motion.span variants={heroTextVariant}>{title}</motion.span>
    </h1>
  );
};

export const NormalText = ({ title }: { title: string }) => {
  return (
    <p>
      <motion.span variants={heroTextVariant}>{title}</motion.span>
    </p>
  );
};
