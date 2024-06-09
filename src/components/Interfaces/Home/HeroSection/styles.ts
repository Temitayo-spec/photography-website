import styled from 'styled-components';

const HeroSectionWrapper = styled.section`
  padding-top: 4.88rem;
`;

const HeroSectionInner = styled.div`
  width: 85%;
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
    line-height: 90%; /* 11.25rem */
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

const ImageCtn = styled.div``;

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

const WorkWithMe = styled.div`
  cursor: pointer;
  div {
    &:first-of-type {
      position: absolute;
      top: 35%;
      display: flex;
      width: 8.75rem;
      height: 8.75rem;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 31.25rem;
      background: var(--background-primary, #db574d);
      color: #fff;
      text-align: center;
      font-size: 1.125rem;
      font-weight: 400;
      text-transform: uppercase;
      padding: 0 1.3rem;
      right: 2rem;
    }
    &:nth-of-type(2) {
      position: static;
      margin-left: 3rem;
      width: 10rem;
      height: 10rem;
      border: 1px solid var(--secondary);
      border-radius: 50%;
    }
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
  WorkWithMe,
};
