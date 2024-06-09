import styled from 'styled-components';

const ServicesSectionWrapper = styled.div`
  width: 85%;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 9.94rem;
`;

const ServicesSectionInner = styled.div`
  max-width: 65.9375rem;
  width: 100%;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ServicesLeftCtn = styled.div`
  display: flex;
  align-items: center;
  gap: 0.62rem;

  div {
    width: 0.9375rem;
    height: 0.0625rem;
    background: var(--border-secondary, #000);
  }

  p {
    font-size: 1rem;
    line-height: 160%; /* 1.6rem */
  }
`;

const ServicesRightCtn = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 3.12rem;
`;

const ServicesCtn = styled.div`
  display: flex;
  gap: 3.19rem;
  padding-bottom: 3.12rem;
  border-bottom: 1px solid var(--border-default, rgba(16, 16, 16, 0.1));

  &:last-of-type {
    border-bottom: none;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    p:first-of-type {
      font-size: 1.875rem;
      line-height: 120%; /* 2.25rem */
      text-transform: uppercase;
    }

    p:last-of-type {
      font-size: 1.125rem;
      line-height: 160%; /* 1.8rem */
    }
  }

  h2 {
    color: var(--secondary);
    font-size: 1.875rem;
    line-height: 120%; /* 2.25rem */
    text-transform: uppercase;
  }
`;

export {
  ServicesSectionWrapper,
  ServicesSectionInner,
  ServicesLeftCtn,
  ServicesRightCtn,
  ServicesCtn,
};
