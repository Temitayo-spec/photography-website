import Link from 'next/link';
import {
  ExhibitionWrapper,
  ExhibitionInner,
  Exhibitions,
  ExhibitionRow,
  RowLeft,
  RowLeftImageCtn,
  RowLeftInfo,
  RowMid,
  RowRight,
} from './styles';
import exhibition_1 from '../../../../../public/images/exhibition_1.png';
import exhibition_2 from '../../../../../public/images/exhibition_2.png';
import exhibition_3 from '../../../../../public/images/exhibition_3.png';
import Image from 'next/image';
import { HeroText } from '@/components/Common/AnimationComps/FadeInText';
import { containerVariant } from '../../../../../constants';
import { motion } from 'framer-motion';
import TextShuffle from '@/components/Common/AnimationComps/TextShuffle';
import ScaleImageWrapper from '@/components/Common/AnimationComps/ScaleImageWrapper';
import ImageRevealCover from '@/components/Common/AnimationComps/ImageRevealCover';

const exhibitions = [
  {
    image: exhibition_1,
    city: 'New York',
    venue: 'Town Hall',
    year: '2022',
    title: 'Independent',
    title_span: 'Beauty',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
    month: 'Jun',
    day: '16',
  },
  {
    image: exhibition_2,
    city: 'Berlin',
    venue: 'Kunsthalle',
    year: '2022',
    title: 'In Humanity  We',
    title_span: 'Trust',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod.',
    month: 'Mar',
    day: '02',
  },
  {
    image: exhibition_3,
    city: 'New York',
    venue: 'Town Hall',
    year: '2022',
    title: 'Berlin AT',
    title_span: 'Night',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    month: 'Feb',
    day: '01',
  },
];

const ExhibitionSection = () => {
  return (
    <ExhibitionWrapper>
      <ExhibitionInner>
        <header>
          <motion.div
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
            }}
          >
            <HeroText title="Exhibitions" />
            <TextShuffle text="‘22" />
          </motion.div>

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
        <Exhibitions>
          {exhibitions.map((exhibition, i) => (
            <ExhibitionRow
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
              <RowLeft>
                <RowLeftImageCtn>
                  <ImageRevealCover />

                  <ScaleImageWrapper>
                    <Image
                      src={exhibition.image}
                      alt="exhibition"
                      quality={100}
                    />
                  </ScaleImageWrapper>
                </RowLeftImageCtn>
                <RowLeftInfo>
                  <div>
                    <p>{exhibition.city}</p>
                    <span />
                    <p>{exhibition.venue}</p>
                    <span />
                    <p>{exhibition.year}</p>
                  </div>
                  <h2>
                    {exhibition.title}{' '}
                    <TextShuffle text={exhibition.title_span} />
                  </h2>
                  <p>{exhibition.description}</p>
                </RowLeftInfo>
              </RowLeft>
              <RowMid href="#">
                Buy Ticket{' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="22"
                  viewBox="0 0 21 22"
                  fill="none"
                >
                  <path d="M5.02002 16.48L15.6266 5.87338" stroke="#DB574D" />
                  <path d="M6.08057 5.52002H15.9801V15.4195" stroke="#DB574D" />
                </svg>
              </RowMid>
              <RowRight>
                <p>{exhibition.month}</p>
                <h1>{exhibition.day}</h1>
              </RowRight>
            </ExhibitionRow>
          ))}
        </Exhibitions>
      </ExhibitionInner>
    </ExhibitionWrapper>
  );
};

export default ExhibitionSection;
