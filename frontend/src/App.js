import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screen/HomeScreen';
import ProductScreen from './screen/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" varient="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>mern</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
          {/* <Link to="/">mern</Link> */}
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
