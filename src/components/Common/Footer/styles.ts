import styled from 'styled-components';

const FooterWrapper = styled.div`
  width: 95%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  `;

const FooterTopSection = styled.div`
  border-top: 1px solid var(--border-default, rgba(16, 16, 16, 0.1));
  display: flex;
  justify-content: space-between;
  padding: 5.875rem 4.38rem;
`;

const FooterLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
  max-width: 29.87344rem;
  h1 {
    color: var(--secondary);
    font-size: 6.25rem;
    line-height: 90%; /* 5.625rem */
  }

  p {
    font-size: 1.125rem;
    line-height: 160%;
    margin-left: 5.06rem;
  }
`;

const FooterLinksCtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h3 {
    color: var(--secondary);
    font-size: 1.875rem;
    line-height: 120%; /* 2.25rem */
    text-transform: uppercase;
    margin-bottom: 3.12rem;
  }

  a {
    font-size: 1.125rem;
    line-height: 160%; /* 1.8rem */
    margin-bottom: 1.25rem;
  }
`;

const FooterBottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    line-height: 160%; /* 1.6rem */
  }
`;

const FooterSocialsLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1.88rem;

  a {
    font-size: 0.875rem;
    line-height: 120%; /* 1.05rem */
    text-transform: uppercase;
  }
`;

export {
  FooterWrapper,
  FooterTopSection,
  FooterLeftSection,
  FooterLinksCtn,
  FooterBottomSection,
  FooterSocialsLinks,
};
