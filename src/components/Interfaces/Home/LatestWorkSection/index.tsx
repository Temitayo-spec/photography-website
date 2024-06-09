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

const LatestWorkSection = () => {
  return (
    <LatestWorkWrapper>
      <LatestWorkInner>
        <header>
          <h1>
            Latest <span>Work</span>
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
                  Black & <span>White</span>
                </h3>
              </CardTitle>
              <CardImageCtn>
                <Image src={work_1} alt="image of works" fill quality={100} />
              </CardImageCtn>
              <CardInfo>
                <p>New York October 2021</p>
              </CardInfo>
            </WorkCard>
            <WorkCard>
              <CardTitle>
                <h3>
                  WEek <span>Fashion</span>
                </h3>
              </CardTitle>
              <CardImageCtn>
                <Image src={work_3} alt="image of works" fill quality={100} />
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
                  Style & <span>Fashion</span>
                </h3>
              </CardTitle>
              <CardImageCtn>
                <Image src={work_2} alt="image of works" fill quality={100} />
              </CardImageCtn>
              <CardInfo>
                <p>New York October 2021</p>
              </CardInfo>
            </WorkCard>
            <WorkCard>
              <CardTitle>
                <h3>
                  One <span>Eye</span>
                </h3>
              </CardTitle>
              <CardImageCtn>
                <Image src={work_4} alt="image of works" fill quality={100} />
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
