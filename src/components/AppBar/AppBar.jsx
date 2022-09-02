import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import AuthNav from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { Navbar, Container } from 'react-bootstrap';
import { GiRotaryPhone } from 'react-icons/gi';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Navbar
      as="header"
      expand="lg"
      className="mb-5 pt-4 pb-4 bg-dark bg-gradient shadow"
    >
      <Container>
        <p className="d-flex align-items-center text-white fs-2">
          <GiRotaryPhone className="me-2" />
          <b>Phone</b>book
        </p>
        <div className="ms-auto">{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>
      </Container>
    </Navbar>
  );
};

export default AppBar;
