import styled from 'styled-components';

const PreloaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--background-default, #eeedee);
  height: 100vh;
  width: 100%;
  z-index: 1000;
  display: grid;
  place-items: center;
`;

const PreloaderInner = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  h1 {
    color: var(--secondary, #db574d);
    font-size: 1.875rem;
    font-weight: 300;
    line-height: 90%; /* 1.6875rem */
    letter-spacing: -0.0375rem;
    text-transform: uppercase;
    overflow: hidden;

    span {
      display: block;
    }
  }
`;

const SecondOverlay = styled.div`
  background: var(--secondary);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 990;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const ThirdOverlay = styled.div`
  background: var(--border-secondary);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 993;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export { PreloaderWrapper, PreloaderInner, SecondOverlay, ThirdOverlay };
