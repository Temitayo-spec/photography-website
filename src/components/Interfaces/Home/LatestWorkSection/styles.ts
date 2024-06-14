import styled from 'styled-components';

const LatestWorkWrapper = styled.section``;

const LatestWorkInner = styled.div`
  width: 95%;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 14rem;
  display: flex;
  flex-direction: column;
  gap: 8rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.12rem;

    h1 {
      color: var(--primary);
      font-size: 6.25rem;
      line-height: 110%; /* 6.875rem */
      text-transform: uppercase;

      span:last-of-type {
        color: var(--secondary);
        text-transform: capitalize;
      }
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;

      font-size: 1.125rem;
      line-height: 120%; /* 1.35rem */
    }
  }
`;

const WorksContainer = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
`;

const CardTitle = styled.div`
  h3 {
    font-size: 1.875rem;
    line-height: 120%; /* 2.25rem */
    text-transform: uppercase;

    span {
      color: var(--secondary);
      text-transform: capitalize;
    }
  }
`;

const CardImageCtn = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardInfo = styled.div`
  p {
    font-size: 1rem;
    line-height: 160%; /* 1.6rem */
    width: 6.4375rem;
  }
`;

const WorkCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8.03rem;

  ${WorkCard}:first-of-type ${CardImageCtn} {
    max-width: 43.75rem;
    width: 40vw;
    /* height: 53.477rem; */
  }

  ${WorkCard}:last-of-type {
    margin-left: 9.04rem;

    ${CardImageCtn} {
      width: 25.56819rem;
      height: 31.25rem;
    }

    @media (max-width: 1300px) {
      margin-left: 3.94rem;
    }
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11.19rem;
  align-items: flex-end;
  width: 100%;
  padding-top: 2.2rem;

  ${WorkCard}:first-of-type {
    ${CardImageCtn} {
      width: 25.56819rem;
      height: 31.25rem;
    }
  }

  ${WorkCard}:last-of-type {
    align-self: flex-start;
    margin-left: 11.94rem;

    ${CardImageCtn} {
      width: 25.56819rem;
      height: 31.25rem;
    }

    @media (max-width: 1300px) {
      margin-left: 4.94rem;
    }
  }
`;

export {
  LatestWorkWrapper,
  LatestWorkInner,
  WorksContainer,
  WorkCard,
  CardTitle,
  CardImageCtn,
  CardInfo,
  LeftContainer,
  RightContainer,
};
