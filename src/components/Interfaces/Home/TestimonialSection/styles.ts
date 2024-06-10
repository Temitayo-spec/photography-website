import styled from 'styled-components';

const TestimonialSectionWrapper = styled.div`
  margin-top: 14rem;
`;

const TestimonialSectionInner = styled.div`
  width: 95%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

const TestimonialHeaderText = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  flex-shrink: 0;
  align-items: flex-start;

  h1 {
    display: flex;
    flex-direction: column;
    font-size: 4.375rem;
    line-height: 110%; /* 4.8125rem */
    text-transform: uppercase;
    margin-bottom: 1rem;

    span span {
      color: var(--secondary);
      text-transform: capitalize;
    }
  }

  p {
    font-size: 1.875rem;
    line-height: 120%; /* 2.25rem */
    text-transform: uppercase;
    margin-bottom: 3rem;

    span {
      color: var(--secondary);
    }
  }

  a {
    display: flex;
    padding: 1rem 1.25rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 6.25rem;
    border: 1px solid var(--secondary, #db574d);
    color: var(--secondary, #db574d);
    font-size: 1.125rem;
    line-height: 120%; /* 1.35rem */
  }
`;

const TestimoniesCtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const Testimony = styled.div`
  display: flex;
  gap: 3.12rem;
  padding-bottom: 6rem;
  border-bottom: 1px solid var(--border-default);

  &:last-of-type {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const TestimonyImage = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  position: relative;
  flex-shrink: 0;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const TestimonyText = styled.div`
  h3 {
    font-size: 1.875rem;
    line-height: 120%; /* 2.25rem */
    display: flex;
    align-items: center;
    gap: 1.88rem;
    margin-bottom: 1.5rem;
  }

  & > p {
    line-height: 160%; /* 1.6rem */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const TestimonyDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-top: 2.5rem;

  div {
    width: 0.9375rem;
    height: 0.0625rem;
    background: var(--border-secondary, #000);
  }
`;

export {
  TestimonialSectionWrapper,
  TestimonialSectionInner,
  TestimonialHeaderText,
  TestimoniesCtn,
  Testimony,
  TestimonyImage,
  TestimonyText,
  TestimonyDetails,
};
