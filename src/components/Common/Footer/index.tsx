import Link from 'next/link';
import {
  FooterWrapper,
  FooterTopSection,
  FooterLeftSection,
  FooterLinksCtn,
  FooterBottomSection,
  FooterSocialsLinks,
} from './styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTopSection>
        <FooterLeftSection>
          <h1>Jacob Grønberg</h1>
          <p>Photograph & Visual Artist</p>
        </FooterLeftSection>
        <FooterLinksCtn>
          <h3>Menu</h3>

          <Link href="#">Home</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Exhibitions</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </FooterLinksCtn>
        <FooterLinksCtn>
          <h3>Info</h3>

          <Link href="#">Styleguide</Link>
          <Link href="#">Licensing</Link>
          <Link href="#">Changelog</Link>
        </FooterLinksCtn>
      </FooterTopSection>
      <FooterBottomSection>
        <p>
          <span>
            © Replicated by <Link href="#">Temitayo</Link>{' '}
          </span>
          <svg
            width="15"
            height="2"
            viewBox="0 0 15 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.5" width="15" height="1" fill="black" />
          </svg>
          <span>Powered by Nextjs🚀</span>
        </p>

        <FooterSocialsLinks>
          <Link href="#">Twitter</Link>
          <Link href="#">Instagram</Link>
          <Link href="#">FAcebook</Link>
        </FooterSocialsLinks>
      </FooterBottomSection>
    </FooterWrapper>
  );
};

export default Footer;
