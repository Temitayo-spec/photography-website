import Link from 'next/link';
import { Overlay, OverlayMenu, MenuItem } from './styles';
import { FooterBottomSection, FooterSocialsLinks } from '../Footer/styles';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Projects',
    href: '/projects',
  },
  {
    text: 'Exhibitions',
    href: '/exhibitions',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
];

interface NavbarProps {
  openNav: boolean;
}

const menuVariants = {
  hidden: {
    scaleY: 0,
  },
  open: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const linksVariants = {
  hidden: {
    y: '30vh',
    transition: {
      duration: 0.5,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const containerVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const Navbar = ({ openNav }: NavbarProps) => {
  return (
    <AnimatePresence mode="wait">
      {openNav && (
        <Overlay
          variants={menuVariants}
          initial="hidden"
          animate="open"
          exit="exit"
        >
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.75,
                duration: 0.7,
                ease: [0.83, 0, 0.17, 1],
              },
            }}
            exit={{
              opacity: 0,
            }}
          ></motion.div>
          <OverlayMenu
            variants={containerVariants}
            initial="hidden"
            animate="open"
            exit="hidden"
          >
            {navLinks.map((link, i) => (
              <MenuItem key={i}>
                <motion.li variants={linksVariants}>
                  <span>0{i + 1}</span>
                  <Link href={link.href}>{link.text}</Link>
                </motion.li>
              </MenuItem>
            ))}
          </OverlayMenu>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                delay: 0.75,
                duration: 0.7,
                ease: [0.83, 0, 0.17, 1],
              },
            }}
            exit={{
              opacity: 0,
            }}
          >
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
          </motion.div>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
