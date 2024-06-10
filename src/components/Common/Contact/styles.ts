import styled from 'styled-components';

const ContactWrapper = styled.div`
  padding: 14rem 0;
`;

const ContactInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.31rem;
  width: 95%;
  max-width: var(--max-width);
  margin: 0 auto;
`;

const ContactText = styled.div`
  h1 {
    font-size: 6.25rem;
    line-height: 110%; /* 6.875rem */
    text-transform: uppercase;

    &:last-of-type {
      color: var(--secondary);
      text-transform: capitalize;
    }
  }
`;

export { ContactWrapper, ContactInner, ContactText };
