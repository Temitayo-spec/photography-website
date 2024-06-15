import { motion } from 'framer-motion';
import Link from 'next/link';
import styled from 'styled-components';

const ExhibitionWrapper = styled.div`
  margin-top: 14rem;
`;

const ExhibitionInner = styled.div`
  width: 95%;
  max-width: var(--max-width);
  margin: 0 auto;
  margin-top: 14rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3.12rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.625rem;

      h1 {
        display: flex;
        align-items: center;
        overflow: hidden;
        span {
          color: var(--primary);
          font-size: 6.25rem;
          line-height: 110%; /* 6.875rem */
          text-transform: uppercase;
          display: block;
        }
      }

      span {
        color: var(--secondary);
        font-size: 6.25rem;
        line-height: 110%; /* 6.875rem */
        text-transform: capitalize;
      }
    }

    h1 {
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

const Exhibitions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.12rem;
`;

const ExhibitionRow = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding-bottom: 3.12rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &:last-of-type {
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const RowLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const RowLeftImageCtn = styled.div`
  width: 14.375rem;
  height: 14.375rem;
  overflow: hidden;
  position: relative;

  img {
    object-fit: cover;
  }
`;

const RowLeftInfo = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-bottom: 0.5rem;

    p {
      font-size: 1rem;
      line-height: 160%; /* 1.6rem */
    }

    span {
      width: 0.9375rem;
      height: 0.0625rem;
      background: var(--border-secondary, #000);
    }
  }

  h2 {
    font-size: 2.5rem;
    line-height: 110%; /* 2.75rem */
    text-transform: uppercase;
    margin-bottom: 1.25rem;

    span {
      color: var(--secondary);
      text-transform: capitalize;
    }
  }

  & > p {
    max-width: 43.0625rem;
    font-size: 1rem;
    line-height: 160%;
  }
`;

const RowMid = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  color: var(--secondary);
  font-size: 1.125rem;
  line-height: 120%; /* 1.35rem */
  white-space: nowrap;
`;

const RowRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: var(--secondary);
  p {
    font-size: 1.875rem;
    line-height: 120%; /* 2.25rem */
  }

  h1 {
    font-size: 6.25rem;
    line-height: 110%; /* 6.875rem */
  }
`;

export {
  ExhibitionWrapper,
  ExhibitionInner,
  Exhibitions,
  ExhibitionRow,
  RowLeft,
  RowLeftImageCtn,
  RowLeftInfo,
  RowMid,
  RowRight,
};
