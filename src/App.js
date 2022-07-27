import Category from "./components/Category";
import Pages from "./pages/Pages";
import Search from "./components/Search";
import styled from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <ImSpoonKnife />
          <Logo to={"/"}>Foodawesome</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 900;
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;

export default App;
