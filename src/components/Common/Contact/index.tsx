import ContactBtn from './ContactBtn';
import { ContactWrapper, ContactInner, ContactText } from './styles';

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactInner>
        <ContactBtn text="Get in Touch" ml="0" isContact={true} />
        <ContactText>
          <h1>
            <span>Let’s Work</span>
          </h1>
          <h1>
            <span>Together</span>
          </h1>
        </ContactText>
      </ContactInner>
    </ContactWrapper>
  );
};

export default Contact;
