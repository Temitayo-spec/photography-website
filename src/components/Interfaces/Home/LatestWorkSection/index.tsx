import Link from 'next/link';
import {
  LatestWorkWrapper,
  LatestWorkInner,
  WorksContainer,
  WorkCard,
  CardTitle,
  CardImageCtn,
  CardInfo,
  LeftContainer,
  RightContainer,
} from './styles';
import Image from 'next/image';
import work_1 from '../../../../../public/images/work_1.png';
import work_2 from '../../../../../public/images/work_2.png';
import work_3 from '../../../../../public/images/work_3.png';
import work_4 from '../../../../../public/images/work_4.png';
import TextShuffle from '@/components/Common/AnimationComps/TextShuffle';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import ScaleImageWrapper from '@/components/Common/AnimationComps/ScaleImageWrapper';
import ImageRevealCover from '@/components/Common/AnimationComps/ImageRevealCover';

const LatestWorkSection = () => {
  return (
    <LatestWorkWrapper>
      <LatestWorkInner>
        <header>
          <h1>
            Latest{' '}
            <span>
              <TextShuffle text="Work" />
            </span>
          </h1>

          <Link href="/works">
            View All{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
            >
              <path d="M0.59082 8H30.5908" stroke="#101010" />
              <path d="M24.0908 1L31.0908 8L24.0908 15" stroke="#101010" />
            </svg>
          </Link>
        </header>
        <WorksContainer>
          <LeftContainer>
            <WorkCard>
              <CardTitle>
                <h3>Dancing in</h3>
                <h3>
                  Black & <TextShuffle text="White" />
                </h3>
              </CardTitle>
              <CardImageCtn>
                <ImageRevealCover duration={1.5} />
                <ScaleImageWrapper duration={1.5}>
                  <Image src={work_1} alt="image of works" quality={100} />
                </ScaleImageWrapper>
              </CardImageCtn>
              <CardInfo>
                <p>New York October 2021</p>
              </CardInfo>
            </WorkCard>
            <WorkCard>
              <CardTitle>
                <h3>
                  WEek <TextShuffle text="Fashion" />
                </h3>
              </CardTitle>
              <CardImageCtn>
                <ImageRevealCover duration={1.2} />
                <ScaleImageWrapper duration={1.2}>
                  <Image src={work_3} alt="image of works" quality={100} />
                </ScaleImageWrapper>
              </CardImageCtn>
              <CardInfo>
                <p>New York October 2021</p>
              </CardInfo>
            </WorkCard>
          </LeftContainer>
          <RightContainer>
            <WorkCard>
              <CardTitle>
                <h3>
                  Style & <TextShuffle text="Fashion" />
                </h3>
              </CardTitle>
              <CardImageCtn>
                <ImageRevealCover duration={1.2} />
                <ScaleImageWrapper duration={1.2}>
                  <Image src={work_2} alt="image of works" quality={100} />
                </ScaleImageWrapper>
              </CardImageCtn>
              <CardInfo>
                <p>New York October 2021</p>
              </CardInfo>
            </WorkCard>
            <WorkCard>
              <CardTitle>
                <h3>
                  One <TextShuffle text="Eye" />
                </h3>
              </CardTitle>
              <CardImageCtn>
                <ImageRevealCover duration={1.2} />
                <ScaleImageWrapper duration={1.2}>
                  <Image src={work_4} alt="image of works" quality={100} />
                </ScaleImageWrapper>
              </CardImageCtn>
              <CardInfo>
                <p>New York October 2021</p>
              </CardInfo>
            </WorkCard>
          </RightContainer>
        </WorksContainer>
      </LatestWorkInner>
    </LatestWorkWrapper>
  );
};

export default LatestWorkSection;
