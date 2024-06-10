import styled from 'styled-components';

const TopbarWrapper = styled.div`
  padding-top: 3.13rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

const TopbarInner = styled.div`
  width: 95%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    color: var(--primary);
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 110%; /* 1.65rem */
    text-transform: uppercase;
  }
`;

const Hamburger = styled.div`
  display: flex;
  width: 3.47706rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.625rem;
  cursor: pointer;
`;

const Line = styled.div`
  width: 3.125rem;
  height: 0.0625rem;
  background: var(--border-secondary, #000);

  &:nth-of-type(2) {
    width: 2.1875rem;
  }
`;

export { TopbarWrapper, TopbarInner, Hamburger, Line };
