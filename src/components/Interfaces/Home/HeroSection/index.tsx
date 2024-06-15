import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  HeroSectionWrapper,
  HeroSectionInner,
  Text,
  SubText,
  HeroImageSection,
  ImageCtn,
  ScrollAndExplore,
  BriefIntro,
  AboutJacob,
  MainText,
} from './styles';
import hero_banner from '../../../../../public/images/hero_banner.png';
import jacob_image from '../../../../../public/images/jacob_img.jpg';
import carbon_arrow_down from '../../../../../public/svgs/carbon_arrow-down.svg';
import ContactBtn from '@/components/Common/Contact/ContactBtn';
import { containerVariant } from '../../../../../constants';
import {
  HeroText,
  NormalText,
} from '@/components/Common/AnimationComps/FadeInText';
import ImageRevealCover from '@/components/Common/AnimationComps/ImageRevealCover';
import ScaleImageWrapper from '@/components/Common/AnimationComps/ScaleImageWrapper';

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroSectionInner>
        <Text>
          <MainText
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >
            <HeroText title="Jacob" />
            <HeroText title="Grønberg" />
          </MainText>
          <SubText
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{
              amount: 0.3,
              once: true,
            }}
          >
            <NormalText title="Photographer" />
            <NormalText title="& Visual artist" />
          </SubText>
          <BriefIntro>
            <AboutJacob>
              <div>
                <ImageRevealCover  />

                <ScaleImageWrapper >
                  <Image src={jacob_image} alt="jacob image" quality={100} />
                </ScaleImageWrapper>
              </div>

              <p>Hi, Im Jacob</p>
            </AboutJacob>

            <ContactBtn text="Work With Me" ml="-2rem" isContact={false} />
          </BriefIntro>
        </Text>
        <HeroImageSection>
          <ImageCtn>
            <ImageRevealCover delay={1.5} duration={1.5} />

            <ScaleImageWrapper delay={1.5} duration={1.5}>
              <Image
                src={hero_banner}
                alt="hero image"
                quality={100}
                priority
              />
            </ScaleImageWrapper>
          </ImageCtn>
          <ScrollAndExplore>
            <Image src={carbon_arrow_down} alt="arrow down" />
            <p>Scroll and explore</p>
          </ScrollAndExplore>
        </HeroImageSection>
      </HeroSectionInner>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
