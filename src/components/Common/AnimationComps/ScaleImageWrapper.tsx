import { motion } from 'framer-motion';
import styled from 'styled-components';
import { imageWrapperVariants } from '../../../../constants';

const ScaleImageWrapper = ({
  children,
  delay,
  duration = 1,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => {
  return (
    <Wrapper
      variants={imageWrapperVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        delay: delay ?? 0,
        duration: duration,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {children}
    </Wrapper>
  );
};

export default ScaleImageWrapper;

const Wrapper = styled(motion.div)``;
