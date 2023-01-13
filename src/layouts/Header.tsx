import { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { useForm } from "react-hook-form";

import { motion, useAnimation, useScroll, Variants } from "framer-motion";

import styled from "styled-components";

const Header = () => {
  const homeMatch = useMatch("/");
  const movieMatch = useMatch("movie");
  const tvMatch = useMatch("tv");

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  console.log(tvMatch);

  return (
    <Nav>
      <NavContainer>
        <Link to="/">
          <Logo>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="logo"
            />
          </Logo>
        </Link>
        <Items>
          <Link to="/">
            <Item isMatch={homeMatch}>Home</Item>
          </Link>
          <Link to="/movie">
            <Item isMatch={movieMatch}>Movie</Item>
          </Link>
          <Link to="/tv">
            <Item isMatch={tvMatch}>TV</Item>
          </Link>
        </Items>
      </NavContainer>
      <NavContainer>
        <Search onClick={() => setIsSearchOpen((prev) => !prev)}>
          <Input
            onClick={(e) => e.stopPropagation()}
            animate={{ scaleX: isSearchOpen ? 1 : 0 }}
            type="text"
            placeholder="Titles, people, genres"
          />
          <motion.svg
            animate={{ x: isSearchOpen ? -180 : 0 }}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </motion.svg>
        </Search>
      </NavContainer>
    </Nav>
  );
};

export default Header;

const Input = styled(motion.input)`
  transform-origin: right center;
  outline: none;
  color: white;
  background: black;
  border: 1px solid white;
  padding: 7px 0px 7px 37px;

  ::placeholder {
    color: white;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: black;
  font-size: 14px;
  padding: 20px 60px;
  color: white;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  margin-right: 50px;

  img {
    width: 80px;
    cursor: pointer;
  }
`;

const Items = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
`;

const Item = styled.li<{ isMatch: Object | null }>`
  height: 40px;

  border-bottom: ${(props) =>
    props.isMatch ? "3px solid rgb(227, 9, 20)" : "none"};
  color: ${(props) =>
    props.isMatch ? props.theme.red : props.theme.white.lighter};

  cursor: pointer;

  margin-right: 20px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.red};
  }
`;

const Search = styled.span`
  color: white;
  cursor: pointer;

  display: flex;
  align-items: center;

  svg {
    height: 25px;
  }
`;
