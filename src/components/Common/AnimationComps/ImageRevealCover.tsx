import { motion } from 'framer-motion';
import styled from 'styled-components';
import { imageRevealVariant } from '../../../../constants';

const ImageRevealCover = ({ delay, duration = 1 }: { delay?: number, duration?: number }) => {
  return (
    <Cover
      variants={imageRevealVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        delay: delay ?? 0,
        duration: duration,
        ease: [0.76, 0, 0.24, 1],
      }}
    ></Cover>
  );
};

export default ImageRevealCover;

const Cover = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 2;
  transform-origin: top;
`;
