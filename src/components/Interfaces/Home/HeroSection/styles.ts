import styled from 'styled-components';

const HeroSectionWrapper = styled.section`
  padding-top: 9.62rem;
`;

const HeroSectionInner = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: var(--max-width);
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Text = styled.div`
  position: absolute;
  top: 100px;

  h1 {
    color: var(--secondary);
    font-size: 12.5rem;
    line-height: 95%; /* 11.25rem */
    display: flex;
    flex-direction: column;
  }
`;

const SubText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.69rem;
  padding-top: 0.69rem;
  margin-left: 11.26rem;

  p {
    font-size: 3.75rem;
    line-height: 110%; /* 4.125rem */
    text-transform: uppercase;

    &:nth-of-type(2) {
      margin-left: 5.82rem;
    }
  }
`;

const HeroImageSection = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
`;

const ImageCtn = styled.div`
  max-width: 46.97rem;
  width: 45vw;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ScrollAndExplore = styled.div`
  align-self: center;
  margin-left: 20rem;
  display: flex;
  gap: 1.61rem;

  img {
    margin-top: -4.85rem;
    position: relative;
    z-index: -1;
  }

  p {
    max-width: 5.69156rem;
    font-size: 1rem;
    line-height: 160%;
    margin-top: 1.31rem;
  }
`;

const BriefIntro = styled.div`
  position: absolute;
  top: 43rem;
  display: flex;
  align-items: flex-end;
`;

const AboutJacob = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.62rem;

  p {
    font-size: 1rem;
    line-height: 160%; /* 1.6rem */
  }
`;

export {
  HeroSectionWrapper,
  HeroSectionInner,
  Text,
  SubText,
  HeroImageSection,
  ImageCtn,
  ScrollAndExplore,
  BriefIntro,
  AboutJacob,
};
