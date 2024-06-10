import styled from 'styled-components';
import { motion } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--background-default, #eeedee);
  z-index: 50;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.5rem;
  transform-origin: top;

  & > div:first-of-type {
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 100%;
    border: 1px solid var(--secondary);
    position: absolute;
    top: -2.7rem;
    right: -2.7rem;
  }
`;

const OverlayMenu = styled(motion.div)`
  align-self: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const MenuItem = styled(motion.ul)`
  list-style: none;
  overflow: hidden;

  li {
    display: flex;
    align-items: center;
    gap: 3.125rem;
    position: relative;

    span {
      color: var(--secondary);
      font-size: 1.875rem;
      line-height: 120%; /* 2.25rem */
      text-transform: uppercase;
    }

    a {
      font-size: 4.25rem;
      line-height: 110%; /* 6.875rem */
      text-transform: uppercase;
    }
  }
`;

export { Overlay, OverlayMenu, MenuItem };
