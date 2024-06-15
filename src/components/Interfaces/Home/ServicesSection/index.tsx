import { useRef } from 'react';
import { smallTextVariant } from '../../../../../constants';
import {
  ServicesSectionWrapper,
  ServicesSectionInner,
  ServicesLeftCtn,
  ServicesRightCtn,
  ServicesCtn,
} from './styles';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    title: 'Photo Shooting',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Video Editing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Art Direction',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const ServicesSection = () => {
  const wrapperRef = useRef(null);
  const inView = useInView(wrapperRef, { amount: 0.3, once: true });
  return (
    <ServicesSectionWrapper ref={wrapperRef}>
      <ServicesSectionInner>
        <ServicesLeftCtn>
          <div />
          <motion.p
            variants={smallTextVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            Services
          </motion.p>
        </ServicesLeftCtn>
        <ServicesRightCtn>
          {services.map((service, index) => (
            <ServicesCtn
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.7,
                },
              }}
              viewport={{
                once: true,
              }}
            >
              <h2>0{index + 1}</h2>
              <div>
                <p>{service.title}</p>
                <p>{service.description}</p>
              </div>
            </ServicesCtn>
          ))}
        </ServicesRightCtn>
      </ServicesSectionInner>
    </ServicesSectionWrapper>
  );
};

export default ServicesSection;
