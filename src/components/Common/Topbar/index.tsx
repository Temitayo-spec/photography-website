import { TopbarWrapper, TopbarInner, Hamburger, Line } from './styles';

interface TopbarProps {
  setOpenNav: (open: boolean) => void;
  openNav: boolean;
}

const Topbar = ({ setOpenNav, openNav }: TopbarProps) => {
  return (
    <TopbarWrapper>
      <TopbarInner>
        <h4>Jacob Grönberg</h4>

        <Hamburger
          className={openNav ? 'add_styles' : ''}
          onClick={() => setOpenNav(!openNav)}
        >
          <Line />
          <Line />
          <Line />
        </Hamburger>
      </TopbarInner>
    </TopbarWrapper>
  );
};

export default Topbar;
