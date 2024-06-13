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

const Line = styled.div`
  width: 3.125rem;
  height: 0.0625rem;
  background: var(--border-secondary, #000);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  &:nth-of-type(1) {
    top: 25%;
  }

  &:nth-of-type(3) {
    top: 75%;
  }

  &:nth-of-type(2) {
    width: 2.1875rem;
  }
`;

const Hamburger = styled.div`
  display: flex;
  width: 3.47706rem;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.625rem;
  cursor: pointer;
  position: relative;
  height: 1.4375rem;
  overflow: hidden;

  &.add_styles {
    ${Line}:first-of-type {
      top: 50% !important;
      transform: translateY(-50%) rotate(45deg) !important;
    }

    ${Line}:nth-of-type(2) {
      transform: translateX(100%) !important;
    }

    ${Line}:last-of-type {
      top: 50% !important;
      transform: translateY(-50%) rotate(-45deg) !important;
    }
  }
`;

export { TopbarWrapper, TopbarInner, Hamburger, Line };
