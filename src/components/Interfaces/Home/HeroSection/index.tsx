import Image from 'next/image';
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
  WorkWithMe,
} from './styles';
import hero_banner from '../../../../../public/images/hero_banner.png';
import jacob_image from '../../../../../public/images/jacob_img.jpg';
import carbon_arrow_down from '../../../../../public/svgs/carbon_arrow-down.svg';

const HeroSection = () => {
  return (
    <HeroSectionWrapper>
      <HeroSectionInner>
        <Text>
          <h1>
            <span>Jacob</span>
            <span>Grønberg</span>
          </h1>
          <SubText>
            <p>Photographer</p>
            <p>& Visual artist</p>
          </SubText>
          <BriefIntro>
            <AboutJacob>
              <Image src={jacob_image} alt="jacob image" quality={100} />
              <p>Hi, Im Jacob</p>
            </AboutJacob>

            <WorkWithMe>
              <div>Work With Me</div>
              <div></div>
            </WorkWithMe>
          </BriefIntro>
        </Text>
        <HeroImageSection>
          <ImageCtn>
            <Image src={hero_banner} alt="hero image" quality={100} priority />
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
