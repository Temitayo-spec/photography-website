import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import FramerMagnetic from '../../AnimationComps/MagneticEffect';

interface ContactBtnProps {
  text: string;
  ml: string;
  isContact: boolean;
}

const ContactBtn = ({ text, ml, isContact }: ContactBtnProps) => {
  return (
    <WorkWithMe
      style={{
        marginLeft: ml,
      }}
    >
      <FramerMagnetic>
        <div
          style={{
            width: isContact ? '12.5rem' : '8.75rem',
            height: isContact ? '12.5rem' : '8.75rem',
            fontSize: isContact ? '1.5rem' : '1.125rem',
          }}
        >
          {text}
        </div>
      </FramerMagnetic>
      <div
        style={{
          width: isContact ? '13.75rem' : '10rem',
          height: isContact ? '13.75rem' : '10rem',
        }}
      ></div>
    </WorkWithMe>
  );
};

export default ContactBtn;

const WorkWithMe = styled.div`
  cursor: pointer;
  position: relative;
  z-index: 10;

  div {
    &:first-of-type {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 31.25rem;
      background: var(--background-primary, #db574d);
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      padding: 0 1.3rem;
      right: 1.5rem;
    }
    &:nth-of-type(2) {
      position: static;
      border: 1px solid var(--secondary);
      border-radius: 50%;
    }
  }
`;
