import Link from 'next/link';
import {
  TestimonialSectionWrapper,
  TestimonialSectionInner,
  TestimonialHeaderText,
  TestimoniesCtn,
  Testimony,
  TestimonyImage,
  TestimonyText,
  TestimonyDetails,
} from './styles';
import testimony_1 from '../../../../../public/images/testimony_1.png';
import testimony_2 from '../../../../../public/images/testimony_2.png';
import testimony_3 from '../../../../../public/images/testimony_3.png';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    image: testimony_1,
    testimony: 'I Really Enjoyed Working With Jacob',
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      'Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Laoreet sit amet cursus sit amet dictum sit amet justo.',
    ],
    name: 'Michelle Lindstrøm',
    job: 'Photoshoot',
  },
  {
    image: testimony_2,
    testimony: 'I Really Enjoyed Working With Jacob',
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    ],
    name: 'Jannis Jackson',
    job: 'Art Direction',
  },
  {
    image: testimony_3,
    testimony: 'I Really Enjoyed Working With Jacob',
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.',
    ],
    name: 'Daniela Berg',
    job: 'Video Editing',
  },
];

const TestimonialSection = () => {
  const wrapperRef = useRef(null);
  const leftCtnRef = useRef(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: wrapperRef.current,
      start: 'top 30%',
      end: 'bottom bottom',
      scrub: 1,
      pin: leftCtnRef.current,
    });

   return () => {
     trigger.kill(); // Ensure to kill the trigger on component unmount
   };
  }, []);

  return (
    <TestimonialSectionWrapper className="wrapper" ref={wrapperRef}>
      <TestimonialSectionInner>
        <TestimonialHeaderText ref={leftCtnRef} className="left_ctn">
          <h1>
            <span>What my</span>
            <span>
              Clients <span>Say</span>
            </span>
          </h1>
          <p>
            Worked with Over <span>50 clients</span> around the world
          </p>
          <Link href="/contact-us">
            Work With Me
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
            >
              <path d="M0 8H30" stroke="#DB574D" />
              <path d="M23.5 1L30.5 8L23.5 15" stroke="#DB574D" />
            </svg>
          </Link>
        </TestimonialHeaderText>
        <TestimoniesCtn>
          {testimonials.map((testimony, i) => (
            <Testimony
              key={i}
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
            >
              <TestimonyImage>
                <Image
                  src={testimony.image}
                  alt={testimony.name}
                  quality={100}
                />
              </TestimonyImage>
              <TestimonyText>
                <h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="51"
                    height="52"
                    viewBox="0 0 51 52"
                    fill="none"
                  >
                    <path
                      d="M15.2775 0.5C5.61674 0.5 0 5.44273 0 15.3282V51.5H19.7709V20.4956H11.0088V15.1035C11.0088 11.0595 12.5815 10.3855 15.5022 10.3855H19.9956V0.5H15.2775ZM46.2819 0.5C36.6211 0.5 31.0044 5.44273 31.0044 15.3282V51.5H50.7753V20.4956H42.0132V15.1035C42.0132 11.0595 43.3612 10.3855 46.5066 10.3855H51V0.5H46.2819Z"
                      fill="#DB574D"
                    />
                  </svg>
                  {testimony.testimony}
                </h3>
                <p>
                  {testimony.details.map((detail, i) => (
                    <span key={i}>{detail}</span>
                  ))}
                </p>
                <TestimonyDetails>
                  <p>{testimony.name}</p>
                  <div />
                  <p>{testimony.job}</p>
                </TestimonyDetails>
              </TestimonyText>
            </Testimony>
          ))}
        </TestimoniesCtn>
      </TestimonialSectionInner>
    </TestimonialSectionWrapper>
  );
};

export default TestimonialSection;
