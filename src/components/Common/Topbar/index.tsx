import { TopbarWrapper, TopbarInner, Hamburger, Line } from './styles';

const Topbar = () => {
  return (
    <TopbarWrapper>
      <TopbarInner>
        <h4>Jacob Grönberg</h4>

        <Hamburger>
          <Line />
          <Line />
          <Line />
        </Hamburger>
      </TopbarInner>
    </TopbarWrapper>
  );
};

export default Topbar;
